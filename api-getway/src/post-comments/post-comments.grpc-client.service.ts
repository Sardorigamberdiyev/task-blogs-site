import { PaginationDTO } from '../common/dtos/pagination.dto';
import { GrpcServiceError } from '../errors/grpc-service-error';
import { IdParams, PostCommentEntityPB } from '../grpc/genproto/post_service/general_pb';
import { PostCommentClient } from '../grpc/genproto/post_service/post_comment_grpc_pb';
import {
	CreatePostCommentRequest,
	GetPostCommentsRequest,
	GetPostCommentsResponse,
	UpdatePostCommentRequest,
} from '../grpc/genproto/post_service/post_comment_pb';
import { UpdateCommentDTO } from './dto/update-comment.dto';

export class PostCommentsGrpcClientService {
	constructor(private readonly postCommentClient: PostCommentClient) {}

	public getPostCommentById(id: number) {
		const idParams = new IdParams().setId(id);

		return new Promise<PostCommentEntityPB.AsObject>((resolve, reject) => {
			this.postCommentClient.getPostCommentById(idParams, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public getPostComments(postId: number, { page, limit }: PaginationDTO) {
		const getCommentsRequest = new GetPostCommentsRequest()
			.setPage(+page)
			.setLimit(+limit)
			.setPostId(postId);

		return new Promise<GetPostCommentsResponse.AsObject>((resolve, reject) => {
			this.postCommentClient.getPostComments(getCommentsRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public createPostComment(userId: number, postId: number, comment: string) {
		const createCommentRequest = new CreatePostCommentRequest()
			.setPostId(postId)
			.setUserId(userId)
			.setComment(comment);

		return new Promise<IdParams.AsObject>((resolve, reject) => {
			this.postCommentClient.createPostComment(createCommentRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public updatePostComment(postId: number, dto: UpdateCommentDTO) {
		const updateCommentRequest = new UpdatePostCommentRequest()
			.setId(postId)
			.setComment(dto.comment || '');

		return new Promise<IdParams.AsObject>((resolve, reject) => {
			this.postCommentClient.updatePostComment(updateCommentRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public deletePostComment(id: number) {
		const idParams = new IdParams().setId(id);

		return new Promise<IdParams.AsObject>((resolve, reject) => {
			this.postCommentClient.deletePostComment(idParams, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}
}
