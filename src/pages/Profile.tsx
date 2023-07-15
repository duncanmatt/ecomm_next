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
						<div>Signed in as {session.user.email}</div>
						<br />
						<button onClick={() => signOut()}>Sign out</button>
					</div>
				</Layout>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<Link href='/api/auth/signin'>Login</Link>
		</>
	);
};

// 	CHANGE TO SSR

export default Profile;
