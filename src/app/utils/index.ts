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
/*const  isConsecutive(total: number,result: StatisticResultDto) {
	if(result.result  === GameResult.SUCCESS){
	return total + result;
}
export const sequceIsConsecutive = (results: StatisticResultDto[]) =>
	Boolean(
		results.reduce((acc, curr) => {
			acc.result === GameResult.SUCCESS
				
		},0 )
	);*/
//console.log(getStorage());
export const statistics = getStatistics(getStorage());
