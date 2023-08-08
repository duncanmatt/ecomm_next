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
import { userProfile } from '../../lib/redux/slices/authSlice/selectors';
import { useSelector } from '../../lib/redux/store';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import type { GetServerSidePropsContext } from 'next';

const s = getStripe();

const Checkout = () => {
  const items = useSelector(cartItems);
  const total = useSelector(cartTotal);
  const user = useSelector(userProfile);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch(
      'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/stripe/create-payment-intent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
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
          <Elements options={options} stripe={s}>
            <CheckoutForm />
          </Elements>
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { props: { user: { email: session.user?.email } } };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/Login',
    },
    props: {},
  };
}

export default Checkout;
