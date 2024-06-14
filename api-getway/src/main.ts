import { App } from './app';
import { AuthController } from './auth/auth.controller';
import { AuthGrpcClientService } from './auth/auth.grpc-client.service';
import { ConfigService } from './config/config.service';
import { GrpcClients } from './grpc/grpc.clients';
import { PostCommentsController } from './post-comments/post-comments.controller';
import { PostCommentsGrpcClientService } from './post-comments/post-comments.grpc-client.service';
import { PostsController } from './posts/posts.controller';
import { PostsGrpcClientService } from './posts/posts.grpc-client.service';
import { UsersController } from './users/users.controller';
import { UsersGrpcClientService } from './users/users.grpc-client.service';

async function bootstrap() {
	const configService = ConfigService.getInstance();
	const grpcClients = new GrpcClients(configService);
	// Auth
	const authGrpcClientService = new AuthGrpcClientService(grpcClients.getAuthInstance());
	const authController = new AuthController(authGrpcClientService);
	// User
	const usersGrpcClientService = new UsersGrpcClientService(grpcClients.getUserInstance());
	const usersController = new UsersController(usersGrpcClientService);
	// Post
	const postsGrpcClientService = new PostsGrpcClientService(grpcClients.getPostInstance());
	const postsController = new PostsController(postsGrpcClientService);
	// Post comment
	const postsCommentsGrpcClientService = new PostCommentsGrpcClientService(
		grpcClients.getPostCommentInstance()
	);
	const postCommentsController = new PostCommentsController(postsCommentsGrpcClientService);

	const app = new App(
		[authController, usersController, postsController, postCommentsController],
		configService
	);
	app.init();
}

bootstrap();
