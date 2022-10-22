import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './';
import type { RowDto } from '../types';
import { IsMatch } from '../types';
import { ROW_LEN } from '../constants';

export interface RowsState {
	solution: string;
	guesses: string;
	rows: RowDto[];
}

const initialState: RowsState = {
	solution: '',
	guesses: '',
	rows: [
		{
			guesses: Array(ROW_LEN).fill(''),
			matches: Array(ROW_LEN).fill(IsMatch.NOT_SET)
		},
		{
			guesses: Array(ROW_LEN).fill(''),
			matches: Array(ROW_LEN).fill(IsMatch.NOT_SET)
		},
		{
			guesses: Array(ROW_LEN).fill(''),
			matches: Array(ROW_LEN).fill(IsMatch.NOT_SET)
		},
		{
			guesses: Array(ROW_LEN).fill(''),
			matches: Array(ROW_LEN).fill(IsMatch.NOT_SET)
		},
		{
			guesses: Array(ROW_LEN).fill(''),
			matches: Array(ROW_LEN).fill(IsMatch.NOT_SET)
		},
		{
			guesses: Array(ROW_LEN).fill(''),
			matches: Array(ROW_LEN).fill(IsMatch.NOT_SET)
		}
	]
};

const rowsSlice = createSlice({
	name: 'rows',
	initialState,
	reducers: {
		setSolution(state, action: PayloadAction<string>) {
			const solution = action.payload;
			state.solution = solution;
		},
		updateRows(state, action: PayloadAction<string>) {
			const guess = action.payload;
			state.guesses = state.guesses + guess;
			const lenGuesses = state.guesses.length - 1;
			const indexRow = Math.floor(lenGuesses / ROW_LEN);
			const indexCell = lenGuesses < ROW_LEN ? lenGuesses : lenGuesses - ROW_LEN * indexRow;
			state.rows[indexRow].guesses[indexCell] = guess;
			if (guess === state.solution[indexCell]) {
				state.rows[indexRow].matches[indexCell] = IsMatch.OK;
			} else if (state.solution.includes(guess)) {
				state.rows[indexRow].matches[indexCell] = IsMatch.IN_THE_SOLUTION;
			} else {
				state.rows[indexRow].matches[indexCell] = IsMatch.WRONG;
			}
		}
	}
});

export const { setSolution, updateRows } = rowsSlice.actions;
export default rowsSlice.reducer;

export const getGameStatus = createSelector(
	(state: RootState) => state.table.rows,
	(rows) => {
		const level = rows.length;
		const isSuccessFul =
			rows.filter((row) => row.matches.every((match) => match === IsMatch.OK)).length > 0;
		const hasFailed =
			rows.filter((row) => row.matches.every((match) => match !== IsMatch.NOT_SET)).length === 6;

		return { level, isSuccessFul, hasFailed };
	}
);
