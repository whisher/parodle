import React from 'react';
import { BiSad } from 'react-icons/bi';

export interface GameFailureProps {
	solution: string;
}
const GameFailure: React.FC<GameFailureProps> = ({ solution }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BiSad className="h-16 w-16 text-red-400" />
			<h3 className="text-white/90">Non hai indovinato la parola {solution}</h3>
		</div>
	);
};

export { GameFailure };
