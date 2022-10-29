import React from 'react';
import { Link } from 'react-router-dom';
import { BiHappy } from 'react-icons/bi';
import { IsMatch } from '../app/types';
import { Row } from '../app/components/row';
const Info: React.FC = () => {
	// fieno
	const exampleRow = {
		guesses: ['f', 'u', 'o', 'r', 'i'],
		matches: [IsMatch.OK, IsMatch.WRONG, IsMatch.WRONG, IsMatch.WRONG, IsMatch.IN_THE_SOLUTION],
		isValidWord: false
	};

	return (
		<div className="w-full flex flex-col gap-3 px-10 text-white">
			<h2 className="mt-3 text-center text-4xl">COME GIOCARE</h2>
			<div className="text-lg pt-3 border-t border-white/10">
				<p>Indovina delle PARoLE di 5 lettere in 6 tentativi.</p>
				<p>
					<span className="pr-0.5 font-bold text-center text-gradient bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400">
						Parodle
					</span>
					è una versione italiana (non ufficiale) di
					<a
						href="https://www.nytimes.com/games/wordle/index.html"
						target="_blank"
						rel="noreferrer"
						className="pl-0.5 underline text-white"
					>
						WORDLE
					</a>
					.
				</p>
				<p>
					Dopo ogni tentativo, i colori delle tessere cambieranno per mostrarti quanto vicino sei
					andato ad indovinare la parola.
				</p>
				<p className="mb-2">
					Facciamo un esempio. Se la parola da indovinare fosse
					<span className="pl-0.5 underline decoration-dotted">fieno</span>
				</p>
				<Row row={exampleRow} />
				<p className="mt-4">
					<span className="inline-flex justify-center items-center h-8 w-8 mr-2 rounded-lg bg-lime-400">
						f
					</span>
					La lettera <span className="underline decoration-double">f</span> è nella parola ed è nel
					posto giusto.
				</p>
				<p className="mt-4">
					<span className="inline-flex justify-center items-center h-8 w-8 mr-2 rounded-lg bg-amber-400">
						i
					</span>
					La lettera <span className="underline decoration-double">i</span> è nella parola ma nel
					posto sbagliato.
				</p>
				<p className="mt-4">
					<span className="inline-flex justify-center items-center h-8 w-8 rounded-lg bg-red-400">
						u
					</span>
					<span className="inline-flex justify-center items-center h-8 w-8 ml-2 rounded-lg bg-red-400">
						o
					</span>
					<span className="inline-flex justify-center items-center h-8 w-8 mx-2 rounded-lg bg-red-400">
						o
					</span>
					Le lettere <span className="px-0.5 underline decoration-double">u</span>
					<span className="px-0.5 underline decoration-double">o</span>
					<span className="px-0.5 underline decoration-double">r</span> non sono nella parola.
				</p>
				<p className="my-2">
					NB. Nella lista delle parole ci sono nomi e aggettivi (al maschile) ma non sono presenti
					verbi.
				</p>
				<p className="flex items-center mb-10">
					Cosa aspetti
					<span className="h-6 w-20 inline-flex justify-center items-center mx-1.5 rounded-3xl bg-lime-400  text-white uppercase">
						<Link to="/">Gioca!</Link>
					</span>
					e che la forza sia con te <BiHappy className="h-7 w-7 ml-0.5 text-white" />
				</p>
			</div>
		</div>
	);
};

export { Info };
