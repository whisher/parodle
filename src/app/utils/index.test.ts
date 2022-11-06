import type { StatisticResultDto } from '../types';
import { getStatistics, StatisticDto } from '.';
test('Statistics', () => {
	const results: StatisticResultDto[] = [
		{ level: 6, result: 0, timestamp: 1667214897409 },
		{ level: 1, result: 2, timestamp: 1667214962333 },
		{ level: 6, result: 0, timestamp: 1667214984571 },
		{ level: 3, result: 2, timestamp: 1667242368080 },
		{ level: 4, result: 2, timestamp: 1667242458367 },
		{ level: 6, result: 2, timestamp: 1667242480941 },
		{ level: 1, result: 2, timestamp: 1667242490832 },
		{ level: 6, result: 0, timestamp: 1667242512999 },
		{ level: 6, result: 0, timestamp: 1667245115258 },
		{ level: 5, result: 2, timestamp: 1667245153888 }
	];
	const data = getStatistics(results) as StatisticDto;
	const {
		totalGames,
		firstGameWonDate,
		lastGameWonDate,
		successRate,
		currentStreak,
		bestStreak,
		bestLevel,
		averageLevel
	} = data;
	expect(totalGames).toEqual(10);
	expect(firstGameWonDate).toEqual('31 ottobre 2022');
	expect(lastGameWonDate).toEqual('31 ottobre 2022');
	expect(successRate).toEqual(60);
	expect(currentStreak).toEqual(1);
	expect(bestStreak).toEqual(4);
	expect(bestLevel).toEqual(1);
	expect(averageLevel).toEqual('3.3');
});
