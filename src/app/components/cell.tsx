import React from 'react';

import { IsMatch } from '../types';
export interface CellProps {
	char: string;
	i: number;
	match: IsMatch;
}
const Cell: React.FC<CellProps> = ({ char, i, match }) => {
	let classNameContainer =
		'h-11 w-11 lg:h-12 lg:w-12 rounded-2xl border border-gray-400 rounded-2xl text-3xl text-white font-bold uppercase overflow-hidden';
	let classNameTrasform =
		'flex flex-col rounded-2xl lg:rounded-none overflow-hidden transition-transform -translate-y-11 lg:-translate-y-12';
	let classNameSpan1 =
		'h-11 w-11 lg:h-12 lg:w-12 flex justify-center items-center rounded-tl-2xl rounded-tr-2xl lg:rounded-none';
	let classNameSpan2 = `${classNameSpan1} bg-gray-400 text-bck/80 transition scale-0 duration-300`;
	if (match === IsMatch.OK) {
		classNameContainer += ' bg-green-400 !border-lime-400';
		classNameTrasform += ' !translate-y-0';
		classNameSpan1 += ' bg-lime-400';
		classNameSpan2 += ' !text-bck/80 !scale-100';
	} else if (match === IsMatch.IN_THE_SOLUTION) {
		classNameContainer += ' bg-amber-400 !border-amber-400';
		classNameTrasform += ' !translate-y-0';
		classNameSpan1 += ' bg-amber-400';
		classNameSpan2 += ' !text-bck/80 !scale-100';
	} else if (match === IsMatch.WRONG) {
		classNameContainer += ' bg-red-400 !border-red-400';
		classNameTrasform += ' !translate-y-0';
		classNameSpan1 += ' bg-red-400';
		classNameSpan2 += ' !text-bck/80 !scale-100';
	} else if (match === IsMatch.TO_CHECK) {
		classNameContainer += ' bg-gray-400';
		classNameSpan2 += ' !text-bck/80 !scale-100';
	} else {
		classNameContainer += ' bg-gray-400';
	}

	return (
		<div className={classNameContainer}>
			<div className={classNameTrasform} style={{ transitionDuration: `${i * 300}ms` }}>
				<span className={classNameSpan1}>{char}</span>
				<span className={classNameSpan2}>{char}</span>
			</div>
		</div>
	);
};

export { Cell };
