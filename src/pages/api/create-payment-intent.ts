import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CartItem } from '../../../interfaces';
import { formatAmountForStripe } from '../../../utils/stripe-helpers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2022-11-15',
});

const calculateOrderAmount = (items: CartItem[]) => {
	// Replace this constant with a calculation of the order's amount
	// Calculate the order total on the server to prevent
	// people from directly manipulating the amount on the client
	const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);
	const formattedTotal = formatAmountForStripe(total, 'usd');
	return formattedTotal;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { items } = req.body;

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateOrderAmount(items),
		currency: 'usd',
		automatic_payment_methods: {
			enabled: true,
		},
	});

	res.send({
		clientSecret: paymentIntent.client_secret,
	});
};