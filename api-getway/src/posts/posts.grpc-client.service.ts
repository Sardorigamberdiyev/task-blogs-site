import { GrpcServiceError } from '../errors/grpc-service-error';
import { IdParams, PostEntityPB } from '../grpc/genproto/post_service/general_pb';
import { PostClient } from '../grpc/genproto/post_service/post_grpc_pb';
import {
	CreatePostRequest,
	GetPostsRequest,
	UpdatePostRequest,
} from '../grpc/genproto/post_service/post_pb';
import { CreatePostDTO } from './dto/create-post.dto';
import { GetPostListQueryDTO } from './dto/get-post-list-query.dto';
import { UpdatePostDTO } from './dto/update-post.dto';

export class PostsGrpcClientService {
	constructor(private readonly postClient: PostClient) {}

	public getPosts(queryDto: GetPostListQueryDTO, authorId?: number) {
		const { page, limit, search } = queryDto;

		const getPostsRequest = new GetPostsRequest().setPage(+page).setLimit(+limit);

		if (search !== undefined) {
			getPostsRequest.setSearch(search);
		}

		if (authorId !== undefined) {
			getPostsRequest.setAuthorId(authorId);
		}

		return new Promise((resolve, reject) => {
			this.postClient.getPosts(getPostsRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public getPostById(id: number) {
		const idParams = new IdParams().setId(id);

		return new Promise<PostEntityPB.AsObject>((resolve, reject) => {
			this.postClient.getPostById(idParams, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public createPost(authorId: number, dto: CreatePostDTO) {
		const createPostRequest = new CreatePostRequest()
			.setAuthorId(authorId)
			.setTitle(dto.title)
			.setDescription(dto.description)
			.setImageUrl(dto.imageUrl);

		return new Promise<IdParams.AsObject>((resolve, reject) => {
			this.postClient.createPost(createPostRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public updatePost(id: number, dto: UpdatePostDTO) {
		const updatePostRequest = new UpdatePostRequest()
			.setId(id)
			.setTitle(dto.title || '')
			.setDescription(dto.description || '')
			.setImageUrl(dto.imageUrl || '');

		return new Promise<IdParams.AsObject>((resolve, reject) => {
			this.postClient.updatePost(updatePostRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public deletePost(id: number) {
		const idParams = new IdParams().setId(id);

		return new Promise<IdParams.AsObject>((resolve, reject) => {
			this.postClient.deletePost(idParams, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}
}
