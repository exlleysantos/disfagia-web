import axios from 'axios';
import { getToken } from './auth';
require('dotenv/config'); 

const api = axios.create({ baseURL: process.env.REACT_API_URL || 'http://localhost:3333'});

api.interceptors.request.use((config) => {
	const token = getToken();

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export default api;
