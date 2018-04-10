//para poder realizar peticiones usando fetch
import 'isomorphic-fetch';
import queryString from 'query-string';

const apiEndPoint = (endPoint, qString, fetchingFrom) => {
	let query = '';
	let apiUrl = '';

	if (qString) query = `?${qString}`;

	if (fetchingFrom === 'server') apiUrl = 'http://localhost:3005';

	return `${apiUrl}/api/${endPoint}${query}`;
}

const apiFetch = (endPoint, options = {}, query = false) => {
	let qString;
	const { fetchingFrom = 'client' } = options;

	delete options.fetchFrom;

	if (query) qString = queryString.stringify(query);

	const fetchOptions = apiOptions(options);
	const fetchEndPoint = apiEndPoint(endPoint, qString, fetchingFrom);

	return fetch(fetchEndPoint, fetchOptions).then(res => res.json());
}

const apiOptions = (options = {}) => {
	const {
		method = 'GET',
		headers = { 'Content-Type': 'application/json'},
		body = false,
	} = options;

	const newOptions = {
		method,
		headers,
		credentials: 'include',
	};

	if (body) newOptions.body = body;

	return newOptions;
}

export default {
	apiEndPoint,
	apiFetch,
	apiOptions,
}