import { AuthGuard } from '../auth/auth.guard';
import { AuthRoleGuard } from '../auth/auth.role.guard';
import { BaseController } from '../common/base.controller';
import { IdParamDTO } from '../common/dtos/id-param.dto';
import { PaginationDTO } from '../common/dtos/pagination.dto';
import { Role } from '../common/enums/role.enum';
import { ValidateMiddleware } from '../common/validate.middleware';
import { HTTPError } from '../errors/http-error';
import { AddCommentDTO } from './dto/add-comment.dto';
import { UpdateCommentDTO } from './dto/update-comment.dto';
import { PostCommentsGrpcClientService } from './post-comments.grpc-client.service';
import { Request, Response } from 'express';

export class PostCommentsController extends BaseController {
	constructor(private readonly postCommentsGrpcClientServie: PostCommentsGrpcClientService) {
		super();
		this.attachRoutes([
			{
				method: 'get',
				path: '/posts/:id/comments',
				middlewares: [
					new ValidateMiddleware(IdParamDTO, 'params'),
					new ValidateMiddleware(PaginationDTO, 'query'),
				],
				controller: this.getPostComments,
			},
			{
				method: 'post',
				path: '/posts/:id/comments',
				middlewares: [
					new AuthGuard(),
					new ValidateMiddleware(IdParamDTO, 'params'),
					new ValidateMiddleware(AddCommentDTO),
				],
				controller: this.addComment,
			},
			{
				method: 'put',
				path: '/posts/comments/:id',
				middlewares: [
					new AuthGuard(),
					new AuthRoleGuard(Role.ADMIN, Role.AUTHOR),
					new ValidateMiddleware(IdParamDTO, 'params'),
					new ValidateMiddleware(UpdateCommentDTO),
				],
				controller: this.updateComment,
			},
			{
				method: 'delete',
				path: '/posts/comments/:id',
				middlewares: [
					new AuthGuard(),
					new AuthRoleGuard(Role.ADMIN, Role.AUTHOR),
					new ValidateMiddleware(IdParamDTO, 'params'),
				],
				controller: this.deleteComment,
			},
		]);
	}

	public async getPostComments(
		{ query, params }: Request<IdParamDTO, {}, {}, PaginationDTO>,
		res: Response
	) {
		const comments = await this.postCommentsGrpcClientServie.getPostComments(+params.id, query);
		this.ok(res, comments);
	}

	public async addComment(
		{ user, params, body }: Request<IdParamDTO, {}, AddCommentDTO>,
		res: Response
	) {
		const createdResult = await this.postCommentsGrpcClientServie.createPostComment(
			user.id,
			+params.id,
			body.comment
		);
		this.created(res, createdResult);
	}

	public async updateComment(
		{ user, params, body }: Request<IdParamDTO, {}, UpdateCommentDTO>,
		res: Response
	) {
		const postComment = await this.postCommentsGrpcClientServie.getPostCommentById(+params.id);
		if (postComment.author?.id !== user.id && Role.ADMIN !== user.role) {
			throw new HTTPError("You can't update this post comment", 403);
		}
		const updatedResult = await this.postCommentsGrpcClientServie.updatePostComment(
			postComment.id,
			body
		);
		this.ok(res, updatedResult);
	}

	public async deleteComment({ user, params }: Request<IdParamDTO>, res: Response) {
		const postComment = await this.postCommentsGrpcClientServie.getPostCommentById(+params.id);
		if (postComment.author?.id !== user.id && Role.ADMIN !== user.role) {
			throw new HTTPError("You can't delete this post comment", 403);
		}
		const deletedResult = await this.postCommentsGrpcClientServie.deletePostComment(
			postComment.id
		);
		this.ok(res, deletedResult);
	}
}
