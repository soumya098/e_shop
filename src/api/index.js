import axios from 'axios';

// const baseURL = 'http://localhost:9090/api';
const baseURL = 'https://dev-project-ecommerce.upgrad.dev/api';

const API = axios.create({ baseURL });

const token =
	'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTczMTMzNTI2NSwiZXhwIjoxNzMxMzQzNjY1fQ.3fmzh9mTwuiZYgOhfRT4AdTdOnZrF8a1LK0IdpoZ9bnBdV4Byz0kr_NIOYyHEbJAbR8aJBWyCI9MpCqeoGKsMA';

// Interceptor for adding token to requests
API.interceptors.request.use(
	(req) => {
		// Add token to request headers if it exists in local storage
		// const token = localStorage.getItem('token');
		if (token) {
			req.headers['x-auth-token'] = token;
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
export const signUp = async (data) => API.post('/auth/signup', data);
export const login = async (data) => API.post('/auth/signin', data);

// User profile API
export const fetchUserDetails = async (id) => API.get(`/users/${id}`);

// Product API
export const fetchAllProducts = async () => API.get('/products');
export const fetchProductById = async (id) => API.get(`/products/${id}`);
export const fetchAllCategories = async () => API.get('/products/categories');
export const upgradeProduct = async (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = async (id, data) => API.delete(`/products/${id}`);

// Addess API
export const fetchAllAddress = async () => API.get('/addresses');
