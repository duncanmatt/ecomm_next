import Link from 'next/link';
import Layout from '@/components/Layout';
import { signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { GetServerSidePropsContext } from 'next';

const Profile = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Layout>
          <div className='py-3rem flex flex-col items-center justify-center'>
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { props: { user: { email: session.user?.email } } };
  }

  return {
    redirect: {
      destination: '/Login',
      permanent: false,
    },
    props: {},
  };
};

export default Profile;
