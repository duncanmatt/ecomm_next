import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import getStripe from '../../utils/get-stripe';
import Layout from '@/components/Layout';
import CheckoutForm from '@/components/cart/CheckoutForm';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import {
	cartItems,
	cartTotal,
} from '../../lib/redux/slices/cartSlice/selectors';
import { useSelector } from '../../lib/redux/store';

const s = getStripe();

const Checkout = () => {
	const items = useSelector(cartItems);
	const total = useSelector(cartTotal);
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		fetch('/api/create-payment-intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ items }),
		})
			.then(res => res.json())
			.then(data => setClientSecret(data.clientSecret));
	}, []);

	const appearance = {
		theme: 'stripe' as const,
	};
	const options: StripeElementsOptions = {
		clientSecret,
		appearance,
	};

	return (
		<Layout>
			{clientSecret && (
				<div className='p-1rem'>
					<h2 className='font-bold text-center'>${total}.00</h2>
					<Elements
						options={options}
						stripe={s}>
						<CheckoutForm />
					</Elements>
				</div>
			)}
		</Layout>
	);
};

export default Checkout;
