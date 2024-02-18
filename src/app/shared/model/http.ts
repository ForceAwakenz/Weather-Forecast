export type DayForecastType = {
	temp: number;
	tempmax: number;
	tempmin: number;
	datetime: string;
};

export type WeatherResponseType = {
	address: string;
	resolvedAddress: string;
	days: DayForecastType[];
};
