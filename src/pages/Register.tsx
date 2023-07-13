import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Register = () => {
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get('email');
		const password = formData.get('password');

		const response = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (response.redirected) return router.push(response.url); // redirect on redirect responses
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
