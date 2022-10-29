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
	currentStreak: number;
	bestStreak: number;
	bestLevel: number;
	averageLevel: string;
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

export const getStreaks = (results: StatisticResultDto[]): number[] => {
	let i = 0;
	const result = [];
	for (const item of results) {
		if (item.result === GameResult.SUCCESS) {
			i++;
		} else {
			result.push(i);
			i = 0;
		}
	}
	if (i) {
		result.push(i);
	}
	return result;
};
export const getStreak = (
	results: StatisticResultDto[]
): { currentStreak: number; bestStreak: number } => {
	const streaks = getStreaks(results);
	const currentStreak = streaks[streaks.length - 1];
	const bestStreak = Math.max(...streaks);
	return { currentStreak, bestStreak };
};

export const getAverageLevels = (
	results: StatisticResultDto[]
): { bestLevel: number; averageLevel: string } => {
	const levels = results
		.filter((result) => result.result === GameResult.SUCCESS)
		.map((result) => result.level);
	const bestLevel = Math.min(...levels);
	const averageLevel = (levels.reduce((acc, curr) => acc + curr, 0) / levels.length).toFixed(1);
	console.log({ bestLevel, averageLevel });
	return { bestLevel, averageLevel };
};

export const getStatistics = (results: StatisticResultDto[]): StatisticDto | undefined => {
	const totalGames = results.length;
	if (totalGames > 0) {
		const totalGamesWon = results.filter((game) => game.result === GameResult.SUCCESS);
		const firstGameWonDate = humanReadable(totalGamesWon[0].timestamp);
		const lastGameWonDate = humanReadable(totalGamesWon.slice(-1)[0].timestamp);
		const totalGamesLost = results.filter((game) => game.result === GameResult.FAILURE);
		const totalGamesWonLen = totalGamesWon.length;
		const totalGamesLostLen = totalGamesLost.length;
		const successRate = Math.round((100 * totalGamesWonLen) / totalGames);
		const { currentStreak, bestStreak } = getStreak(results);
		const { bestLevel, averageLevel } = getAverageLevels(results);
		return {
			totalGames,
			firstGameWonDate,
			lastGameWonDate,
			totalGamesWonLen,
			totalGamesLostLen,
			successRate,
			currentStreak,
			bestStreak,
			bestLevel,
			averageLevel
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

export const statistics = getStatistics(getStorage());
