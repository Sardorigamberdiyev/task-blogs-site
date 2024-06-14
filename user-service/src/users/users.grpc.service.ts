import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { IUsersService } from './users.service.interface';
import { IUsersGrpcService } from './users.grpc.service.interface';
import {
	GetUserByIdRequest,
	GetUserByIdResponse,
	GetUsersRequest,
	GetUsersResponse,
} from '../grpc/genproto/user_service/user_pb';
import { grpcErrorHandling } from '../errors/grpc.error.handling';
import { UserEntityPB } from '../grpc/genproto/user_service/general_pb';

export class UsersGrpcService implements IUsersGrpcService {
	constructor(private readonly usersService: IUsersService) {}

	public getUserById(
		call: ServerUnaryCall<GetUserByIdRequest, GetUserByIdResponse>,
		callback: sendUnaryData<GetUserByIdResponse>
	) {
		return grpcErrorHandling(async () => {
			const user = await this.usersService.getUserById(call.request.getUserId());

			return new GetUserByIdResponse()
				.setId(user.id)
				.setFullName(user.full_name)
				.setRole(user.role)
				.setUsername(user.username);
		}, callback);
	}

	public getUsers(
		call: ServerUnaryCall<GetUsersRequest, GetUsersResponse>,
		callback: sendUnaryData<GetUsersResponse>
	) {
		return grpcErrorHandling(async () => {
			const { page, total_pages, total_results, results } = await this.usersService.getUsers(
				call.request.toObject()
			);

			const userList = results.map((user) => {
				return new UserEntityPB()
					.setId(user.id)
					.setFullName(user.full_name)
					.setUsername(user.username)
					.setRole(user.role);
			});

			return new GetUsersResponse()
				.setPage(page)
				.setTotalPages(total_pages)
				.setTotalResults(total_results)
				.setUsersList(userList);
		}, callback);
	}
}
