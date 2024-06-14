import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { IPostsGrpcService } from './posts.grpc.service.interface';
import {
	CreatePostRequest,
	GetPostsRequest,
	GetPostsResponse,
	UpdatePostRequest,
} from '../grpc/genproto/post_service/post_pb';
import { Author, IdParams, PostEntityPB } from '../grpc/genproto/post_service/general_pb';
import { IPostsService } from './posts.service.interface';
import { grpcErrorHandling } from '../errors/grpc.error.handling';

export class PostsGrpcService implements IPostsGrpcService {
	constructor(private readonly postsService: IPostsService) {}

	public async getPosts(
		call: ServerUnaryCall<GetPostsRequest, GetPostsResponse>,
		callback: sendUnaryData<GetPostsResponse>
	) {
		return grpcErrorHandling(async () => {
			const { authorId, ...restReqData } = call.request.toObject();
			const { page, results, total_pages, total_results } = await this.postsService.getPosts({
				...restReqData,
				author_id: authorId,
			});

			const posts = results.map((post) => {
				const author = new Author()
					.setId(post.author_id.id)
					.setFullName(post.author_id.full_name)
					.setUsername(post.author_id.username);

				return new PostEntityPB()
					.setId(post.id)
					.setTitle(post.title)
					.setDescription(post.description)
					.setImageUrl(post.image_url)
					.setAuthor(author)
					.setCreatedAt(post.created_at.toISOString());
			});

			return new GetPostsResponse()
				.setPage(page)
				.setTotalPages(total_pages)
				.setTotalResults(total_results)
				.setPostsList(posts);
		}, callback);
	}

	public async getPostById(
		call: ServerUnaryCall<IdParams, PostEntityPB>,
		callback: sendUnaryData<PostEntityPB>
	) {
		return grpcErrorHandling(async () => {
			const post = await this.postsService.getPostById(call.request.getId());
			return new PostEntityPB()
				.setId(post.id)
				.setTitle(post.title)
				.setDescription(post.description)
				.setImageUrl(post.image_url)
				.setCreatedAt(post.created_at.toISOString())
				.setAuthor(
					new Author()
						.setId(post.author_id.id)
						.setFullName(post.author_id.full_name)
						.setUsername(post.author_id.username)
				);
		}, callback);
	}

	public async createPost(
		call: ServerUnaryCall<CreatePostRequest, IdParams>,
		callback: sendUnaryData<IdParams>
	) {
		return grpcErrorHandling(async () => {
			const { authorId, imageUrl, ...restReqData } = call.request.toObject();
			const post = await this.postsService.createPost({
				author_id: authorId,
				image_url: imageUrl,
				...restReqData,
			});
			return new IdParams().setId(post.id);
		}, callback);
	}

	public async updatePost(
		call: ServerUnaryCall<UpdatePostRequest, IdParams>,
		callback: sendUnaryData<IdParams>
	) {
		return grpcErrorHandling(async () => {
			const { id, imageUrl, ...restUpdateData } = call.request.toObject();
			const post = await this.postsService.updatePost(id, {
				image_url: imageUrl,
				...restUpdateData,
			});
			return new IdParams().setId(post.id);
		}, callback);
	}

	public async deletePost(
		call: ServerUnaryCall<IdParams, IdParams>,
		callback: sendUnaryData<IdParams>
	) {
		return grpcErrorHandling(async () => {
			const postId = call.request.getId();
			await this.postsService.deletePost(postId);
			return new IdParams().setId(postId);
		}, callback);
	}
}
