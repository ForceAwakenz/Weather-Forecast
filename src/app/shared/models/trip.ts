import { CITIES } from '../constants/cities.constant';

export type CityType = keyof typeof CITIES;

export type TripType = {
	city: CityType;
	startDate: Date;
	endDate: Date;
};
