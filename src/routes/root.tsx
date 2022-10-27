import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { BiBarChart, BiHelpCircle, BiHomeAlt } from 'react-icons/bi';
import { Provider } from 'react-redux';
import { setupStore } from '../app/store';
const store = setupStore();
const Root: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="min-h-screen flex flex-col justify-center items-center  bg-gradient-to-r from-gradient-from to-gradient-to">
				<div className="w-[90vw] lg:w-[482px] rounded-3xl bg-bck">
					<header className="pt-4 px-4">
						<nav>
							<ul className="flex justify-between items-center">
								<li>
									<Link to="/">
										<BiHomeAlt className="h-8 w-8 lg:h-10 lg:w-10 text-lime-400" />
									</Link>
								</li>
								<li className="pl-3">
									<Link to="/info">
										<BiHelpCircle className="h-8 w-8 lg:h-10 lg:w-10 text-lime-400" />
									</Link>
								</li>
								<li className="ml-auto">
									<Link to="/statistics">
										<BiBarChart className="h-8 w-8 lg:h-10 lg:w-10 text-red-400" />
									</Link>
								</li>
							</ul>
						</nav>
						<h1 className="mt-2 p-0 uppercase text-5xl lg:text-7xl font-bold text-center text-gradient bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400">
							<Link to="/">Parodle</Link>
						</h1>
					</header>
					<main className="flex flex-col justify-center items-center px-0 lg:px-0">
						<Outlet />
					</main>
					<footer className="flex justify-center items-center pt-6 py-4 rounded-bl-3xl rounded-br-3xl bg-gradient-to-r from-lime-400/50 via-indigo-400/50 to-pink-400/50">
						<a
							href="https://twitter.com/ilwebdifabio"
							target="_blank"
							rel="noreferrer"
							className="text-xs text-white/60"
						>
							Powered by ©ilwebdifabio.it
						</a>
						<span className="px-2 text-white/60">-</span>
						<a
							href="https://twitter.com/helveticarules"
							target="_blank"
							rel="noreferrer"
							className="text-xs text-white/60"
						>
							Design by ©Christine Scarcelli
						</a>
					</footer>
				</div>
			</div>
		</Provider>
	);
};

export { Root };
