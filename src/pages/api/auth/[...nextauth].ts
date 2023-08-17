import client from '../../../../lib/db';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Email from 'next-auth/providers/email';
import { DynamoDBAdapter } from '@auth/dynamodb-adapter';
import type { Adapter } from 'next-auth/adapters';


export const authOptions: NextAuthOptions = {
	providers: [
		Email({
			server: {
				host: process.env.SMTP_HOST as string,
				port: Number(process.env.SMTP_PORT),
				auth: {
					user: process.env.SMTP_USER as string,
					pass: process.env.SMTP_PASSWORD as string,
				},
			},
			from: process.env.EMAIL_FROM as string,
		}),
	],
	adapter: DynamoDBAdapter(client, {
		tableName: 'ecomm',
	}) as Adapter,
	pages: {
		signIn: '/Login',
		newUser: '/Register'
	},
	secret: process.env.NEXTAUTH_SECRET as string,
	session: {
		strategy: 'database',
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60,
	},
};

export default NextAuth(authOptions);
