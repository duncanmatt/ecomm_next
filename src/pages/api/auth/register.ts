import create from '../../../util/user/create';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		return res.status(404).json({ error: 'NOT FOUND' });
	}

	const { email, password } = JSON.parse(req.body);

	if (typeof email !== 'string' || typeof password !== 'string') {
		return res.status(400).json({ error: 'Invalid Credentials Format' });
	}

	const id = 132381431;

	try {
		create(id, email, password);
		return res.redirect(302, '/'); // redirect user on account creations
	} catch (e) {
		// username taken
		return res.status(400).json({ error: 'username already in use' });
	}
};
