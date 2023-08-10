import { DynamoDB, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const config: DynamoDBClientConfig = {
	credentials: {
		accessKeyId: process.env.NEXTAUTH_AWS_ACCESS_KEY_ID as string,
		secretAccessKey: process.env.NEXTAUTH_AWS_SECRET_ACCESS_KEY as string,
	},
	region: 'us-east-1',
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
	marshallOptions: {
		convertEmptyValues: true,
		removeUndefinedValues: true,
		convertClassInstanceToMap: true,
	},
});

export default client;
