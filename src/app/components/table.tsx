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
		<div className="flex flex-col gap-2 lg:gap-3">
			<div
				className={`w-full h-8 overflow-hidden rounded border transition ${
					isInvalidWord ? 'border-red-400' : 'border-bck'
				}`}
				role="alert"
			>
				<span
					className={`flex justify-center items-center w-full h-full bg-gray-500 text-red-400 text-xs transition ${
						isInvalidWord ? 'scale-100' : 'scale-0'
					}`}
				>
					La parola "{invalidWord}" non è nella lista.
				</span>
			</div>
			{rows.map((row, i) => {
				return <Row key={i} row={row} />;
			})}
		</div>
	);
};

export { Table };
