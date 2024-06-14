import { IUserModel } from './user.model';

export interface IPostCommentModel {
	id: number;
	comment: string;
	author: Omit<IUserModel, 'role'>;
	createdAt: Date | string;
}
