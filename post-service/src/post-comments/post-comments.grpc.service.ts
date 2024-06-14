import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { IPostCommentsGrpcService } from './post-comments.grpc.service.interface';
import {
	CreatePostCommentRequest,
	GetPostCommentsRequest,
	GetPostCommentsResponse,
	UpdatePostCommentRequest,
} from '../grpc/genproto/post_service/post_comment_pb';
import { Author, IdParams, PostCommentEntityPB } from '../grpc/genproto/post_service/general_pb';
import { grpcErrorHandling } from '../errors/grpc.error.handling';
import { IPostCommentsService } from './post-comments.service.interface';

export class PostCommentsGrpcService implements IPostCommentsGrpcService {
	constructor(private readonly postCommentsService: IPostCommentsService) {}

	public getPostComments(
		call: ServerUnaryCall<GetPostCommentsRequest, GetPostCommentsResponse>,
		callback: sendUnaryData<GetPostCommentsResponse>
	) {
		return grpcErrorHandling(async () => {
			const { postId, ...pagination } = call.request.toObject();
			const { page, results, total_pages, total_results } =
				await this.postCommentsService.getPostComments(postId, pagination);
			const commentList = results.map((result) => {
				const author = new Author()
					.setId(result.user_id.id)
					.setFullName(result.user_id.full_name)
					.setUsername(result.user_id.username);

				return new PostCommentEntityPB()
					.setId(result.id)
					.setComment(result.comment)
					.setAuthor(author)
					.setCreatedAt(result.created_at.toISOString());
			});
			return new GetPostCommentsResponse()
				.setPage(page)
				.setTotalPages(total_pages)
				.setTotalResults(total_results)
				.setCommentsList(commentList);
		}, callback);
	}

	public getPostCommentById(
		call: ServerUnaryCall<IdParams, PostCommentEntityPB>,
		callback: sendUnaryData<PostCommentEntityPB>
	) {
		return grpcErrorHandling(async () => {
			const postCommentId = call.request.getId();
			const { id, user_id, comment, created_at } =
				await this.postCommentsService.getPostCommentById(postCommentId);

			const author = new Author()
				.setId(user_id.id)
				.setUsername(user_id.username)
				.setFullName(user_id.full_name);

			return new PostCommentEntityPB()
				.setId(id)
				.setComment(comment)
				.setAuthor(author)
				.setCreatedAt(created_at.toISOString());
		}, callback);
	}

	public async createPostComment(
		call: ServerUnaryCall<CreatePostCommentRequest, IdParams>,
		callback: sendUnaryData<IdParams>
	) {
		return grpcErrorHandling(async () => {
			const { postId, userId, comment } = call.request.toObject();
			const postComment = await this.postCommentsService.createPostComment({
				post_id: postId,
				user_id: userId,
				comment,
			});
			return new IdParams().setId(postComment.id);
		}, callback);
	}

	public async updatePostComment(
		call: ServerUnaryCall<UpdatePostCommentRequest, IdParams>,
		callback: sendUnaryData<IdParams>
	) {
		return grpcErrorHandling(async () => {
			const { comment, id } = call.request.toObject();
			const updatedComment = await this.postCommentsService.updatePostComment(id, comment);
			return new IdParams().setId(updatedComment.id);
		}, callback);
	}

	public async deletePostComment(
		call: ServerUnaryCall<IdParams, IdParams>,
		callback: sendUnaryData<IdParams>
	) {
		return grpcErrorHandling(async () => {
			const commentId = call.request.getId();
			await this.postCommentsService.deletePostComment(commentId);
			return new IdParams().setId(commentId);
		}, callback);
	}
}
