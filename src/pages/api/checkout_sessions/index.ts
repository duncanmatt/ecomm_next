import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { formatAmountForStripe } from '../../../../utils/stripe-helpers';
import { CURRENCY, MAX_AMOUNT, MIN_AMOUNT } from '../../../../config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2022-11-15',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const amount: number = req.body.amount;
		try {
			// Validate the amount that was passed from the client.
			if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
				throw new Error('Invalid amount.');
			}
			// Create Checkout Sessions from body params.
			const params: Stripe.Checkout.SessionCreateParams = {
				submit_type: 'donate',
				payment_method_types: ['card'],
				mode: 'payment',
				line_items: [
					{
						quantity: 1,
						price_data: {
							unit_amount: formatAmountForStripe(amount, CURRENCY),
							currency: CURRENCY,
							product_data: {
								name: 'Custom amount donation',
							},
						},
					},
				],
				success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/donate-with-checkout`,
			};
			const checkoutSession: Stripe.Checkout.Session =
				await stripe.checkout.sessions.create(params);

			res.status(200).json(checkoutSession);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : 'Internal server error';
			res.status(500).json({ statusCode: 500, message: errorMessage });
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
};
