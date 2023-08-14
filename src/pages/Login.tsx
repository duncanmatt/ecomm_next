import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../lib/redux/slices/authSlice';
import Layout from '@/components/Layout';

const Login = () => {
	const { data: session } = useSession();
	const [message, setMessage] = useState('');
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
			},
		);

		const user = await response.json();

		if (!user) {
			setMessage('User not found');
		}

		if (user && user.password === password) {
			signIn('email', { redirect: false, email });
			dispatch(setProfile({ email: user.email, id: user.id }));
		}
	};

	return (
		<Layout>
			<div className='min-h-main'>
				<div className='mt-[100px]'>
					<div>
						<p>{message}</p>
					</div>
					<div className='flex flex-col justify-center max-sm:px-1rem sm:w-[40em] sm:m-auto'>
						<div className='flex flex-col bg-95 rounded-sm'>
							<div className='my-3rem font-semibold text-center'>
								<h3 className='uppercase text-lg tracking-wide'>
									Login to access your account
								</h3>
							</div>
							<form
								className='justify-between p-4 flex flex-1 gap-3 flex-col w-full'
								onSubmit={handleSubmit}>
								<div className='flex flex-col w-full'>
									<span className='h-9 mb-2'>
										<label
											className='font-semibold'
											htmlFor='email'>
											<input
												className='rounded-xl border-2 bg-inherit border-b rounded-xs flex h-full w-full px-4'
												type='email'
												id='email'
												name='email'
												placeholder='Email'
												aria-aria-placeholder='Email'
												required
											/>
										</label>
									</span>
									<span className='h-9'>
										<label
											className='font-semibold basis-30'
											htmlFor='password'>
											<input
												className='rounded-xl border-2 bg-inherit border-b rounded-xs flex w-full h-full px-4'
												type='password'
												id='password'
												name='password'
												placeholder='Password'
												aria-placeholder='Password'
												required
											/>
										</label>
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
							<Link
								className='hover:underline'
								href='/Register'>
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
