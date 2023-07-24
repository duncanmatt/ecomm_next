type ScrollProps = {
	children: React.ReactNode;
};

const SearchScroll = ({ children }: ScrollProps) => {
	return <div className='min-h-main overflow-y-scroll'>{children}</div>;
};

export default SearchScroll;
