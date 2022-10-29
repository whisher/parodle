import React from 'react';
import { Link } from 'react-router-dom';
import { BiHappy } from 'react-icons/bi';
import { statistics } from '../app/utils';
const Statistics: React.FC = () => {
	const data = statistics;

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
	const {
		totalGames,
		firstGameWonDate,
		lastGameWonDate,
		successRate,
		currentStreak,
		bestStreak,
		bestLevel,
		averageLevel
	} = data;
	return (
		<div className="w-full flex flex-col gap-3 px-10 text-white">
			<h2 className="mt-3 text-center text-4xl">Statistics</h2>
			<div className="text-lg border-t border-white/10">
				<div className="flex flex-col gap-2 py-10 border-b border-white/10">
					<p className="flex justify-between items-start">
						<span className="underline decoration-white/50">
							Prima partita vinta il {firstGameWonDate}
						</span>
					</p>
					<p className="flex justify-between items-start">
						<span className="underline decoration-white/50">
							Ultima partita vinta il {lastGameWonDate}
						</span>
					</p>
				</div>
				<div className="w-full flex items-center my-16">
					<p className="w-1/4 flex flex-col justify-center items-center">
						<span className="text-4xl">{totalGames}</span>
						<span className="text-xs">Partite</span>
					</p>
					<p className="w-1/4 flex flex-col justify-center items-center">
						<span className="text-4xl">{successRate}%</span>
						<span className="text-xs">Vittorie</span>
					</p>
					<p className="w-1/4 flex flex-col justify-center items-center">
						<span className="text-4xl">{currentStreak}</span>
						<span className="text-xs">Ultime vinte di fila</span>
					</p>
					<p className="w-1/4 flex flex-col justify-center items-center">
						<span className="text-4xl">{bestStreak}</span>
						<span className="text-xs">Record di vittorie in fila</span>
					</p>
				</div>
				<div className="w-full flex justify-around items-center mt-16 mb-20">
					<p className="w-1/4 flex flex-col justify-center items-center">
						<span className="text-4xl">{bestLevel}</span>
						<span className="text-xs">Migliore livello di vittoria</span>
					</p>
					<p className="w-1/4 flex flex-col justify-center items-center">
						<span className="text-4xl">{averageLevel}</span>
						<span className="text-xs">Media livelli di vittoria</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export { Statistics };
