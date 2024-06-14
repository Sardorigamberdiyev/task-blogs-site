import { IUserModel } from '../database/schemas/user.schema';

export interface IPostCommentModel {
	id?: number;
	user_id: number | IUserModel;
	post_id: number;
	comment: string;
	created_at?: Date;
}
