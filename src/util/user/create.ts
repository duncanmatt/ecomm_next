import sql from '../../../lib/db';

const create = async (id: number, email_address: string, password: string) => {
	return await sql`
    INSERT INTO public.user(id, email_address, password)
    VALUES(${id}, ${email_address}, ${password})
  `;
};

export default create;
