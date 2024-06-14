import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export function apiErrorHandler(error: AxiosError<{ message: string }>) {
	const { data } = error.response || {};
	if (data) {
		toast.error(data.message);
	}
}
