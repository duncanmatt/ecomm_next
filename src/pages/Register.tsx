import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { uid } from '../../utils/uid';

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const password2 = formData.get('password2');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');

    if (password2 !== password) {
      // toast message
      throw new Error("passwords don't match");
    }

    const response = await fetch(
      'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/auth/register',
      {
        method: 'POST',
        body: JSON.stringify({
          newId: uid(),
          firstName,
          lastName,
          newEmail: email,
          password,
        }),
      }
    );

    const profile = await response.json();

    if (profile.httpStatusCode === 200) {
      router.push('/Login');
    }
  };

  return (
    <Layout>
      <div className='min-h-main relative'>
        <div className='mt-[100px]'>
          <div className='flex flex-col m-auto w-[32em]'>
            <div className='flex flex-col bg-[#f2f2f2] rounded-sm'>
              <div className='my-3rem font-semibold text-center'>
                <h3 className='text-xl tracking-wide uppercase'>
                  register your new account
                </h3>
              </div>
              <form
                className='p-4 justify-between flex flex-1 flex-col w-full '
                onSubmit={handleSubmit}
              >
                <div className='flex flex-col w-full '>
                  <span className='my-1 h-9'>
                    <label
                      className='font-semibold basis-30'
                      htmlFor='firstName'
                    >
                      <input
                        className='rounded-xl border-2 bg-inherit border-b rounded-xs flex w-full h-full px-4'
                        type='text'
                        id='firstName'
                        name='firstName'
                        required
                        placeholder='First Name'
                      />
                    </label>
                  </span>
                  <span className='my-1 h-9'>
                    <label
                      className='font-semibold basis-30'
                      htmlFor='lastName'
                    >
                      <input
                        className='rounded-xl border-2 bg-inherit border-b rounded-xs flex w-full h-full px-4'
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Last Name'
                      />
                    </label>
                  </span>
                  <span className='h-9 my-1'>
                    <label className='font-semibold' htmlFor='email'>
                      <input
                        className='rounded-xl border-2 bg-inherit border-b rounded-xs flex h-full w-full px-4'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        required
                      />
                    </label>
                  </span>
                  <span className='my-1 h-9'>
                    <label
                      className='font-semibold basis-30'
                      htmlFor='password'
                    >
                      <input
                        className='rounded-xl border-2 bg-inherit border-b rounded-xs flex w-full h-full px-4'
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        required
                      />
                    </label>
                  </span>
                  <span className='my-1 h-9'>
                    <label
                      className='font-semibold basis-30'
                      htmlFor='password2'
                    >
                      <input
                        className='rounded-xl border-2 bg-inherit border-b rounded-xs flex w-full h-full px-4'
                        type='password'
                        id='password2'
                        name='password2'
                        placeholder='Confirm Password'
                        required
                      />
                    </label>
                  </span>
                </div>
                <div className='pt-1rem'>
                  <span className='flex h-12'>
                    <input
                      className='border-2 border-transparent text-white font-bold bg-b hover:bg-[#c1c1c1] hover:text-b rounded-sm flex-1'
                      type='submit'
                      value='Register'
                    />
                  </span>
                </div>
              </form>
            </div>
            <div className='flex flex-wrap'>
              <span className='mx-1'>Already have an account?</span>
              <Link href='/Register'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
