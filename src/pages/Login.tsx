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
      'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/auth/user',
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
      <div className='min-h-main relative'>
        <div className='p-3rem'>
          <div className='flex flex-col justify-center'>
            <div className='flex bg-[#f2f2f2] rounded-sm'>
              <form
                className='p-4 justify-between flex flex-1 gap-3 flex-col '
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
                <div>
                  <span className='flex mb-2 h-10'>
                    <input
                      className='border-2 border-transparent text-white font-bold bg-b hover:bg-[#c1c1c1] hover:text-b rounded-reg flex-1'
                      type='submit'
                      value='Login'
                    />
                  </span>
                </div>
              </form>
            </div>
            <div className='flex flex-wrap'>
              <span className='mx-1'>Don't have an account?</span>{' '}
              <Link href='/Register'>Create</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
