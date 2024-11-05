import axios from 'axios';

const baseURL = 'http://localhost:9090/api';

const API = axios.create({ baseURL });

// Interceptor for adding token to requests
API.interceptors.request.use(
	(req) => {
		// Add token to request headers if it exists in local storage
		const token = localStorage.getItem('token');
		if (token) {
			req.headers.Authorization = `Bearer ${token}`;
		}
		return req;
	},
	(err) => {
		return Promise.reject(err);
	}
);

API.interceptors.request.use(
	(res) => res,
	(err) => {
		// Handle response errors (e.g., logging out on 401)
		if (err.response && err.response.status === 401) {
			// Optionally handle token expiration
			console.error('Unauthorized, logging out ...');
			// Redirect to login or perform logout
		}
		return Promise.reject(err);
	}
);

// User authentication API
export const signUp = async (data) => axios.post('/auth/signup', data);
export const login = async (data) => axios.post('/auth/login', data);

// User profile API
export const getCurrUser = async (id) => axios.get(`/users/${id}`);
