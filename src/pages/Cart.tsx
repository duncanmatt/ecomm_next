import Layout from '@/components/Layout';
import { useSelector, useDispatch } from '../../lib/redux/store';
import {
	cartTotal,
	cartItems,
	cartCount,
} from '../../lib/redux/slices/cartSlice/selectors';
import QuantityBar from '@/components/cart/QuantityBar';
import { CartItem } from '../../interfaces';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
	const dispath = useDispatch();
	const price = useSelector(cartTotal);
	const items = useSelector(cartItems);
	const count = useSelector(cartCount);

	return (
		<Layout>
			<div className='p-2rem'>
				<h2 className='font-bold text-xl text-center'>Cart ({count})</h2>
				<div className='grid '>
					<div className='flex py-1rem '>
						<ul className='p-1rem '>
							{items.map((item: CartItem, index: number) => (
								<li
									key={index}
									className='mb-10'>
									<div className='grid grid-row-1 gap-x-5 grid-cols-2'>
										<div className='relative h-full w-full '>
											<Image
												alt={item.name}
												src={item.imgUrl}
												width={168}
												height={227}
											/>
										</div>
										<div className='flex flex-col justify-around'>
											<div>
												<span className='flex flex-wrap'>
													{item.name} - ${item.price}
												</span>
											</div>
											<QuantityBar
												pk={item.pk}
												qty={item.qty}
											/>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div className='flex flex-row justify-between my-3'>
							<span>Total</span>
							<span>${price}</span>
						</div>
						<div className='flex'>
							<Link
								className='flex flex-1 text-center justify-center border-2 border-transparent h-[2rem] items-center font-semibold bg-b rounded-xs text-white'
								href='/Checkout'>
								Checkout
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Cart;
