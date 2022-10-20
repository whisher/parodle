export enum IsMatch {
	NOT_SET,
	IN_THE_SOLUTION,
	OK,
	WRONG
}
export type RowDto = {
	matches: IsMatch[];
	guesses: string[];
};
