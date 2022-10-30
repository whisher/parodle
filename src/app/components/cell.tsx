import React from 'react';

import { IsMatch } from '../types';
export interface CellProps {
	char: string;
	i: number;
	match: IsMatch;
}
const Cell: React.FC<CellProps> = ({ char, i, match }) => {
	let classNameContainer =
		'[perspective:1000px] h-11 w-11 lg:h-14 lg:w-14 rounded-2xl text-3xl text-white font-bold uppercase overflow-hidden';
	let classNameTrasform =
		'[transform-style:preserve-3d] w-full h-full relative overflow-hidden bg-gray-400 transition-all duration-[5000ms]';
	let classNameSpan1 =
		'[backface-visibility:hidden] absolute z-10 w-full h-full flex justify-center items-center';
	let classNameSpan2 = `${classNameSpan1} bg-gray-400 text-bck/80 transition duration-[5000ms] scale-0`;
	if (match === IsMatch.OK) {
		classNameContainer += '';
		classNameTrasform += ' rotate-180';
		classNameSpan1 += '';
		classNameSpan2 += ' rounded-2xl !bg-green-400 rotate-180 !scale-100';
	} else if (match === IsMatch.IN_THE_SOLUTION) {
		classNameContainer += ' !border-amber-400';
		classNameTrasform += ' rotate-180';
		classNameSpan1 += '';
		classNameSpan2 += ' rounded-2xl !bg-amber-400 rotate-180 !scale-100';
	} else if (match === IsMatch.WRONG) {
		classNameContainer += ' !border-red-400';
		classNameTrasform += ' rotate-180';
		classNameSpan1 += '';
		classNameSpan2 += ' rounded-2xl !bg-red-400 rotate-180 !scale-100';
	} else if (match === IsMatch.TO_CHECK) {
		classNameContainer += ' ';
		classNameSpan2 += ' !text-bck/80 bg-gray-400 !scale-100';
	} else {
		classNameContainer += ' bg-gray-400';
	}

	return (
		<div className="bg-bck overflow-hidden relative z-0">
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
		</div>
	);
};

export { Cell };
