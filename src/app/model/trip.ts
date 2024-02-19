import { CITIES } from '@shared/constants/cities.constant';

export type CityKeys = keyof typeof CITIES;

export type TripType = {
	city: CityKeys;
	startDate: string;
	endDate: string;
};

export type CityDataType = {
	city: CityKeys;
	requestKey: string;
	imagePath: `assets/${string}`;
	readableName: string;
};
