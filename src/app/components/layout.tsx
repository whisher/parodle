import React, { ReactNode } from 'react';

export interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-screen flex justify-center items-center bg-gradient-to-r from-gradient-from to-gradient-to">
			<main>{children}</main>
		</div>
	);
};

export { Layout };
