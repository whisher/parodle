import React from 'react';
import { Row } from './row';

import type { RowDto } from '../types';
export interface TableProps {
	rows: RowDto[];
}
const Table: React.FC<TableProps> = ({ rows }) => {
	return (
		<div className="flex flex-col gap-2 px-6">
			{rows.map((row, i) => {
				return <Row key={i} row={row} />;
			})}
		</div>
	);
};

export { Table };
