import React from 'react';
import { Row } from './row';

import type { RowDto } from '../types';
export interface TableProps {
	invalidWord: string;
	rows: RowDto[];
}
const Table: React.FC<TableProps> = ({ invalidWord, rows }) => {
	const isInvalidWord = invalidWord.length > 0;
	return (
		<div className="w-full flex flex-col items-center gap-3 mt-3 lg:mt-0">
			<div
				className={`hidden lg:flex w-8/12 h-6 justify-center items-center overflow-hidden rounded border transition ${
					isInvalidWord ? 'border-red-400' : 'border-bck'
				}`}
				role="alert"
			>
				<span
					className={`text-red-400 text-xs transition ${isInvalidWord ? 'scale-100' : 'scale-0'}`}
				>
					La parola "{invalidWord}" non è nella lista.
				</span>
			</div>
			{rows.map((row, i) => {
				return <Row key={i} row={row} />;
			})}
			<div
				className={`flex lg:hidden w-8/12 h-6 justify-center items-center overflow-hidden rounded border transition ${
					isInvalidWord ? 'border-red-400' : 'border-bck'
				}`}
				role="alert"
			>
				<span
					className={`text-red-400 text-sm transition ${isInvalidWord ? 'scale-100' : 'scale-0'}`}
				>
					La parola "{invalidWord}" non è nella lista.
				</span>
			</div>
		</div>
	);
};

export { Table };
