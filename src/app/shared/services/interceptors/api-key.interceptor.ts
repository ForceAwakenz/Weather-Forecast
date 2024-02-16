import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { environment } from '@src/environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
	const params = (req.params ?? new HttpParams()).append(
		'api_key',
		environment.apiKey
	);

	const updatedReq = req.clone({
		url: `${environment.apiUrl}${req.url}`,
		params,
	});

	return next(updatedReq);
};
