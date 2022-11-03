import { fireEvent, screen } from '@testing-library/react';
import { RowsState } from '../app/store/rowsSlice';
import { renderWithProviders } from '../app/store/test-utils';
import { IsMatch } from '../app/types';
import { ROW_LEN } from '../app/constants';
import { Home } from './home';

const WORDS = ['abaco'];
test('Home', async () => {
	const initialState: RowsState = {
		solution: WORDS[Math.floor(Math.random() * WORDS.length)],
		guesses: '',
		invalidWord: '',
		rows: [
			{
				guesses: Array(ROW_LEN).fill(''),
				matches: Array(ROW_LEN).fill(IsMatch.NOT_SET),
				isValidWord: false
			},
			{
				guesses: Array(ROW_LEN).fill(''),
				matches: Array(ROW_LEN).fill(IsMatch.NOT_SET),
				isValidWord: false
			},
			{
				guesses: Array(ROW_LEN).fill(''),
				matches: Array(ROW_LEN).fill(IsMatch.NOT_SET),
				isValidWord: false
			},
			{
				guesses: Array(ROW_LEN).fill(''),
				matches: Array(ROW_LEN).fill(IsMatch.NOT_SET),
				isValidWord: false
			},
			{
				guesses: Array(ROW_LEN).fill(''),
				matches: Array(ROW_LEN).fill(IsMatch.NOT_SET),
				isValidWord: false
			},
			{
				guesses: Array(ROW_LEN).fill(''),
				matches: Array(ROW_LEN).fill(IsMatch.NOT_SET),
				isValidWord: false
			}
		],
		words: WORDS,
		keyboardKeysStatus: {}
	};
	renderWithProviders(<Home />, {
		preloadedState: {
			table: initialState
		}
	});

	expect(await screen.findByTestId('table')).toBeInstanceOf(HTMLElement);

	fireEvent.keyDown(window, {
		key: 'q'
	});
	fireEvent.keyDown(window, {
		key: 'w'
	});
	fireEvent.keyDown(window, {
		key: 'e'
	});
	fireEvent.keyDown(window, {
		key: 'r'
	});
	fireEvent.keyDown(window, {
		key: 't'
	});

	expect(screen.getAllByText((content, element) => content.includes(`qwert`))).toHaveLength(2);

	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'Backspace'
	});
	fireEvent.keyDown(window, {
		key: 'a'
	});
	fireEvent.keyDown(window, {
		key: 'b'
	});
	fireEvent.keyDown(window, {
		key: 'a'
	});
	fireEvent.keyDown(window, {
		key: 'c'
	});
	fireEvent.keyDown(window, {
		key: 'o'
	});

	expect(await screen.findAllByText((content, element) => content.includes('""'))).toHaveLength(2);
	expect(await screen.findByTestId('modal-success')).toBeInstanceOf(HTMLElement);

	fireEvent.click(screen.getByTestId('modal-button'));

	expect(() => screen.getByTestId('modal-success')).toThrow();
});
