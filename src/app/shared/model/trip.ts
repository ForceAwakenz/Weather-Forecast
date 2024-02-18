export type CityKeys =
	| 'Kyiv'
	| 'Lviv'
	| 'Tokyo'
	| 'Delhi'
	| 'Shanghai'
	| 'Paris'
	| 'Dubai'
	| 'NewYorkCity'
	| 'Istanbul'
	| 'KualaLumpur'
	| 'Barcelona'
	| 'Amsterdam'
	| 'LosAngeles'
	| 'Rome'
	| 'London'
	| 'Bangkok'
	| 'Prague'
	| 'HongKong'
	| 'Singapore'
	| 'Seoul';

export type TripType = {
	city: CityKeys;
	startDate: Date;
	endDate: Date;
};

export type CityDataType = {
	city: CityKeys;
	requestKey: string;
	imagePath: `assets/${string}`;
};
