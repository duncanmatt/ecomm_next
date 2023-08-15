import Link from 'next/link';
import Layout from '@/components/Layout';
import { signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { GetServerSidePropsContext } from 'next';
import { useSelector } from '../../lib/redux/store';
import { userProfile } from '../../lib/redux/slices/authSlice/selectors';

const Profile = () => {
  const { data: session } = useSession();
  const profile = useSelector(userProfile);

  if (session) {
    return (
      <>
        <Layout>
          <div className='mt-[160px]'>
            <div className='py-3rem flex flex-col items-center justify-center'>
              <div>
                Welcome back {profile.firstName} {profile.lastName}
              </div>
              <div>Email: {session.user?.email}</div>
              <div className='py-1rem'>
                <button onClick={() => signOut()}>Sign out</button>
              </div>
            </div>
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
