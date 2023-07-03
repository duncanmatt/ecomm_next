import Header from './header/Header';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div className='h-screen z-0'>{children}</div>
			<div className='text-center'>Footer</div>
		</>
	);
};

export default Layout;
