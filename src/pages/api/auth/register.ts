import client from '../../../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		res.status(404).json({ error: 'NOT FOUND' });
	}

	const { firstName, lastName, email, password, password2, birthday } =
		req.body;

	const uid = 'poop';

	const params = {
		TableName: 'ecomm',
		Item: {
			pk: { S: `ACCOUNT#${uid}` },
			sk: { S: `ACCOUNT#${uid}` },
			firstName: { S: `${firstName}` },
			lastName: { S: `${lastName}` },
			email: { S: `${email}` },
			password: { S: `${password}` },
			birthday: { S: `${birthday}` },
		},
	};

	try {
		client.put(params);
	} catch (error) {
		console.error(error);
	}
};
