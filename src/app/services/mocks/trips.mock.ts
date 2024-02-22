import { CITIES } from '@shared/constants/cities.constant';
import {
	convertDaysToMilliseconds,
	convertToSimpleDayFormat,
	dateNowInMilliseconds,
} from '@shared/utils/time.utils';
import { TripType } from '@src/app/model/trip';

export const TRIPS_MOCK: TripType[] = [
	{
		city: CITIES.NewYorkCity.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(2))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(3))
		),
		id: crypto.randomUUID(),
	},
	{
		city: CITIES.Tokyo.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(5))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(7))
		),
		id: crypto.randomUUID(),
	},
	{
		city: CITIES.Kyiv.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(1))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(7))
		),
		id: crypto.randomUUID(),
	},
];
