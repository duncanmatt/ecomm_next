import client from '../../../../lib/db';
import NextAuth from 'next-auth';
import Email from 'next-auth/providers/email';
import { DynamoDBAdapter } from '@auth/dynamodb-adapter';
import type { Adapter } from 'next-auth/adapters';

export default NextAuth({
	providers: [
		Email({
			server: {
				host: process.env.SMTP_HOST,
				port: Number(process.env.SMTP_PORT),
				auth: {
					user: process.env.SMTP_USER,
					pass: process.env.SMTP_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
	],
	adapter: DynamoDBAdapter(client, {
		tableName: 'ecomm',
	}) as Adapter,
	pages: {
		signIn: '/Login',
		newUser: '/auth/new-user'
	},
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'database',
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60,
	},
});
