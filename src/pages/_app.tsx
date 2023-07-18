import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Providers } from '../../lib/providers';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<Providers>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</Providers>
	);
}
