import { DynamoDB, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import NextAuth from 'next-auth';
import Email from 'next-auth/providers/email';
import { DynamoDBAdapter } from '@auth/dynamodb-adapter';
import type { Adapter } from 'next-auth/adapters';

const config: DynamoDBClientConfig = {
	credentials: {
		accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY as string,
		secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY as string,
	},
	region: process.env.NEXT_AUTH_AWS_REGION,
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
	marshallOptions: {
		convertEmptyValues: true,
		removeUndefinedValues: true,
		convertClassInstanceToMap: true,
	},
});

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
});
