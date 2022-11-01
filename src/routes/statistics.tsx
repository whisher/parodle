import React from 'react';
import { Link } from 'react-router-dom';
import { BiHappy } from 'react-icons/bi';
import { getStorage, getStatistics } from '../app/utils';
const Statistics: React.FC = () => {
	const data = getStatistics(getStorage());

	if (!data) {
		return (
			<div className="flex flex-col justify-center items-center gap-6 h-96 text-2xl text-white">
				<p className="flex items-center">
					Non barare
					<span className="px-1.5 text-lime-400 uppercase underline">
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
	console.log(JSON.stringify(getStorage()));
	return (
		<div className="w-full flex flex-col gap-3 px-6 text-white">
			<h2 className="mt-3 text-center text-4xl">Statistics</h2>
			<div className="text-lg border-t border-white/10">
				<div className="flex flex-col gap-2 py-10 border-b border-white/10">
					<p className="flex justify-between items-start">
						<span>Prima partita vinta il {firstGameWonDate}</span>
					</p>
					<p className="flex justify-between items-start">
						<span>Ultima partita vinta il {lastGameWonDate}</span>
					</p>
				</div>
				<div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 lg:gap-0 my-8 lg:my-16">
					<p className="flex flex-col justify-center items-center">
						<span className="text-4xl">{totalGames}</span>
						<span className="text-xs">Partite</span>
					</p>
					<p className="flex flex-col justify-center items-center">
						<span className="text-4xl">{successRate}%</span>
						<span className="text-xs">Vittorie</span>
					</p>
					<p className="flex flex-col justify-center items-center">
						<span className="text-4xl">{currentStreak}</span>
						<span className="text-xs">Ultime vinte di fila</span>
					</p>
					<p className="flex flex-col justify-center items-center">
						<span className="text-4xl">{bestStreak}</span>
						<span className="text-xs">Record di vittorie in fila</span>
					</p>
				</div>
				<div className="w-full flex justify-around items-center mb-20">
					<p className="flex flex-col justify-center items-center">
						<span className="text-4xl">{bestLevel}</span>
						<span className="text-xs">Migliore livello di vittoria</span>
					</p>
					<p className="flex flex-col justify-center items-center">
						<span className="text-4xl">{averageLevel}</span>
						<span className="text-xs">Media livelli di vittoria</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export { Statistics };
