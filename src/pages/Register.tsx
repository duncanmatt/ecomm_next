import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import { uid } from '../../utils/uid';

const Register = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const password2 = formData.get('password2');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const newId = uid();

    if (password2 !== password) {
      // toast message
      throw new Error("passwords don't match");
    }

    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newId,
        firstName,
        lastName,
        newEmai: email,
        password,
      }),
    });

    const profile = await response.json();
    console.log(profile);
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
                      className=' text-center font-semibold basis-30'
                      htmlFor='firstName'
                    >
                      First Name
                    </label>
                    <input
                      className='rounded-xl border-2 bg-inherit border-b rounded-xs flex flex-1 h-full flex-0 px-4'
                      type='text'
                      id='firstName'
                      name='firstName'
                    />
                  </span>
                  <span className='flex flex-row gap-2 items-center h-8'>
                    <label
                      className='text-center font-semibold basis-30'
                      htmlFor='lastName'
                    >
                      Last Name
                    </label>
                    <input
                      className='rounded-xl border-2 bg-inherit border-b rounded-xs flex flex-1 h-full flex-0 px-4'
                      type='text'
                      id='lastName'
                      name='lastName'
                    />
                  </span>
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
                      required
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
                      required
                    />
                  </span>
                  <span className='flex flex-row gap-2 items-center h-8'>
                    <label
                      className='text-center font-semibold basis-30'
                      htmlFor='password2'
                    >
                      Confirm Password
                    </label>
                    <input
                      className='rounded-xl border-2 bg-inherit border-b rounded-xs flex flex-1 h-full flex-0 px-4'
                      type='password'
                      id='password2'
                      name='password2'
                    />
                  </span>
                </div>
                <div>
                  <span className='flex mb-2 h-10'>
                    <input
                      className='border-2 border-transparent text-white font-bold bg-b hover:bg-[#c1c1c1] hover:text-b rounded-reg flex-1'
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
