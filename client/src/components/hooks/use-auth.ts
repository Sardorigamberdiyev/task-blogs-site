import { useMemo } from 'react';
import { IAuthResponseData } from '../../libs/services/blog.response.interfaces';
import { BlogService } from '../../libs/services/blog.service';
import { useNavigate } from 'react-router-dom';
import { ISignUpRequestData } from '../../libs/services/blog.request.interfaces';
import { apiErrorHandler } from '../../libs/api/api.error.handler';
import { extractLocalStorage } from '../../libs/utils/extract-local-storage';

export function useAuth() {
	const api = useMemo(() => new BlogService(), []);
	const authData = useMemo(() => extractLocalStorage<IAuthResponseData>('user_auth'), []);

	const navigate = useNavigate();

	const signIn = (username: string, password: string) => {
		api.signIn({ username, password })
			.then((authData) => {
				localStorage.setItem('user_auth', JSON.stringify(authData));
				navigate(0);
			})
			.catch(apiErrorHandler);
	};

	const signUp = (data: ISignUpRequestData) => {
		api.signUp(data)
			.then((authData) => {
				localStorage.setItem('user_auth', JSON.stringify(authData));
				navigate(0);
			})
			.catch(apiErrorHandler);
	};

	const signOut = () => {
		localStorage.removeItem('user_auth');
		navigate(0);
	};

	return {
		isAuth: !!authData,
		user: authData && authData.user,
		signIn,
		signUp,
		signOut,
	};
}
