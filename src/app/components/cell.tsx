import React from 'react';

import { IsMatch } from '../types';
export interface CellProps {
	char: string;
	i: number;
	match: IsMatch;
}
const Cell: React.FC<CellProps> = ({ char, i, match }) => {
	const index = i + 1;
	let classNameContainer =
		'[perspective:1000px] h-12 w-12 lg:h-14 lg:w-14 rounded-xl overflow-hidden text-3xl text-white';
	let classNameTrasform = '[transform-style:preserve-3d] relative transition-all';
	let classNameSpan1 =
		'[backface-visibility:hidden] h-12 w-12 lg:h-14 lg:w-14 absolute top-0 left-0 flex justify-center items-center z-[2] [transform:rotateY(0deg)]';
	let classNameSpan2 =
		'[backface-visibility:hidden] h-12 w-12 lg:h-14 lg:w-14 absolute top-0 left-0 flex justify-center items-center [transform:rotateY(180deg)]';
	let classNameInnerSpan1 = 'transition';
	if (match === IsMatch.OK) {
		classNameContainer += ' bg-gray-400';
		classNameSpan1 += ' bg-gray-400 !text-bck/80';
		classNameTrasform += ' [transform:rotateY(180deg)]';
		classNameSpan2 += ' bg-lime-400';
	} else if (match === IsMatch.IN_THE_SOLUTION) {
		classNameContainer += ' bg-gray-400';
		classNameSpan1 += ' bg-gray-400 !text-bck/80';
		classNameTrasform += ' [transform:rotateY(180deg)]';
		classNameSpan2 += ' bg-amber-400';
	} else if (match === IsMatch.WRONG) {
		classNameContainer += ' bg-gray-400';
		classNameSpan1 += ' bg-gray-400 !text-bck/80';
		classNameTrasform += ' [transform:rotateY(180deg)]';
		classNameSpan2 += ' bg-red-400';
	} else if (match === IsMatch.TO_CHECK) {
		classNameContainer += ' bg-gray-400';
		classNameSpan1 += ' bg-gray-400 !text-bck/80';
		classNameInnerSpan1 = ' !scale-100';
	} else {
		classNameContainer += ' bg-gray-400';
		classNameInnerSpan1 = ' scale-0';
	}

	return (
		<div className={classNameContainer}>
			<div className={classNameTrasform} style={{ transitionDuration: `${index * 500}ms` }}>
				<div className={classNameSpan1}>
					<span className={classNameInnerSpan1} style={{ transitionDuration: `500ms` }}>
						{char}
					</span>
				</div>
				<div className={classNameSpan2}>
					<span className="">{char}</span>
				</div>
			</div>
		</div>
	);
};

export { Cell };

/*
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
const Cell: React.FC<CellProps> = ({ char, i, match }) => {
	let classNameContainer =
		'[perspective:1000px] h-11 w-11 lg:h-14 lg:w-14  text-3xl text-white font-bold uppercase overflow-hidden';
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
*/
