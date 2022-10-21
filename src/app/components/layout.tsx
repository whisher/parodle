import React, { ReactNode } from 'react';

export interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gradient-from to-gradient-to">
			<main>{children}</main>
			{/*<footer className="hidden lg:block fixed -bottom-1/3 left-0 right-0 h-[400px] w-1/2 ml-auto mr-auto rounded-full bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400"></footer>*/}
		</div>
	);
};

export { Layout };
