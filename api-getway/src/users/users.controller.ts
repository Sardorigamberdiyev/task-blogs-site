import { BaseController } from '../common/base.controller';
import { Request, Response } from 'express';
import { UsersGrpcClientService } from './users.grpc-client.service';
import { AuthGuard } from '../auth/auth.guard';
import { PaginationDTO } from '../common/dtos/pagination.dto';
import { ValidateMiddleware } from '../common/validate.middleware';
import { AuthRoleGuard } from '../auth/auth.role.guard';
import { Role } from '../common/enums/role.enum';
import { GetUsersQueryDTO } from './dto/get-users-query.dto';

export class UsersController extends BaseController {
	constructor(private readonly usersGrpcClientService: UsersGrpcClientService) {
		super();
		this.attachRoutes([
			{
				method: 'get',
				path: '/users',
				middlewares: [
					new AuthGuard(),
					new AuthRoleGuard(Role.ADMIN),
					new ValidateMiddleware(GetUsersQueryDTO, 'query'),
				],
				controller: this.getUsers,
			},
			{
				method: 'get',
				path: '/users/profile',
				middlewares: [new AuthGuard()],
				controller: this.getProfile,
			},
		]);
	}

	public async getUsers({ query }: Request<{}, {}, {}, GetUsersQueryDTO>, res: Response) {
		const users = await this.usersGrpcClientService.getUsers(query);
		this.ok(res, users);
	}

	public async getProfile({ user }: Request, res: Response) {
		const userProfile = await this.usersGrpcClientService.getUserById(user.id);
		this.ok(res, userProfile);
	}
}
