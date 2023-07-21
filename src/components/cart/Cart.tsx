import { useSelector } from '../../../lib/redux/store';
import {
	cartTotal,
	cartItems,
} from '../../../lib/redux/slices/cartSlice/selectors';
import { CartItem } from '../../../interfaces';
import Image from 'next/image';

const Cart = () => {
	const items = useSelector(cartItems);
	const price = useSelector(cartTotal);

	return (
		<div className='absolute z-6 top-[64px] w-[20rem]  right-[0px]'>
			<div className='p-[0.75rem]'>
				<div className='w-full min-h-[20rem] p-[0.75rem] backdrop-blur-[135px] bg-faded shadow-bag rounded-xs'>
					<div className='flex flex-col'>
						<div>
							<ul>
								{items.map((item: CartItem, index: number) => (
									<li
										className='mb-3'
										key={index}>
										<div className='flex flex-row'>
											<div className='relative h-[7.25rem] w-[5.75rem]'>
												<Image
													alt={item.name}
													src={item.imgUrl}
													fill
													className=''
												/>
											</div>
											<div className='flex flex-1 justify-around px-1rem flex-col'>
												<span className='font-bold'>{item.name}</span>
												<div className='flex justify-between'>
													<span>({item.qty})</span>
													<span>${item.price}</span>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
							<div className='w-full py-2'>
								<div className='flex flex-row font-bold'>
									Total<span className='flex flex-1 justify-end'>${price}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='bg-b text-white font-semibold rounded-xs text-center border-transparent border-2'>
						Checkout
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
