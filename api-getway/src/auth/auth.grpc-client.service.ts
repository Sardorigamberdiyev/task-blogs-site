import { AuthClient } from '../grpc/genproto/user_service/auth_grpc_pb';
import { SignInDTO } from './dto/sign-in.dto';
import { AuthResponse, SignInRequest, SignUpRequest } from '../grpc/genproto/user_service/auth_pb';
import { GrpcServiceError } from '../errors/grpc-service-error';
import { SignUpDTO } from './dto/sign-up.dto';
import { roleToUserRole } from '../utils/role-to-user-role';

export class AuthGrpcClientService {
	constructor(private readonly authClient: AuthClient) {}

	public signIn(dto: SignInDTO) {
		const singInRequest = new SignInRequest()
			.setUsername(dto.username)
			.setPassword(dto.password);

		return new Promise<AuthResponse.AsObject>((resolve, reject) => {
			this.authClient.signIn(singInRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}

	public singUp(dto: SignUpDTO) {
		const signUpRequest = new SignUpRequest()
			.setFullName(dto.fullName)
			.setUsername(dto.username.toLocaleLowerCase())
			.setRole(roleToUserRole(dto.role))
			.setPassword(dto.password);

		return new Promise<AuthResponse.AsObject>((resolve, reject) => {
			this.authClient.signUp(signUpRequest, (error, result) => {
				if (error) return reject(new GrpcServiceError(error));

				resolve(result.toObject());
			});
		});
	}
}
