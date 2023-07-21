import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Providers } from '../../lib/providers';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../lib/redux/store';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<Providers>
			<PersistGate
				loading={null}
				persistor={persistor}>
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</PersistGate>
		</Providers>
	);
}
