import { CITIES } from '../../shared/constants/cities.constant';
import {
	convertDaysToMilliseconds,
	dateNowInMilliseconds,
} from '../../shared/utils/time.utils';

export const TRIPS_MOCK = [
	{
		city: CITIES.NewYorkCity.city,
		startDate: new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(2)),
		endDate: new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(3)),
	},
	{
		city: CITIES.Tokyo.city,
		startDate: new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(5)),
		endDate: new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(7)),
	},
	{
		city: CITIES.Kyiv.city,
		startDate: new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(1)),
		endDate: new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(7)),
	},
];
