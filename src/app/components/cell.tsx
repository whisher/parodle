import React from 'react';

import { IsMatch } from '../types';
export interface CellProps {
	char: string;
	match: IsMatch;
}
const Cell: React.FC<CellProps> = ({ char, match }) => {
	let classNameContainer =
		'h-11 w-11 lg:h-12 lg:w-12 border border-gray-300 rounded-xl overflow-hidden transition';
	let classNameSpan =
		'h-full w-full flex justify-center items-center  text-2xl text-white font-bold uppercase scale-0 transition';
	if (match === IsMatch.OK) {
		classNameContainer += ' !border-green-400';
		classNameSpan += ' scale-100 bg-green-400';
	} else if (match === IsMatch.IN_THE_SOLUTION) {
		classNameContainer += ' !border-amber-400';
		classNameSpan += ' scale-100 bg-amber-400';
	} else if (match === IsMatch.WRONG) {
		classNameContainer += ' !border-red-400';
		classNameSpan += ' scale-100 bg-red-400';
	}

	return (
		<div className={classNameContainer}>
			<span className={classNameSpan}>{char}</span>
		</div>
	);
};

export { Cell };
