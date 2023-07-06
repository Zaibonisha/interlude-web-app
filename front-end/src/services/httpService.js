import axios from 'axios';
import { toast } from 'react-toastify';
// import authSlice from '../features/auth/authSlice';

const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		// const root = localStorage.getItem("persist:root");
		// const store = JSON.parse(root);
		// const token = JSON.parse(store.auth);
		config.headers.Authorization = 'Token ' + `${localStorage.getItem('token')}`;
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		const data = error.response;
		console.log(data.data.detail);
		if (data.status === 422) {
			toast.error('Could not process your request');
		} else if (data.status === 401) {
		} else if (data.data.detail === 'LOGIN_BAD_CREDENTIALS') {
			toast.error('Wrong Email or Password');
		} else if (data.data.detail === 'REGISTER_USER_ALREADY_EXISTS') {
			toast.error('Email is already registered');
		} else if (data.data.detail) {
			toast.error(data.data.detail);
		} else {
			toast.error('Error Occurred');
		}

		return Promise.reject(error);
	}
);

export default {
	get: instance.get,
	post: instance.post,
	put: instance.put,
	delete: instance.delete,
	patch: instance.patch
};
