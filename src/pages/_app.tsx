import NextTopLoader, { NextTopLoaderProps } from 'nextjs-toploader';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Providers } from '../../lib/providers';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../lib/redux/store';
import '@/styles/globals.css';

const loaderProps: NextTopLoaderProps = {
  showSpinner: false,
  initialPosition: 0.08,
  height: 3,
  color: '#070707',
  crawl: true,
  crawlSpeed: 200,
  easing: 'ease',
  speed: 200,
  shadow: '',
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Providers>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={session}>
          <NextTopLoader {...loaderProps} />
          <Component {...pageProps} />
        </SessionProvider>
      </PersistGate>
    </Providers>
  );
}
