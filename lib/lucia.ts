import { lucia } from 'lucia-auth/auth';
import { web } from 'lucia-auth/middleware';
import { pg } from '@lucia-auth/adapter-postgresql';
import postgres from 'pg';

const pool = new postgres.Pool({
	connectionString: process.env.DB_URL,
});

export const auth = lucia({
	adapter: pg(pool),
	env: 'DEV',
	middleware: web(),
});
