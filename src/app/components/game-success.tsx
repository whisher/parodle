import React from 'react';
import { BiHappy } from 'react-icons/bi';
import { GameResult } from '../types';

export interface GameSuccessProps {
	gameStatus: {
		level: number;
		result: GameResult;
	};
}
const GameSuccess: React.FC<GameSuccessProps> = ({ gameStatus }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BiHappy className="h-16 w-16 text-lime-400" />
			<h3 className="text-4xl text-white">Hai vinto al {gameStatus.level}° livello.</h3>
		</div>
	);
};

export { GameSuccess };
