import axios from 'axios';

const baseUrl = 'http://api.lint.ninja';

export const getCategories = () =>
	axios.get(`${baseUrl}/linters/categories`).then(rsp => rsp.data.result);

export const getLintersByCategory = category =>
	axios
		.get(`${baseUrl}/linters/category/${category}`)
		.then(rsp => rsp.data.result);

export const getLintersBySearch = search =>
	axios
		.get(`${baseUrl}/linters/search/${search}`)
		.then(rsp => rsp.data.result);
