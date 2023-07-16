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

		if (password2 !== password) {
			// toast message
			throw new Error("passwords don't match");
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
					value='Create'
				/>
			</form>
			<div>
				Already have an account? <Link href='/Login'>Login</Link>
			</div>
		</div>
	);
};

export default Register;