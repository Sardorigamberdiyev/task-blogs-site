import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { IAuthGrpcService } from './auth.grpc.service.interface';
import { IAuthService } from './auth.service.interface';
import { SignInRequest, SignUpRequest, AuthResponse } from '../grpc/genproto/user_service/auth_pb';
import { grpcErrorHandling } from '../errors/grpc.error.handling';
import { UserEntityPB } from '../grpc/genproto/user_service/general_pb';
import { userRoleToRole } from '../utils/user-role-to-role';

export class AuthGrpcService implements IAuthGrpcService {
	constructor(private readonly authService: IAuthService) {}

	public signUp(
		call: ServerUnaryCall<SignUpRequest, AuthResponse>,
		callback: sendUnaryData<AuthResponse>
	) {
		return grpcErrorHandling(async () => {
			const { fullName, role, ...restReqData } = call.request.toObject();

			const { accessToken, user } = await this.authService.signUp({
				full_name: fullName,
				role: userRoleToRole(role),
				...restReqData,
			});

			const userEntityPB = new UserEntityPB()
				.setId(user.id)
				.setFullName(user.full_name)
				.setRole(user.role)
				.setUsername(user.username);

			const authResponse = new AuthResponse();
			authResponse.setAccessToken(accessToken).setUser(userEntityPB);

			return authResponse;
		}, callback);
	}

	public signIn(
		call: ServerUnaryCall<SignInRequest, AuthResponse>,
		callback: sendUnaryData<AuthResponse>
	) {
		return grpcErrorHandling(async () => {
			const { accessToken, user } = await this.authService.signIn(call.request.toObject());

			const userEntityPB = new UserEntityPB();
			userEntityPB
				.setId(user.id)
				.setFullName(user.full_name)
				.setRole(user.role)
				.setUsername(user.username);

			const authResponse = new AuthResponse();
			authResponse.setAccessToken(accessToken).setUser(userEntityPB);

			return authResponse;
		}, callback);
	}
}
