import { FindOptionsWhere } from 'typeorm';
import { BaseResponseList } from '../common/types/base.response-list.type';
import { PaginationType } from '../common/types/pagination.type';
import { IPostCommentModel } from './post-comment.model';
import { FindPostCommentSelect } from './post-comments.repository.interface';

export interface IPostCommentsService {
	getPostComments(
		postId: number,
		pagination: PaginationType
	): Promise<BaseResponseList<FindPostCommentSelect>>;
	getPostCommentById(id: number): Promise<FindPostCommentSelect>;
	createPostComment(data: ICreateCommentData): Promise<Required<IPostCommentModel>>;
	updatePostComment(id: number, comment: string): Promise<Required<IPostCommentModel>>;
	deletePostComment(id: number): Promise<Required<Omit<IPostCommentModel, 'id'>>>;
}

export interface ICreateCommentData
	extends Pick<IPostCommentModel, 'comment' | 'post_id' | 'user_id'> {}
