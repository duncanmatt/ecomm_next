import Link from 'next/link';
import Layout from '@/components/Layout';
import { signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import Nextauth from './api/auth/[...nextauth]';
import type { GetServerSidePropsContext } from 'next';

const Profile = () => {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Layout>
					<div className='py-3 flex flex-col items-center justify-center'>
						<div>Signed in as {session.user?.email}</div>
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
			<Link href='/Login'>Login</Link>
		</>
	);
};

// *** causes jwt_session_error ***
// export const getServerSideProps = async (
// 	context: GetServerSidePropsContext,
// ) => {
// 	const session = await getServerSession(context.req, context.res, Nextauth);

// 	if (!session) {
// 		return {
// 			redirect: {
// 				destination: '/Login',
// 				permanent: false,
// 			},
// 		};
// 	}

// 	return { props: { session } };
// };

export default Profile;
