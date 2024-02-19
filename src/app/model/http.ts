import { ICONS } from '@shared/constants/weather-icons.constant';

type DailyForecastBaseType = {
	temp: number;
	tempmax: number;
	tempmin: number;
	datetime: string;
};

export type DayForecastResponseType = DailyForecastBaseType & {
	icon: WeatherIconKeysType;
};

export type DayForecastType = DailyForecastBaseType & {
	icon: WeatherIconType;
};

export type WeatherResponseType = {
	address: string;
	resolvedAddress: string;
	days: DayForecastResponseType[];
	queryCost: number;
};

export type WeatherIconType = (typeof ICONS)[keyof typeof ICONS];
export type WeatherIconKeysType = keyof typeof ICONS;
