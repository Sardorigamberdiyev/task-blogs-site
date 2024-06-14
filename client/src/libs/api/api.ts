import axios, { AxiosError } from 'axios';
import { extractLocalStorage } from '../utils/extract-local-storage';
import { IAuthResponseData } from '../services/blog.response.interfaces';

const userAuth = extractLocalStorage<IAuthResponseData>('user_auth');

const api = axios.create({
	baseURL: `${process.env.REACT_APP_API_URL}/api`,
	headers: { Authorization: `Bearer ${userAuth?.accessToken}` },
});

api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error instanceof AxiosError) {
			const { response } = error;
			if (response?.status === 401) {
				localStorage.removeItem('user_auth');
				window.location.reload();
			}
		}
		return Promise.reject(error);
	}
);

export default api;
