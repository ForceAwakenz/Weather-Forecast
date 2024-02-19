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

export const dateNowInMilliseconds = (): number => new Date().getTime();

export const convertToSimpleDayFormat = (date: Date): string =>
	date.toISOString().slice(0, 10);
