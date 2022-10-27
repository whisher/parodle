import React from 'react';
import { Link } from 'react-router-dom';
import { BiHappy } from 'react-icons/bi';
import { getStatistics } from '../app/utils';
const Statistics: React.FC = () => {
	const data = getStatistics();
	console.log(data);
	if (!data) {
		return (
			<div className="flex flex-col justify-center items-center gap-6 h-96 text-2xl text-white">
				<p className="flex items-center">
					Non barare
					<span className="h-6 w-20 inline-flex justify-center items-center mx-1.5 rounded-3xl bg-lime-400  text-white uppercase">
						<Link to="/">Gioca!</Link>
					</span>
				</p>
				<p className="flex items-center">
					e che la forza sia con te <BiHappy className=" ml-0.5" />
				</p>
			</div>
		);
	}
	return (
		<div className="w-full flex flex-col gap-3 px-10 text-white">
			<h2 className="mt-3 text-center text-4xl">Statistics</h2>
			<div className="text-lg pt-3 border-t border-white/10">
				<div className="flex flex-col gap-2 py-10 border-b border-white/10">
					<p className="flex justify-between items-start">
						<span className="underline decoration-lime-400/50">
							Prima partita vinta il 1 Giugno 2022
						</span>
					</p>
					<p className="flex justify-between items-start">
						<span className="underline decoration-lime-400/50">
							Ultima partita vinta il 2 Giugno 2022
						</span>
					</p>
				</div>
				<div className="w-full flex justify-between items-center my-20">
					<p className="flex flex-col justify-center items-center">
						<span className="text-xl">2</span>
						<span className="text-sm">Partite</span>
					</p>
					<p className="flex flex-col justify-center items-center">
						<span className="text-xl">50%</span>
						<span className="text-sm">Vittorie</span>
					</p>
					<p className="flex flex-col justify-center items-center">
						<span className="text-xl">2</span>
						<span className="text-sm">Vinte di fila</span>
					</p>
					<p className="flex flex-col justify-center items-center">
						<span className="text-xl">2</span>
						<span className="text-sm">Record di vittorie in fila</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export { Statistics };
