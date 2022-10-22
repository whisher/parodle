import React, { ReactNode } from 'react';

export interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gradient-from to-gradient-to">
			<main>{children}</main>
			{
				<footer className="hidden lg:block fixed lg:-bottom-[200px] 2xl:h-[500px] 2xl:-bottom-[260px] lg:h-[400px] left-0 right-0 w-1/2 ml-auto mr-auto clip-circle bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400 opacity-80"></footer>
			}
		</div>
	);
};

export { Layout };
