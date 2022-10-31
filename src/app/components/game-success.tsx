import React from 'react';
import { BiHappy } from 'react-icons/bi';
import { GameResult } from '../types';

export interface GameSuccessProps {
	gameStatus: {
		level: number;
		result: GameResult;
	};
	solution: string;
}
const GameSuccess: React.FC<GameSuccessProps> = ({ gameStatus, solution }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BiHappy className="h-16 w-16 text-lime-400" />
			<h3 className="px-3 lg:px-0 text-2xl text-white/90">
				Hai indovinato la parola "{solution}" al {gameStatus.level}° livello.
			</h3>
		</div>
	);
};

export { GameSuccess };
