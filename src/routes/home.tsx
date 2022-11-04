import React, { useRef, useEffect, useState } from 'react';
import { GameResult } from '../app/types';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { getGameStatus, updateRows, reset } from '../app/store/rowsSlice';
import { setStorage } from '../app/utils';
import { KEYBOARD_KEYS } from '../app/constants';
import { Keyboard } from '../app/components/keyboard';
import { Modal } from '../app/components/modal';
import { Table } from '../app/components/table';
import { useScreenshot } from '../app/utils/useScreenshot';
const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const gameStatus = useAppSelector(getGameStatus);
	const invalidWord = useAppSelector((state) => state.table.invalidWord);
	const keyboardKeysStatus = useAppSelector((state) => state.table.keyboardKeysStatus);
	const rows = useAppSelector((state) => state.table.rows);
	const solution = useAppSelector((state) => state.table.solution);

	const [open, setOpen] = useState(false);
	const divEl = useRef<HTMLInputElement | null>(null);
	const { image, setImage, takeScreenShot } = useScreenshot({ type: 'image/png', quality: 1.0 });
	useEffect(() => {
		if (gameStatus.result === GameResult.SUCCESS) {
			setStorage(gameStatus);
			takeScreenShot(divEl.current);
			setImage(null);
			setOpen(true);
		}
		if (gameStatus.result === GameResult.FAILURE) {
			setStorage(gameStatus);
			setOpen(true);
		}
	}, [gameStatus, setImage, takeScreenShot]);

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

	const playAgain = () => {
		dispatch(reset());
		setOpen(false);
	};

	const handleKeyboardClick = (guess: string) => {
		if (KEYBOARD_KEYS.includes(guess)) {
			dispatch(updateRows(guess));
		}
	};

	console.log(solution);
	return (
		<>
			<div ref={divEl} className="bg-bck px-3">
				<Table invalidWord={invalidWord} rows={rows} />
			</div>

			<Keyboard keyboardKeysStatus={keyboardKeysStatus} handleKeyboardClick={handleKeyboardClick} />
			<Modal
				open={open}
				gameStatus={gameStatus}
				image={image}
				solution={solution}
				onClose={playAgain}
			/>
		</>
	);
};

export { Home };
