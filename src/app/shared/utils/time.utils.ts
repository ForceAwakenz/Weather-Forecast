// I know there are Date methods for this, but not all of them return predictable results
// TODO: write jsdoc
export const getDays = (timeInMs: number): number =>
	Math.floor(timeInMs / (1000 * 60 * 60 * 24));

export const getHours = (timeInMs: number): number =>
	Math.floor((timeInMs / (1000 * 60 * 60)) % 24);

export const getMinutes = (timeInMs: number): number =>
	Math.floor((timeInMs / 1000 / 60) % 60);

export const getSeconds = (timeInMs: number): number =>
	Math.floor((timeInMs / 1000) % 60);

export const convertDaysToMilliseconds = (days: number): number =>
	days * 1000 * 60 * 60 * 24;

export const dateNowInMilliseconds = (): number => Date.now();

export const convertToSimpleDayFormat = (date: Date): string =>
	date.toISOString().slice(0, 10);

export const convertToUTC = (dateTime: string): Date => {
	return new Date(
		new Date(dateTime).getTime() + new Date().getTimezoneOffset() * 60000
	);
};
