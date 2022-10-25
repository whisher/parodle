import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { getGameStatus, setWords, updateRows } from '../app/store/rowsSlice';
import { useGetWordsQuery } from '../app/store/services';
import { KEYBOARD_KEYS } from '../app/constants';
import { Alert } from '../app/components/alert';
import { Table } from '../app/components/table';
import { Loader } from '../app/components/loader';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const gameStatus = useAppSelector(getGameStatus);
	const invalidWord = useAppSelector((state) => state.table.invalidWord);
	const rows = useAppSelector((state) => state.table.rows);
	const solution = useAppSelector((state) => state.table.solution);
	const { data, isError, isLoading } = useGetWordsQuery();

	useEffect(() => {
		if (data) {
			dispatch(setWords(data));
			//console.log('solution', solution);
		}
	}, [dispatch, data]);

	useEffect(() => {
		if (gameStatus.isSuccessFul) {
			console.log('You are a winner');
		}
		if (gameStatus.hasFailed) {
			console.log('You are a looser');
		}
		const handleGuesses = (ev: Event): void => {
			ev.preventDefault();
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

	if (isLoading) {
		return <Loader />;
	}
	if (isError) {
		return <Alert />;
	}
	console.log(solution);
	return <Table invalidWord={invalidWord} rows={rows} />;
};

export { Home };
