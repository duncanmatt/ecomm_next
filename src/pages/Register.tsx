import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { signIn } from 'next-auth/react';

const Register = () => {
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get('email');
		const password = formData.get('password');
		const password2 = formData.get('password2');

		if (password === password2) {
			signIn('email', { email });
		}
	};
	return (
		<div>
			<h1>Create an account</h1>
			<form
				method='post'
				onSubmit={handleSubmit}
				action='/api/auth/register'>
				<label htmlFor='email'>email</label>
				<br />
				<input
					type='email'
					id='email'
					name='email'
				/>
				<br />
				<label htmlFor='password'>password</label>
				<br />
				<input
					type='password'
					id='password'
					name='password'
				/>
				<br />
				<label htmlFor='password2'>confirm password</label>
				<br />
				<input
					type='password'
					id='password2'
					name='password2'
				/>
				<br />
				<input
					type='submit'
					value='Continue'
				/>
			</form>
			<Link href='/login'>Login</Link>
		</div>
	);
};

export default Register;
