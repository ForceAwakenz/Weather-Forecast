export const getDays = (rawTimeDifference: number): number =>
	Math.floor(rawTimeDifference / (1000 * 60 * 60 * 24));

export const getHours = (rawTimeDifference: number): number =>
	Math.floor((rawTimeDifference / (1000 * 60 * 60)) % 24);

export const getMinutes = (rawTimeDifference: number): number =>
	Math.floor((rawTimeDifference / 1000 / 60) % 60);

export const getSeconds = (rawTimeDifference: number): number =>
	Math.floor((rawTimeDifference / 1000) % 60);
