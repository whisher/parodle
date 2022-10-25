import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { BiBarChart, BiHelpCircle, BiHomeAlt } from 'react-icons/bi';
import { Provider } from 'react-redux';
import { setupStore } from '../app/store';
const store = setupStore();
const Root: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gradient-from to-gradient-to">
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
						<h1 className="mt-8 p-0 uppercase text-5xl lg:text-7xl font-bold text-center text-gradient bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400">
							<Link to="/">Parodle</Link>
						</h1>
					</header>
					<main className="flex justify-center px-6 lg:px-0">
						<Outlet />
					</main>
					<footer className="relative z-0 flex justify-center items-center mt-9  py-3">
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
				<div className="hidden lg:block fixed z-10 lg:-bottom-[200px] 2xl:h-[500px] 2xl:-bottom-[350px] lg:h-[400px] left-0 right-0 w-full ml-auto mr-auto clip-circle bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400 opacity-80"></div>
			</div>
		</Provider>
	);
};

export { Root };
