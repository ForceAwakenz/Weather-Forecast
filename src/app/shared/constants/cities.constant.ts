import { CityDataType, CityKeys } from '../model/trip';

export const CITIES: Record<CityKeys, CityDataType> = {
	Kyiv: {
		city: 'Kyiv',
		requestKey: 'Kyiv, Ukraine',
		imagePath: 'assets/pictures/cities/kyiv.jpg',
	},
	Lviv: {
		city: 'Lviv',
		requestKey: 'Lviv, Ukraine',
		imagePath: 'assets/pictures/cities/lviv.jpg',
	},
	Tokyo: {
		city: 'Tokyo',
		requestKey: 'Tokyo, Japan',
		imagePath: 'assets/pictures/cities/tokyo.jpg',
	},
	Delhi: {
		city: 'Delhi',
		requestKey: 'Delhi, India',
		imagePath: 'assets/pictures/cities/delhi.jpg',
	},
	Shanghai: {
		city: 'Shanghai',
		requestKey: 'Shanghai, China',
		imagePath: 'assets/pictures/cities/shanghai.jpg',
	},
	Paris: {
		city: 'Paris',
		requestKey: 'Paris, France',
		imagePath: 'assets/pictures/cities/paris.jpg',
	},
	Dubai: {
		city: 'Dubai',
		requestKey: 'Dubai, UAE',
		imagePath: 'assets/pictures/cities/dubai.jpg',
	},
	NewYorkCity: {
		city: 'NewYorkCity',
		requestKey: 'New York City, USA',
		imagePath: 'assets/pictures/cities/newyorkcity.jpg',
	},
	Istanbul: {
		city: 'Istanbul',
		requestKey: 'Istanbul, Turkey',
		imagePath: 'assets/pictures/cities/istanbul.jpg',
	},
	KualaLumpur: {
		city: 'KualaLumpur',
		requestKey: 'Kuala Lumpur, Malaysia',
		imagePath: 'assets/pictures/cities/kualalumpur.jpg',
	},
	Barcelona: {
		city: 'Barcelona',
		requestKey: 'Barcelona, Spain',
		imagePath: 'assets/pictures/cities/barcelona.jpg',
	},
	Amsterdam: {
		city: 'Amsterdam',
		requestKey: 'Amsterdam, Netherlands',
		imagePath: 'assets/pictures/cities/amsterdam.jpg',
	},
	LosAngeles: {
		city: 'LosAngeles',
		requestKey: 'Los Angeles, USA',
		imagePath: 'assets/pictures/cities/losangeles.jpg',
	},
	Rome: {
		city: 'Rome',
		requestKey: 'Rome, Italy',
		imagePath: 'assets/pictures/cities/rome.jpg',
	},
	Bangkok: {
		city: 'Bangkok',
		requestKey: 'Bangkok, Thailand',
		imagePath: 'assets/pictures/cities/bangkok.jpg',
	},
	London: {
		city: 'London',
		requestKey: 'London, UK',
		imagePath: 'assets/pictures/cities/london.jpg',
	},
	HongKong: {
		city: 'HongKong',
		requestKey: 'Hong Kong, China',
		imagePath: 'assets/pictures/cities/hongkong.jpg',
	},
	Singapore: {
		city: 'Singapore',
		requestKey: 'Singapore, Singapore',
		imagePath: 'assets/pictures/cities/singapore.jpg',
	},
	Seoul: {
		city: 'Seoul',
		requestKey: 'Seoul, South Korea',
		imagePath: 'assets/pictures/cities/seoul.jpg',
	},
	Prague: {
		city: 'Prague',
		requestKey: 'Prague, Czech Republic',
		imagePath: 'assets/pictures/cities/prague.jpg',
	},
} as const;
