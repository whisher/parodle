import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';

import { getGameStatus, setWords, updateRows } from './store/rowsSlice';
import { useGetWordsQuery } from './store/services';
import { KEYBOARD_KEYS } from './constants';
import { Alert } from './components/alert';
import { Layout } from './components/layout';
import { Table } from './components/table';
import { Loader } from './components/loader';
import { Nav } from './components/nav';

const App: React.FC = () => {
	const rows = useAppSelector((state) => state.table.rows);
	const solution = useAppSelector((state) => state.table.solution);
	const gameStatus = useAppSelector(getGameStatus);
	const { data, isError, isLoading } = useGetWordsQuery();
	//console.log(data);
	const dispatch = useAppDispatch();
	//const [error, setError] = useState<boolean>(false);
	//const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const handleGuesses = (ev: Event): void => {
			ev.preventDefault();
			if (gameStatus.isSuccessFul) {
			}
			const guess = (ev as unknown as KeyboardEvent).key.toLowerCase();

			if (KEYBOARD_KEYS.includes(guess) && !gameStatus.isSuccessFul && !gameStatus.hasFailed) {
				dispatch(updateRows(guess));
			}
		};
		window.addEventListener('keydown', handleGuesses);
		return () => {
			window.removeEventListener('keydown', handleGuesses);
		};
	}, [dispatch, gameStatus]);

	useEffect(() => {
		if (data) {
			dispatch(setWords(data));
		}
	}, [dispatch, data]);
	if (isLoading) {
		return (
			<Layout>
				<Loader />
			</Layout>
		);
	}
	if (isError) {
		return (
			<Layout>
				<Alert />
			</Layout>
		);
	}
	return (
		<Layout>
			<div className="w-full rounded-3xl pt-3 pb-10 bg-bck">
				<Nav />
				<h1 className="my-8 p-0 uppercase text-6xl font-bold text-center text-gradient bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400">
					Wordlit {solution}
				</h1>
				<Table rows={rows} />
			</div>
		</Layout>
	);
};

export default App;

/**
 * 
 * 
 * 
 * const [rows, setRows] = useState<RowDto[]>([
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
	]);
setRows((oldRows) => {
					return oldRows.map((row, iR) => {
						if (indexRow === iR) {
							const guesses = [...row.guesses].map((cell, iC) => {
								if (indexCell === iC) {
									return currentKey;
								}
								return cell;
							});
							const matches = [...row.matches].map((cell, iC) => {
								console.log('currentGuess', solution, solution[indexCell], currentKey);
								if (indexCell === iC) {
									if (currentKey === solution[indexCell]) {
										return IsMatch.OK;
									} else if (solution.includes(currentKey)) {
										return IsMatch.IN_THE_SOLUTION;
									} else {
										return IsMatch.WRONG;
									}
								}
								return cell;
							});
							return { guesses, matches };
						}
						return row;
					});
				});
 */
