import React from 'react';
import { BiBarChart, BiCog, BiHelpCircle, BiMenu } from 'react-icons/bi';

const Nav: React.FC = () => {
	return (
		<header className="px-4">
			<nav>
				<ul className="flex justify-between items-center">
					<li>
						<BiMenu className="h-9 w-9 text-lime-400" />
					</li>
					<li>
						<BiHelpCircle className="h-9 w-9 text-lime-400" />
					</li>
					<li className="ml-auto">
						<BiBarChart className="h-9 w-9 text-red-400" />
					</li>
					<li>
						<BiCog className="h-9 w-9 text-red-400" />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Nav };
