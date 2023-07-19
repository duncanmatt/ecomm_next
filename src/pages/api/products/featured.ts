import client from '../../../../lib/db';
import { QueryCommand } from '@aws-sdk/client-dynamodb';
import type { QueryCommandInput } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const params: QueryCommandInput = {
	TableName: 'ecomm',
	IndexName: 'GSI1',
	KeyConditionExpression: '#br = :brand',
	ExpressionAttributeNames: {
		'#br': 'GSI1PK',
	},
	ExpressionAttributeValues: marshall({
		':brand': 'BRAND#1',
	}),
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const response = await client.send(new QueryCommand(params));
			if (response) {
				const featured = response.Items?.map(i => unmarshall(i));
				return res.status(200).json(featured);
			}
		} catch (error) {
			console.error(error);
		}
	}
};
