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
		setWords(state, action: PayloadAction<string[]>) {
			const words = action.payload;
			const solution = words[Math.floor(Math.random() * words.length)];
			state.solution = solution;
		},
		updateRows(state, action: PayloadAction<string>) {
			let guess = action.payload;
			let lenGuesses = state.guesses.length;
			if (guess === 'backspace' && lenGuesses === 0) {
				return initialState;
			} else if (guess === 'backspace' && lenGuesses > 0) {
				state.guesses = state.guesses.slice(0, -1);
				guess = '';
				lenGuesses = state.guesses.length;
				lenGuesses = lenGuesses > 0 ? lenGuesses : 0;
			} else {
				state.guesses = state.guesses + guess;
				lenGuesses = state.guesses.length;
				lenGuesses = lenGuesses - 1;
			}
			console.log('lenGuesses', lenGuesses);
			const indexRow = Math.floor(lenGuesses / ROW_LEN);
			const indexCell = lenGuesses < ROW_LEN ? lenGuesses : lenGuesses - ROW_LEN * indexRow;
			state.rows[indexRow].guesses[indexCell] = guess;
			if (guess === '') {
				state.rows[indexRow].matches[indexCell] = IsMatch.NOT_SET;
			} else if (guess === state.solution[indexCell]) {
				state.rows[indexRow].matches[indexCell] = IsMatch.OK;
			} else if (state.solution.includes(guess)) {
				state.rows[indexRow].matches[indexCell] = IsMatch.IN_THE_SOLUTION;
			} else {
				state.rows[indexRow].matches[indexCell] = IsMatch.WRONG;
			}
		}
	}
});

export const { setWords, updateRows } = rowsSlice.actions;
export default rowsSlice.reducer;

export const getGameStatus = createSelector(
	(state: RootState) => state.table.rows,
	(rows) => {
		const level = rows.length;
		const isSuccessFul =
			rows.filter((row: RowDto) => row.matches.every((match: IsMatch) => match === IsMatch.OK))
				.length > 0;
		const hasFailed =
			rows.filter((row: RowDto) => row.matches.every((match: IsMatch) => match !== IsMatch.NOT_SET))
				.length === 6;

		return { level, isSuccessFul, hasFailed };
	}
);
