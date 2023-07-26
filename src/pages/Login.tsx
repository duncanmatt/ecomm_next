import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import Layout from '@/components/Layout';

const Login = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const activeUser = session?.user;

	if (activeUser) {
		router.push('/Profile');
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get('email');

		// check if email already exists in db
		// redirect to register if it does NOT
		// set registered state var to true if it does

		if (email) {
			signIn('email', { redirect: false, email });
		}
	};

	return (
		<Layout>
			<div className='min-h-main relative'>
				<div className='p-3rem'>
					<div className='flex flex-col justify-center'>
						<div className='flex bg-neutral-700 rounded-lg'>
							<form
								className='p-4 justify-between flex flex-1 gap-3 flex-col '
								onSubmit={handleSubmit}>
								<div className='flex flex-col flex-1 justify-evenly'>
									<span className='flex flex-row gap-2 items-center h-8'>
										<label
											className='text-white text-center font-semibold basis-30'
											htmlFor='email'>
											Email
										</label>
										<input
											className='rounded-xl border-2 bg-inherit border-g flex flex-1 h-full flex-0 text-white px-4'
											type='email'
											id='email'
											name='email'
										/>
									</span>
								</div>
								<div>
									<span className='flex mb-2 h-10'>
										<input
											className='border-2 border-transparent text-neutral-700 font-bold bg-slate-300 hover:bg-slate-400 rounded-reg flex-1'
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
