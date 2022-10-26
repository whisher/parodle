import React from 'react';
import { CgBackspace } from 'react-icons/cg';
import { IsMatch } from '../types';
export interface KeyboardProps {
	keyboardKeysStatus: { [key: string]: IsMatch };
	handleKeyboardClick: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ keyboardKeysStatus, handleKeyboardClick }) => {
	const handleClick = (key: string) => {
		handleKeyboardClick(key);
	};
	const backgroundColor: { [key: string]: string } = {
		'1': 'text-amber-400',
		'2': 'text-lime-400',
		'4': 'text-red-400'
	};
	return (
		<div className="w-full mt-10 pt-8 flex flex-col items-center gap-1 lg:gap-0 rounded-tl-full rounded-tr-full bg-gradient-to-r from-lime-400/50 via-indigo-400/50 to-pink-400/50">
			<div className="flex justify-between items-center">
				{['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
					<button
						className={`h-6 w-6 lg:h-9 lg:w-9 flex justify-center items-center bg-transparent text-2xl font-bold uppercase outline-none focus:outline-none transition ${
							keyboardKeysStatus[key] ? backgroundColor[keyboardKeysStatus[key]] : 'text-white'
						}`}
						key={key}
						onClick={() => handleClick(key)}
					>
						{key}
					</button>
				))}
			</div>
			<div className="flex justify-between items-center">
				{['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
					<button
						className={`h-6 w-6 lg:h-9 lg:w-9 flex justify-center items-center bg-transparent text-2xl font-bold uppercase outline-none focus:outline-none transition ${
							keyboardKeysStatus[key] ? backgroundColor[keyboardKeysStatus[key]] : 'text-white'
						}`}
						key={key}
						onClick={() => handleClick(key)}
					>
						{key}
					</button>
				))}
			</div>
			<div className="flex justify-between items-center">
				{['z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'].map((key) => (
					<button
						className={`h-6 w-6 lg:h-9 lg:w-9 flex justify-center items-center bg-transparent text-2xl font-bold uppercase outline-none focus:outline-none transition ${
							keyboardKeysStatus[key] ? backgroundColor[keyboardKeysStatus[key]] : 'text-white'
						}`}
						key={key}
						onClick={() => handleClick(key)}
					>
						{key === 'backspace' ? <CgBackspace className="h-10 w-10 text-red-400" /> : key}
					</button>
				))}
			</div>
		</div>
	);
};

export { Keyboard };
