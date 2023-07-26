import { useState } from 'react';
import getStripe from '../../utils/get-stripe';
import { fetchPostJSON } from '../../utils/api-helpers';
import { formatAmountForDisplay } from '../../utils/stripe-helpers';
import * as config from '../../config';

const CheckoutForm = () => {
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState({
		customDonation: Math.floor(
			Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
		),
	});

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault();
		setLoading(true);
		// Create a Checkout Session.
		const response = await fetchPostJSON('/api/checkout_sessions', {
			price_data: {
				unit_amount: input.customDonation,
			},
		});

		if (response.statusCode === 500) {
			console.error(response.message);
			return;
		}
		// Redirect to Checkout
		const stripe = await getStripe();
		const { error } = await stripe!.redirectToCheckout({
			// make id field available
			sessionId: response.id,
		});

		console.warn(error.message);
		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Custom donation amount (
				{formatAmountForDisplay(config.MIN_AMOUNT, config.CURRENCY)}-
				{formatAmountForDisplay(config.MAX_AMOUNT, config.CURRENCY)});
				<input
					type='number'
					name='customDonation'
					value={Number(input.customDonation)}
					min={config.MIN_AMOUNT}
					max={config.MAX_AMOUNT}
					step={config.AMOUNT_STEP}
					onChange={handleInputChange}></input>
				<input
					type='range'
					name='customDonation'
					value={Number(input.customDonation)}
					min={config.MIN_AMOUNT}
					max={config.MAX_AMOUNT}
					step={config.AMOUNT_STEP}
					onChange={handleInputChange}></input>
			</label>
			<button
				type='submit'
				disabled={loading}>
				Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
			</button>
		</form>
	);
};

export default CheckoutForm;
