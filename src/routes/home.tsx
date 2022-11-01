import React, { useEffect, useState } from 'react';
import { GameResult } from '../app/types';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { getGameStatus, updateRows, reset } from '../app/store/rowsSlice';
import { useGetWordsQuery } from '../app/store/services';
import { setStorage } from '../app/utils';
import { KEYBOARD_KEYS } from '../app/constants';
import { Alert } from '../app/components/alert';
import { Loader } from '../app/components/loader';
import { Keyboard } from '../app/components/keyboard';
import { Modal } from '../app/components/modal';
import { Table } from '../app/components/table';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const gameStatus = useAppSelector(getGameStatus);
	const invalidWord = useAppSelector((state) => state.table.invalidWord);
	const keyboardKeysStatus = useAppSelector((state) => state.table.keyboardKeysStatus);
	const rows = useAppSelector((state) => state.table.rows);
	const solution = useAppSelector((state) => state.table.solution);
	const { isError, isLoading } = useGetWordsQuery();
	const [open, setOpen] = useState(false);

	const playAgain = () => {
		dispatch(reset());
		setOpen(false);
	};

	useEffect(() => {
		if (gameStatus.result === GameResult.SUCCESS) {
			setStorage(gameStatus);
			setOpen(true);
		}
		if (gameStatus.result === GameResult.FAILURE) {
			setStorage(gameStatus);
			setOpen(true);
		}
	}, [gameStatus]);

	useEffect(() => {
		const handleGuesses = (ev: Event): void => {
			ev.preventDefault();
			const guess = (ev as unknown as KeyboardEvent).key.toLowerCase();

			if (KEYBOARD_KEYS.includes(guess)) {
				dispatch(updateRows(guess));
			}
		};
		window.addEventListener('keydown', handleGuesses);
		return () => {
			window.removeEventListener('keydown', handleGuesses);
		};
	}, [dispatch]);

	const handleKeyboardClick = (guess: string) => {
		if (KEYBOARD_KEYS.includes(guess)) {
			dispatch(updateRows(guess));
		}
	};

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <Alert />;
	}

	return (
		<>
			<Table invalidWord={invalidWord} rows={rows} />
			<Keyboard keyboardKeysStatus={keyboardKeysStatus} handleKeyboardClick={handleKeyboardClick} />
			<Modal open={open} gameStatus={gameStatus} solution={solution} onClose={playAgain} />
		</>
	);
};

export { Home };
