import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		return res.status(200).json({ message: 'success' });
	}
};
