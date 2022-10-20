import React from 'react';

import { IsMatch } from '../types';
export interface CellProps {
	char: string;
	match: IsMatch;
}
const Cell: React.FC<CellProps> = ({ char, match }) => {
	let className =
		'h-14 w-14 flex justify-center items-center  border border-gray-300 rounded text-2xl text-gray-300 font-bold uppercase';
	if (match === IsMatch.OK) {
		className += ' bg-green-400';
	} else if (match === IsMatch.IN_THE_SOLUTION) {
		className += ' bg-amber-400';
	} else if (match === IsMatch.WRONG) {
		className += ' bg-red-400';
	}
	return <div className={className}>{char}</div>;
};

export { Cell };
