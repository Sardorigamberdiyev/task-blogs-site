import { IPostCommentModel } from '../models/post-coment.model';
import { IPostModel } from '../models/post.model';
import { IUserModel } from '../models/user.model';

export interface IBaseListResponse {
	page: number;
	totalPages: number;
	totalResults: number;
}

export interface IBaseActionResponseData {
	id: number;
}

export interface IAuthResponseData {
	accessToken: string;
	user: IUserModel;
}

export interface IGetPostListResponseData extends IBaseListResponse {
	postsList: IPostModel[];
}

export interface IGetPostCommentsResponseData extends IBaseListResponse {
	commentsList: IPostCommentModel[];
}

export interface IGetUsersResponseData extends IBaseListResponse {
	usersList: IUserModel[];
}
