import { CITIES } from '@shared/constants/cities.constant';
import {
	convertDaysToMilliseconds,
	convertToSimpleDayFormat,
	dateNowInMilliseconds,
} from '@shared/utils/time.utils';
import { TripType } from '@src/app/model/trip';

export const TRIPS_MOCK: TripType[] = [
	{
		city: CITIES.Berlin.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(3))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(7))
		),
		id: crypto.randomUUID(),
	},
	{
		city: CITIES.Tokyo.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(4))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(9))
		),
		id: crypto.randomUUID(),
	},
	{
		city: CITIES.Barcelona.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(6))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(12))
		),
		id: crypto.randomUUID(),
	},
];

export const FIREBASE_STARTER_MOCK: TripType[] = [
	{
		city: CITIES.Amsterdam.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(3))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(7))
		),
		id: crypto.randomUUID(),
	},
	{
		city: CITIES.HongKong.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(4))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(9))
		),
		id: crypto.randomUUID(),
	},
	{
		city: CITIES.Prague.city,
		startDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(6))
		),
		endDate: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(12))
		),
		id: crypto.randomUUID(),
	},
];
