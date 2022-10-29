import React from 'react';

import { IsMatch } from '../types';
export interface CellProps {
	char: string;
	i: number;
	match: IsMatch;
}
const Cell: React.FC<CellProps> = ({ char, i, match }) => {
	let classNameContainer =
		'[perspective:1000px] h-11 w-11 lg:h-12 lg:w-12 rounded-2xl border border-trasparent text-3xl text-white font-bold uppercase overflow-hidden';
	let classNameTrasform =
		'[transform-style:preserve-3d] w-full h-full relative transition-all duration-1000';
	let classNameSpan1 =
		'[backface-visibility:hidden] absolute w-full h-full flex justify-center items-center';
	let classNameSpan2 = `${classNameSpan1} bg-gray-400 text-bck/80`;
	if (match === IsMatch.OK) {
		classNameContainer += ' !border-lime-400';
		classNameTrasform += ' rotate-180';
		classNameSpan1 += '';
		classNameSpan2 += ' !bg-green-400 !border-lime-400 rotate-180 !scale-100';
	} else if (match === IsMatch.IN_THE_SOLUTION) {
		classNameContainer += ' !border-amber-400';
		classNameTrasform += ' rotate-180';
		classNameSpan1 += '';
		classNameSpan2 += ' !bg-amber-400 !border-amber-400 rotate-180 !scale-100';
	} else if (match === IsMatch.WRONG) {
		classNameContainer += ' !border-red-400';
		classNameTrasform += ' rotate-180';
		classNameSpan1 += '';
		classNameSpan2 += ' !bg-red-400 !border-red-400 rotate-180 !scale-100';
	} else if (match === IsMatch.TO_CHECK) {
		classNameContainer += ' bg-gray-400';
		classNameSpan2 += ' !text-bck/80 !scale-100';
	} else {
		classNameContainer += ' bg-gray-400';
	}

	return (
		<div className={classNameContainer}>
			<div className={classNameTrasform} style={{ transitionDuration: `${i * 300}ms` }}>
				<div className={classNameSpan1}>
					<span className="">{char}</span>
				</div>
				<div className={classNameSpan2}>
					<span className="">{char}</span>
				</div>
			</div>
		</div>
	);
};

export { Cell };
