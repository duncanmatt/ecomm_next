import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import Layout from '@/components/Layout';

const Login = ({}) => {
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

		if (email) {
			signIn('email', { email });
		}
	};

	return (
		<Layout>
			<div className='h-full'>
				<div className='flex h-full'>
					<div className='m-auto'>
						<div className='flex bg-neutral-700 rounded-lg'>
							<form
								className='p-4 lg:min-h-[15em] justify-between flex flex-1 gap-3 flex-col '
								onSubmit={handleSubmit}
								method='post'
								action='/api/auth/signin'>
								<div className='flex flex-col flex-1 justify-evenly'>
									<span className='flex flex-row gap-2 items-center h-8'>
										<label
											className='text-white font-semibold basis-30'
											htmlFor='first_name'>
											First Name
										</label>
										<input
											className='rounded-xl border-2 bg-inherit border-g flex flex-1 h-full text-white px-4'
											type='text'
											id='first_name'
											name='first_name'
										/>
									</span>
									<span className='flex flex-row  gap-2 items-center h-8'>
										<label
											className='text-white font-semibold basis-30'
											htmlFor='last_name'>
											Last Name
										</label>
										<input
											className='rounded-xl border-2 bg-inherit border-g flex flex-1 h-full text-white px-4'
											type='text'
											id='last_name'
											name='last_name'
										/>
									</span>
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
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
