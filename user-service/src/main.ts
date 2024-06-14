import { App } from './app';
import { AuthGrpcService } from './auth/auth.grpc.service';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/config.service';
import { DatabaseService } from './database/database.service';
import { Grpc } from './grpc';
import { AuthService as AuthServiceDifinition } from './grpc/genproto/user_service/auth_grpc_pb';
import { UserService as UserServiceDifinition } from './grpc/genproto/user_service/user_grpc_pb';
import { JwtService } from './jwt/jwt.service';
import { Log } from './log/log';
import { UsersGrpcService } from './users/users.grpc.service';
import { UsersRepository } from './users/users.repository';
import { UsersService } from './users/users.service';

async function bootstrap() {
	const configService = ConfigService.getInstance();
	const databaseService = DatabaseService.getInstance(configService);
	const jwtService = new JwtService(configService);
	// Users
	const usersRepository = new UsersRepository(databaseService);
	const usersService = new UsersService(usersRepository);
	// Auth
	const authService = new AuthService(usersService, jwtService);

	const grpc = new Grpc(
		[
			{
				difinition: UserServiceDifinition,
				implementaion: new UsersGrpcService(usersService),
			},
			{ difinition: AuthServiceDifinition, implementaion: new AuthGrpcService(authService) },
		],
		configService
	);

	const app = new App(databaseService, grpc, usersService, configService);
	await app.init();
	Log.info('User microservice started');
}

bootstrap();
