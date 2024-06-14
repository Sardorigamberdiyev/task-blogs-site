import { FindOptionsWhere } from 'typeorm';
import { IPostCommentModel } from './post-comment.model';
import { PaginationType } from '../common/types/pagination.type';
import { IUserModel } from '../database/schemas/user.schema';

export interface IPostCommentsRepository {
	findOne(
		where?: FindOptionsWhere<IPostCommentModel>
	): Promise<Required<IPostCommentModel> | null>;
	findById(id: number): Promise<FindPostCommentSelect>;
	findAllWithCount(
		pagination: PaginationType,
		where?: FindOptionsWhere<IPostCommentModel>
	): Promise<FindPostCommentSelectWithCount>;
	createOrUpdateOne(postComment: IPostCommentModel): Promise<Required<IPostCommentModel>>;
	deleteOne(
		postComment: Required<IPostCommentModel>
	): Promise<Required<Omit<IPostCommentModel, 'id'>>>;
}

export type FindPostCommentSelect = Required<
	Omit<IPostCommentModel, 'user_id' | 'post_id'> & {
		user_id: Pick<Required<IUserModel>, 'id' | 'full_name' | 'username'>;
	}
>;
export type FindPostCommentSelectWithCount = {
	comments: FindPostCommentSelect[];
	count: number;
};
