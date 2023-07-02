import Header from './header/Header';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<div>Footer</div>
		</>
	);
};

export default Layout;
