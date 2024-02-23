import React, { ReactNode } from "react";
import { Sidebar, Header } from ".";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className='flex h-screen'>
				<Sidebar />
				<div className='flex-1 flex flex-col overflow-hidden'>
					<Header />
					<main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
						{children}
					</main>
				</div>
			</div>
		</>
	);
};

export default Layout;
