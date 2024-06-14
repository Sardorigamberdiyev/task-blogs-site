import { GrpcServiceError } from '../errors/grpc-service-error';
import { UserClient } from '../grpc/genproto/user_service/user_grpc_pb';
import {
	GetUserByIdRequest,
	GetUserByIdResponse,
	GetUsersRequest,
	GetUsersResponse,
} from '../grpc/genproto/user_service/user_pb';
import { GetUsersQueryDTO } from './dto/get-users-query.dto';

export class UsersGrpcClientService {
	constructor(private readonly userClient: UserClient) {}

	public getUsers({ page, limit, search }: GetUsersQueryDTO) {
		const getUsersRequest = new GetUsersRequest().setPage(+page).setLimit(+limit);

		if (search !== undefined) {
			getUsersRequest.setSearch(search);
		}

		return new Promise<GetUsersResponse.AsObject>((resolve, reject) => {
			this.userClient.getUsers(getUsersRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public getUserById(id: number) {
		const getUserByIdRequest = new GetUserByIdRequest().setUserId(id);

		return new Promise<GetUserByIdResponse.AsObject>((resolve, reject) => {
			this.userClient.getUserById(getUserByIdRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}
}
