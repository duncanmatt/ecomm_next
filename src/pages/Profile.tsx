import Link from 'next/link';
import Layout from '@/components/Layout';

const Profile = () => {
	return (
		<Layout>
			<div className='py-3 flex flex-col items-center justify-center'>
				<div>Don't have an account ?</div>
				<Link href='/Register'>Create an account</Link>
			</div>
		</Layout>
	);
};

export default Profile;
