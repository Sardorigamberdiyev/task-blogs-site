import { status } from '@grpc/grpc-js';
import { GrpcError } from '../errors/grpc.error';
import { IJwtService } from '../jwt/jwt.service.interface';
import { IUserModel } from '../users/user.model';
import {
	ICreateUserData,
	IUsersService,
	IValidateUserData,
} from '../users/users.service.interface';
import { IAuthService } from './auth.service.interface';

export class AuthService implements IAuthService {
	constructor(
		private readonly usersService: IUsersService,
		private readonly jwtService: IJwtService
	) {}

	public async signUp(data: ICreateUserData) {
		const user = await this.usersService.createUser(data);
		const accessToken = await this.generateToken(user);

		return {
			accessToken,
			user,
		};
	}

	public async signIn(data: IValidateUserData) {
		const user = await this.usersService.validateUser(data);

		if (!user) {
			throw new GrpcError('Invalid username or passwor', status.INVALID_ARGUMENT);
		}

		const accessToken = await this.generateToken(user);

		return { accessToken, user };
	}

	private generateToken(user: IUserModel) {
		const { id, username, role } = user;
		return this.jwtService.sign({ id, username, role });
	}
}
