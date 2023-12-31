import { useState, useEffect } from 'react';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  AddressElement,
} from '@stripe/react-stripe-js';
import type {
  StripePaymentElementOptions,
  StripeAddressElementOptions,
  StripeAddressElementChangeEvent,
  StripeLinkAuthenticationElementChangeEvent,
} from '@stripe/stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    address: { line1: '', city: '', state: '', postal_code: '', country: '' },
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        receipt_email: email,
        return_url: 'https://dev.d2ev7e5869alah.amplifyapp.com/OrderSuccess',
        shipping: { address: orderInfo.address, name: orderInfo.name },
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message ? error.message : '');
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: 'tabs',
  };

  const addressElementOptions: StripeAddressElementOptions = {
    mode: 'shipping',
    allowedCountries: ['US'],
    display: {
      name: 'full',
    },
  };

  return (
    <div className='px-1rem md:px-3rem'>
      <form id='payment-form' onSubmit={handleSubmit}>
        <LinkAuthenticationElement
          id='link-authentication-element'
          onChange={(e: StripeLinkAuthenticationElementChangeEvent) =>
            setEmail(e.value.email)
          }
        />
        <AddressElement
          id='address-element'
          options={addressElementOptions}
          onChange={(e: StripeAddressElementChangeEvent) =>
            setOrderInfo({ name: e.value.name, address: e.value.address })
          }
        />
        <PaymentElement id='payment-element' options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id='submit'>
          <span id='button-text'>
            {isLoading ? (
              <div className='spinner' id='spinner'></div>
            ) : (
              'Confirm Checkout'
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && (
          <div className='text-xl text-center' id='payment-message'>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
