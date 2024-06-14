import { IUserModel } from '../database/schemas/user.schema';
import { IPostCommentModel } from './post-comment.model';

export class PostCommentEntity implements IPostCommentModel {
	id?: number | undefined;
	user_id: number | IUserModel;
	post_id: number;
	comment: string;
	created_at?: Date;

	constructor(postComment: IPostCommentModel) {
		this.id = postComment.id;
		this.user_id = postComment.user_id;
		this.post_id = postComment.post_id;
		this.comment = postComment.comment;
		this.created_at = postComment.created_at;
	}

	public changeComment(comment: string) {
		this.comment = comment;
	}
}
