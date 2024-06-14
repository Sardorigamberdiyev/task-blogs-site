import { api } from '../api';
import {
	IAddPostCommentRequestData,
	IAddPostRequestData,
	IBaseListRequest,
	IEditPostRequestData,
	ISignInRequestData,
	ISignUpRequestData,
} from './blog.request.interfaces';
import {
	IAuthResponseData,
	IBaseActionResponseData,
	IGetPostCommentsResponseData,
	IGetPostListResponseData,
	IGetUsersResponseData,
} from './blog.response.interfaces';

export class BlogService {
	public async signIn(body: ISignInRequestData) {
		const { data } = await api.post<IAuthResponseData>('/auth/signin', body);
		return data;
	}

	public async signUp(body: ISignUpRequestData) {
		const { data } = await api.post<IAuthResponseData>('/auth/signup', body);
		return data;
	}

	public async getPosts(query: IBaseListRequest) {
		const { data } = await api.get<IGetPostListResponseData>('/posts', { params: query });
		return data;
	}

	public async getMePosts(query: IBaseListRequest) {
		const { data } = await api.get<IGetPostListResponseData>('/posts/me', { params: query });
		return data;
	}

	public async getPostComments(postId: number, query: IBaseListRequest) {
		const { data } = await api.get<IGetPostCommentsResponseData>(`/posts/${postId}/comments`, {
			params: query,
		});
		return data;
	}

	public async addPost(body: IAddPostRequestData) {
		const { data } = await api.post<IBaseActionResponseData>('/posts', body);
		return data;
	}

	public async editPost(postId: number, body: IEditPostRequestData) {
		const { data } = await api.put<IBaseActionResponseData>(`/posts/${postId}`, body);
		return data;
	}

	public async deletePost(postId: number) {
		const { data } = await api.delete<IBaseActionResponseData>(`/posts/${postId}`);
		return data;
	}

	public async addComment(postId: number, body: IAddPostCommentRequestData) {
		const { data } = await api.post<IBaseActionResponseData>(`/posts/${postId}/comments`, body);
		return data;
	}

	public async getUsers(query: IBaseListRequest) {
		const { data } = await api.get<IGetUsersResponseData>('/users', { params: query });
		return data;
	}
}
