import React from 'react';
import { Cell } from './cell';
import type { RowDto } from '../types';
export interface RowProps {
	row: RowDto;
}
const Row: React.FC<RowProps> = ({ row }) => {
	return (
		<div className="flex gap-2 lg:gap-3">
			{row.guesses.map((char, i) => {
				return <Cell key={i} char={char} match={row.matches[i]} />;
			})}
		</div>
	);
};

export { Row };
