import type { ResultDto, StatisticResultDto } from '../types';
import { GameResult } from '../types';
import { STORAGE_STATISTICS_KEY } from '../constants';

export interface StatisticDto {
	totalGames: number;
	firstGameWonDate: string;
	lastGameWonDate: string;
	totalGamesWonLen: number;
	totalGamesLostLen: number;
	successRate: number;
}

export const getStorage = (): StatisticResultDto[] => {
	const data = localStorage.getItem(STORAGE_STATISTICS_KEY);
	if (!data) {
		return [];
	}
	return JSON.parse(data);
};

export const setStorage = (result: ResultDto): void => {
	const data = getStorage();
	const statistics = { ...result, ...{ timestamp: Date.now() } };
	data.push(statistics);
	localStorage.setItem(STORAGE_STATISTICS_KEY, JSON.stringify(data));
};

export const getStatistics = (): StatisticDto | undefined => {
	const data = getStorage();
	const totalGames = data.length;
	if (totalGames > 0) {
		const totalGamesWon = data.filter((game) => game.result === GameResult.SUCCESS);
		const firstGameWonDate = humanReadable(totalGamesWon[0].timestamp);
		const lastGameWonDate = humanReadable(totalGamesWon.slice(-1)[0].timestamp);
		const totalGamesLost = data.filter((game) => game.result === GameResult.FAILURE);
		const totalGamesWonLen = totalGamesWon.length;
		const totalGamesLostLen = totalGamesLost.length;
		const successRate = Math.round((100 * totalGamesWonLen) / Math.max(totalGames, 1));
		return {
			totalGames,
			firstGameWonDate,
			lastGameWonDate,
			totalGamesWonLen,
			totalGamesLostLen,
			successRate
		};
	}
	return undefined;
};

export const humanReadable = (ts: number) => {
	const date = new Date(ts);
	const dateTimeFormat = new Intl.DateTimeFormat('it', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	return dateTimeFormat.format(date).replace(',', '');
};
