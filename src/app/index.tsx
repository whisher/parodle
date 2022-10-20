import React, { useEffect, useState, useRef } from 'react';

import { API_URL, ROW_LEN } from './constants';
import { Alert } from './components/alert';
import { Layout } from './components/layout';
import { Table } from './components/table';
import { Loader } from './components/loader';
import { Nav } from './components/nav';

import type { RowDto } from './types';
import { IsMatch } from './types';
const App: React.FC = () => {
	const ref = useRef('');
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [solution, setSolution] = useState<string>('');
	const [isGameOver, setIsGameOver] = useState(false);
	const [rows, setRows] = useState<RowDto[]>([
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

	useEffect(() => {
		const handleType = (ev: Event): void => {
			ev.preventDefault();

			const currentKey = (ev as unknown as KeyboardEvent).key;
			ref.current = ref.current + currentKey;
			const lenGuesses = ref.current.length - 1;

			const indexRow = Math.floor(lenGuesses / ROW_LEN);

			const indexCell = lenGuesses < ROW_LEN ? lenGuesses : lenGuesses - ROW_LEN * indexRow;

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
			setIsGameOver(rows[0].matches.every((currentValue) => currentValue === IsMatch.OK));
			console.log('isGameOver', isGameOver);
		};

		window.addEventListener('keydown', handleType);
		return () => {
			window.removeEventListener('keydown', handleType);
		};
	}, [solution, isGameOver, rows]);

	useEffect(() => {
		let isMounted = false;
		setLoading(true);
		const fetchWords = async () => {
			const response = await fetch(API_URL);
			if (!response.ok) {
				setError(true);
			}
			const words = (await response.json()) as string[];
			const randomWord = words[Math.floor(Math.random() * words.length)];
			if (isMounted) {
				setSolution(randomWord);
				setLoading(false);
			}
		};

		fetchWords();
		return () => {
			isMounted = true;
		};
	}, []);
	if (loading) {
		return (
			<Layout>
				<Loader />
			</Layout>
		);
	}
	if (error) {
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
				<h1 className="my-10 p-0 uppercase text-6xl font-bold text-center text-gradient bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400">
					Wordlit {solution}
				</h1>
				<Table rows={rows} />
			</div>
		</Layout>
	);
};

export default App;
