import Link from 'next/link';
import Layout from '@/components/Layout';
import { useSession, signOut, signIn } from 'next-auth/react';

const Profile = () => {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Layout>
					<div className='py-3 flex flex-col items-center justify-center'>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</div>
				</Layout>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn('email')}>Login</button>
		</>
	);
};

// 	CHANGE TO SSR

export default Profile;
