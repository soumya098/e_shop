import axios from 'axios';

// const baseURL = 'http://localhost:9090/api';
const baseURL = 'https://dev-project-ecommerce.upgrad.dev/api';

const API = axios.create({ baseURL });

const token =
	'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTczMTAwNDY5MCwiZXhwIjoxNzMxMDEzMDkwfQ.sSt_wLrO0VTuezZ2FmyiuFODOsYQV-C2c523afmbFM-9EkBSw8jMoXTXE1trQQhNXdFrFvajBtU2Kd3fBqWF5g';

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
