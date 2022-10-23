import React from 'react';

import { IsMatch } from '../types';
export interface CellProps {
	char: string;
	match: IsMatch;
}
const Cell: React.FC<CellProps> = ({ char, match }) => {
	let classNameContainer =
		'h-11 w-11 lg:h-12 lg:w-12 border border-gray-400 rounded-xl text-2xl text-white font-bold uppercase overflow-hidden';
	let classNameTrasform =
		'flex flex-col -translate-y-11 lg:-translate-y-12 transition-transform duration-500';
	let classNameSpan = 'h-11 w-11 lg:h-12 lg:w-12 flex justify-center items-center';
	if (match === IsMatch.OK) {
		classNameContainer += ' !border-green-400';
		classNameTrasform += ' !translate-y-0';
		classNameSpan += ' bg-green-400';
	} else if (match === IsMatch.IN_THE_SOLUTION) {
		classNameContainer += ' !border-amber-400';
		classNameTrasform += ' !-translate-y-0';
		classNameSpan += ' bg-amber-400';
	} else if (match === IsMatch.WRONG) {
		classNameContainer += ' !border-red-400';
		classNameTrasform += ' !-translate-y-0';
		classNameSpan += ' bg-red-400';
	}

	return (
		<div className={classNameContainer}>
			<div className={classNameTrasform}>
				<span className={classNameSpan}>{char}</span>
				<span className={classNameSpan + ' !bg-gray-400 !text-bck/80'}>{char}</span>
			</div>
		</div>
	);
};

export { Cell };
