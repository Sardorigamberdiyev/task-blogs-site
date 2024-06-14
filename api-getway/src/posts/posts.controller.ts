import { Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { PostsGrpcClientService } from './posts.grpc-client.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AuthRoleGuard } from '../auth/auth.role.guard';
import { Role } from '../common/enums/role.enum';
import { GetPostListQueryDTO } from './dto/get-post-list-query.dto';
import { ValidateMiddleware } from '../common/validate.middleware';
import { IdParamDTO } from '../common/dtos/id-param.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { HTTPError } from '../errors/http-error';

export class PostsController extends BaseController {
	constructor(private readonly postsGrpcClientService: PostsGrpcClientService) {
		super();
		this.attachRoutes([
			{
				method: 'get',
				path: '/posts',
				middlewares: [new ValidateMiddleware(GetPostListQueryDTO, 'query')],
				controller: this.getPostsList,
			},
			{
				method: 'get',
				path: '/posts/me',
				middlewares: [
					new AuthGuard(),
					new ValidateMiddleware(GetPostListQueryDTO, 'query'),
				],
				controller: this.getMePostList,
			},
			{
				method: 'get',
				path: '/posts/:id',
				middlewares: [new ValidateMiddleware(IdParamDTO, 'params')],
				controller: this.getPostById,
			},
			{
				method: 'post',
				path: '/posts',
				middlewares: [
					new AuthGuard(),
					new AuthRoleGuard(Role.AUTHOR),
					new ValidateMiddleware(CreatePostDTO),
				],
				controller: this.createPost,
			},
			{
				method: 'put',
				path: '/posts/:id',
				middlewares: [
					new AuthGuard(),
					new AuthRoleGuard(Role.AUTHOR),
					new ValidateMiddleware(IdParamDTO, 'params'),
					new ValidateMiddleware(UpdatePostDTO),
				],
				controller: this.updatePost,
			},
			{
				method: 'delete',
				path: '/posts/:id',
				middlewares: [
					new AuthGuard(),
					new AuthRoleGuard(Role.AUTHOR),
					new ValidateMiddleware(IdParamDTO, 'params'),
				],
				controller: this.deletePost,
			},
		]);
	}

	public async getPostsList({ query }: Request<{}, {}, {}, GetPostListQueryDTO>, res: Response) {
		const posts = await this.postsGrpcClientService.getPosts(query);
		this.ok(res, posts);
	}

	public async getPostById({ params }: Request<IdParamDTO>, res: Response) {
		const post = await this.postsGrpcClientService.getPostById(+params.id);
		this.ok(res, post);
	}

	public async getMePostList(
		{ user, query }: Request<{}, {}, {}, GetPostListQueryDTO>,
		res: Response
	) {
		const posts = await this.postsGrpcClientService.getPosts(query, user.id);
		this.ok(res, posts);
	}

	public async createPost({ user, body }: Request<{}, {}, CreatePostDTO>, res: Response) {
		const createdResult = await this.postsGrpcClientService.createPost(user.id, body);
		this.created(res, createdResult);
	}

	public async updatePost(
		{ user, body, params }: Request<IdParamDTO, {}, UpdatePostDTO>,
		res: Response
	) {
		const post = await this.postsGrpcClientService.getPostById(+params.id);
		if (post.author?.id !== user.id) {
			throw new HTTPError("You can't update this post", 403);
		}
		const updatedResult = await this.postsGrpcClientService.updatePost(post.id, body);
		this.ok(res, updatedResult);
	}

	public async deletePost({ user, params }: Request<IdParamDTO>, res: Response) {
		const post = await this.postsGrpcClientService.getPostById(+params.id);
		if (post.author?.id !== user.id) {
			throw new HTTPError("You can't delete this post", 403);
		}
		const deletedResult = await this.postsGrpcClientService.deletePost(post.id);
		this.ok(res, deletedResult);
	}
}
