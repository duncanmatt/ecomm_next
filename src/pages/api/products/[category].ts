import client from '../../../../lib/db';
import { QueryCommand } from '@aws-sdk/client-dynamodb';
import type { QueryCommandInput } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		const categoryId =
			req.query?.category === 'shirts'
				? 1
				: req.query.category === 'sweatshirts'
				? 2
				: 3;

		const params: QueryCommandInput = {
			TableName: 'ecomm',
			IndexName: 'GSI1',
			KeyConditionExpression: '#br = :brand and begins_with(#cat, :id)',
			ExpressionAttributeNames: {
				'#br': 'GSI1PK',
				'#cat': 'GSI1SK',
			},
			ExpressionAttributeValues: marshall({
				':brand': 'BRAND#1',
				':id': `CATEGORY#${categoryId}`,
			}),
		};

		try {
			const response = await client.send(new QueryCommand(params));
			if (response) {
				const products = response.Items?.map(i => unmarshall(i));
				return res.status(200).json(products);
			}
		} catch (error) {
			console.error(error);
		}
	}
};
