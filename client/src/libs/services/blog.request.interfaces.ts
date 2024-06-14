import { Role } from '../enums/role.enum';

export interface IBaseListRequest {
	page: number;
	limit: number;
	search?: string;
}

export interface ISignInRequestData {
	username: string;
	password: string;
}

export interface ISignUpRequestData {
	fullName: string;
	username: string;
	role: Role;
	password: string;
}

export interface IAddPostRequestData {
	title: string;
	description: string;
	imageUrl: string;
}

export interface IAddPostCommentRequestData {
	comment: string;
}

export interface IEditPostRequestData extends IAddPostRequestData {}
