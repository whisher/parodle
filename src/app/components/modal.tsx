import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GameResult } from '../types';
import { GameFailure } from './game-failure';
import { GameSuccess } from './game-success';
export interface ModalProps {
	open: boolean;
	gameStatus: {
		level: number;
		result: GameResult;
	};
	solution: string;
	onClose: () => void;
}
export const Modal = ({ open, gameStatus, solution, onClose }: ModalProps) => {
	const isSuccessFul = gameStatus.result === GameResult.SUCCESS;
	const btnMessage = isSuccessFul
		? gameStatus.level === 1
			? 'Ripetiti!'
			: 'Ma puoi fare di meglio!'
		: 'Puoi fare di meglio!';
	useEffect(() => {
		const escHandler = ({ key }: { key: string }) => {
			if (key === 'Escape') {
				onClose();
			}
		};

		window.addEventListener('keydown', escHandler);

		return () => {
			window.removeEventListener('keydown', escHandler);
		};
	}, [onClose]);

	return createPortal(
		<div
			className={`fixed inset-0 flex justify-center items-center bg-gradient-to-r from-gradient-from to-gradient-to transition-opacity duration-1000 linear ${
				open ? 'opacity-100' : 'pointer-events-none opacity-0'
			}`}
			onClick={onClose}
			role="presentation"
		>
			<div
				className={`w-[90vw] lg:w-[482px] h-[95vh] lg:h-1/2 flex flex-col rounded-3xl bg-bck transition-all duration-500 ease-in-out ${
					open
						? `opacity-100 border-2 lg:-translate-y-0 ${
								isSuccessFul ? 'border-lime-400' : 'border-red-400'
						  }`
						: 'opacity-0 pointer-events-none  -translate-y-full'
				} `}
			>
				<div className="flex-1 flex flex-col justify-center items-center gap-10">
					{isSuccessFul ? (
						<GameSuccess gameStatus={gameStatus} solution={solution} />
					) : (
						<GameFailure solution={solution} />
					)}
					<button
						data-testid="modal-button"
						className="h-10 w-44 flex justify-center items-center  rounded-3xl bg-lime-400 text-xl text-white uppercase"
						onClick={onClose}
					>
						{btnMessage}
					</button>
				</div>
			</div>
		</div>,
		document.body
	);
};

/**
 *
 *
 */
