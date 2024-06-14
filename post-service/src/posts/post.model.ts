import { IUserModel } from '../database/schemas/user.schema';

export interface IPostModel {
	id?: number;
	author_id: number | IUserModel;
	title: string;
	description: string;
	image_url: string;
	last_updated_at?: Date;
	created_at?: Date;
}
