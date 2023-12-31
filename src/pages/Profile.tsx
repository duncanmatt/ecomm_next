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
            <div className='py-3rem mx-auto flex flex-col items-center justify-center'>
              <div className='text-xl'>
                Welcome back,{' '}
                <span className='font-semibold'>
                  {profile.firstName} {profile.lastName}
                </span>
              </div>
              <div className='py-1rem'>Email: {session.user?.email}</div>
              <div className='py-1rem flex justify-center'>
                <button
                  className='border-2 border-transparent font-bold w-[7.5rem] flex-1 rounded-sm text-white bg-5 hover:bg-50 hover:text-5'
                  onClick={() => signOut()}
                >
                  Logout
                </button>
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
