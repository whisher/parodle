export enum GameResult {
	FAILURE,
	PLAYING,
	SUCCESS
}

export enum IsMatch {
	NOT_SET,
	IN_THE_SOLUTION,
	OK,
	TO_CHECK,
	WRONG
}

export type RowDto = {
	matches: IsMatch[];
	guesses: string[];
	isValidWord: boolean;
};

export interface ResultDto {
	level: number;
	result: GameResult;
}

export interface StatisticResultDto extends ResultDto {
	timestamp: number;
}
