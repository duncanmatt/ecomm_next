import client from '../../../../lib/db';
import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
	GetServerSidePropsContext,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';
import type { GetItemInput } from 'aws-sdk/clients/dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import CartIcon from '@/components/icons/CartIcon';
import { Product } from '../../../../interfaces';
import { useDispatch } from '../../../../lib/redux/store';
import { addToCart } from '../../../../lib/redux/slices/cartSlice';

export default ({
	product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const dispath = useDispatch();

	return (
		<Layout>
			<div className='p-1rem'>
				<div className='mb-3rem text-2xl uppercase'>
					<h2 className='font-bold'>{product.name}</h2>
				</div>
				<div className='relative mb-20'>
					<div className='relative z-0 aspect-[168/227]'>
						<button
							className='absolute right-5 top-4 rounded-full flex z-1'
							onClick={() => dispath(addToCart(product))}>
							<CartIcon />
						</button>
						<Image
							alt='description'
							src={product.imgUrl}
							fill
							className='absolute flex -z-10 bg-[rgba(0,0,0,0.03)]'
						/>
					</div>
					<div className='pt-2 flex flex-row justify-between'>
						<div className='flex flex-col text-xs'>
							<span className='uppercase'>{product.name}</span>
							<span>${product.price}.00</span>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const pk = context.params?.product;

	const params: GetItemInput = {
		TableName: 'ecomm',
		Key: {
			pk: `${pk}`,
		},
		ProjectionExpression:
			'pk,sk,imgUrl,GSI1PK,GSI1SK,categoryId,productId,stock,price',
	};

	const item = await client.get(params);
	const product = item.Item;
	console.log(JSON.stringify(product));
	return { props: { product } };
};
