import { IUserModel } from './user.model';

export interface IPostModel {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	author: Omit<IUserModel, 'role'>;
	createdAt: string | Date;
}
