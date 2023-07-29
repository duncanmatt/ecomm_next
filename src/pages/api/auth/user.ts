import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../lib/db';
import { QueryCommand } from '@aws-sdk/client-dynamodb';
import type { QueryCommandInput } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { email, password } = req.body;
		const params: QueryCommandInput = {
			TableName: 'ecomm',
			IndexName: 'GSI1',
			KeyConditionExpression: '#e = :email',
			ExpressionAttributeNames: {
				'#e': 'GSI1PK',
			},
			ExpressionAttributeValues: {
				':email': { S: `USER#${email}` },
			},
			ProjectionExpression: 'id, emailVerified, email, password',
		};

		try {
			const response = await client.send(new QueryCommand(params));
			if (response) {
				const user = { ...response.Items?.map(i => unmarshall(i))[0] };

				if (user && user.password === password) {
					return res.status(200).json(user);
				}
			}
		} catch (error) {
			return res.status(400).json({ error });
		}
	}
};