import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './';
import type { RowDto } from '../types';
import { IsMatch } from '../types';
import { ROW_LEN } from '../constants';

export interface RowsState {
	solution: string;
	guesses: string;
	isInTheList: boolean;
	rows: RowDto[];
	words: string[];
}

const initialState: RowsState = {
	solution: '',
	guesses: '',
	isInTheList: false,
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
	],
	words: []
};

const rowsSlice = createSlice({
	name: 'rows',
	initialState,
	reducers: {
		setWords(state, action: PayloadAction<string[]>) {
			state.words = action.payload;
			const solution = state.words[Math.floor(Math.random() * state.words.length)];
			state.solution = solution;
		},
		updateRows(state, action: PayloadAction<string>) {
			let guess = action.payload;
			let lenGuesses = state.guesses.length;
			if (guess === 'backspace' && lenGuesses === 0) {
				return initialState;
			} else if (guess === 'backspace' && lenGuesses > 0 && !state.isInTheList) {
				state.guesses = state.guesses.slice(0, -1);
				guess = '';
				lenGuesses = state.guesses.length;
				lenGuesses = lenGuesses > 0 ? lenGuesses : 0;
			} else {
				state.guesses = state.guesses + guess;
				lenGuesses = state.guesses.length;
				lenGuesses = lenGuesses - 1;
			}
			const indexRow = Math.floor(lenGuesses / ROW_LEN);
			//const indexCell = state.rows[indexRow].guesses.findIndex((val: string) => val === ''); //lenGuesses < ROW_LEN ? lenGuesses : lenGuesses - ROW_LEN * indexRow;
			const indexCell = lenGuesses < ROW_LEN ? lenGuesses : lenGuesses - ROW_LEN * indexRow;
			state.rows[indexRow].guesses[indexCell] = guess;
			state.rows[indexRow].matches[indexCell] = IsMatch.TO_CHECK;
			if (indexCell === 4) {
				const indexStart = indexRow > 0 ? -ROW_LEN : 0;
				console.log('indexStart', indexStart);
				console.log('state.guesses', state.guesses);
				const currentWord = state.guesses.slice(indexStart);
				console.log('currentGuesses', currentWord);
				state.isInTheList = state.words.includes(currentWord);
				console.log('state.isInTheList', state.isInTheList);
				if (state.isInTheList) {
					for (let i = 0; i <= indexCell; i++) {
						guess = currentWord[i];
						console.log('guess', guess);
						if (guess === '') {
							state.rows[indexRow].matches[i] = IsMatch.NOT_SET;
						} else if (guess === state.solution[i]) {
							state.rows[indexRow].matches[i] = IsMatch.OK;
						} else if (state.solution.includes(guess)) {
							state.rows[indexRow].matches[i] = IsMatch.IN_THE_SOLUTION;
						} else {
							state.rows[indexRow].matches[i] = IsMatch.WRONG;
						}
					}
				}
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
