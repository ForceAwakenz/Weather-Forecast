import { CITIES } from '../constants/cities.constant';

export type CityKeys = keyof typeof CITIES;

export type TripType = {
	city: CityKeys;
	startDate: Date;
	endDate: Date;
};

export type CityDataType = {
	city: CityKeys;
	requestKey: string;
	imagePath: `assets/${string}`;
	readableName: string;
};
