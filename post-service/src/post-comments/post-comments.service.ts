import { status } from '@grpc/grpc-js';
import { PaginationType } from '../common/types/pagination.type';
import { GrpcError } from '../errors/grpc.error';
import { PostCommentEntity } from './post-comment.entity';
import { IPostCommentsRepository } from './post-comments.repository.interface';
import { ICreateCommentData, IPostCommentsService } from './post-comments.service.interface';
import { IPostsRepository } from '../posts/posts.repository.interface';
import { IPostsService } from '../posts/posts.service.interface';

export class PostCommentsService implements IPostCommentsService {
	constructor(
		private readonly postCommentsRepository: IPostCommentsRepository,
		private readonly postsService: IPostsService
	) {}

	public async getPostComments(post_id: number, pagination: PaginationType) {
		const { page, limit } = pagination;
		const { comments, count } = await this.postCommentsRepository.findAllWithCount(
			{
				page,
				limit,
			},
			{ post_id }
		);

		const afterDot = count % limit;
		const pageTrunc = Math.trunc(count / limit);
		const total_pages = afterDot !== 0 ? pageTrunc + 1 : pageTrunc;

		return { page, total_pages, total_results: count, results: comments };
	}

	public async getPostCommentById(id: number) {
		const postComment = await this.postCommentsRepository.findById(id);

		if (!postComment) {
			throw new GrpcError('Post comment by id not found', status.NOT_FOUND);
		}

		return postComment;
	}

	public async createPostComment(data: ICreateCommentData) {
		const { post_id, ...restData } = data;
		const post = await this.postsService.getPostById(post_id);
		return this.postCommentsRepository.createOrUpdateOne(
			new PostCommentEntity({ post_id: post.id, ...restData })
		);
	}

	public async updatePostComment(id: number, comment: string) {
		const postComment = await this.postCommentsRepository.findOne({ id });

		if (!postComment) {
			throw new GrpcError('Post comment by id not found', status.NOT_FOUND);
		}

		const postCommentEntity = new PostCommentEntity(postComment);
		postCommentEntity.changeComment(comment);

		return this.postCommentsRepository.createOrUpdateOne(postCommentEntity);
	}

	public async deletePostComment(id: number) {
		const postComment = await this.postCommentsRepository.findOne({ id });

		if (!postComment) {
			throw new GrpcError(
				'Post comment by id not found or already deleted',
				status.NOT_FOUND
			);
		}

		const postCommentEntity = new PostCommentEntity(postComment) as Required<PostCommentEntity>;

		return this.postCommentsRepository.deleteOne(postCommentEntity);
	}
}
