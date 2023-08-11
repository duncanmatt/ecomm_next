import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../lib/redux/slices/authSlice';
import Layout from '@/components/Layout';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const activeUser = session?.user;
  const dispatch = useDispatch();

  if (activeUser) {
    router.push('/Profile');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const userData = { email, password };

    const response = await fetch(
      'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/auth/user',
      {
        method: 'POST',
        body: JSON.stringify(userData),
      }
    );

    const user = await response.json();

    if (user && user.password === password) {
      signIn('email', { redirect: false, email });
      dispatch(setProfile({ email: user.email, id: user.id }));
    }
  };

  return (
    <Layout>
      <div className='min-h-main'>
        <div className='mt-[160px]'>
          <div className='flex flex-col justify-center p-3rem'>
            <div className='flex px-4 py-5 bg-95 rounded-sm'>
              <form
                className='justify-between flex flex-1 gap-3 flex-col '
                onSubmit={handleSubmit}
              >
                <div className='flex flex-col flex-1 gap-2'>
                  <span className='flex flex-row gap-2 items-center h-8'>
                    <label
                      className='text-center font-semibold basis-30'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      className='rounded-xl border-2 bg-inherit border-b rounded-xs flex flex-1 h-full flex-0 px-4'
                      type='email'
                      id='email'
                      name='email'
                    />
                  </span>
                  <span className='flex flex-row gap-2 items-center h-8'>
                    <label
                      className=' text-center font-semibold basis-30'
                      htmlFor='password'
                    >
                      Password
                    </label>
                    <input
                      className='rounded-xl border-2 bg-inherit border-b rounded-xs flex flex-1 h-full flex-0 px-4'
                      type='password'
                      id='password'
                      name='password'
                    />
                  </span>
                </div>
                <div className='pt-3'>
                  <span className='flex h-10'>
                    <input
                      className='border-2 border-transparent text-white font-bold bg-b hover:bg-[#c1c1c1] hover:text-b rounded-reg flex-1'
                      type='submit'
                      value='Login'
                    />
                  </span>
                </div>
              </form>
            </div>
            <div className='flex flex-wrap my-2'>
              <span className='mx-1'>Don't have an account?</span>{' '}
              <Link className='hover:underline' href='/Register'>
                Create
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
