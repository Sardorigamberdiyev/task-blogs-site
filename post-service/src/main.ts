import { App } from './app';
import { ConfigService } from './config/config.service';
import { DatabaseService } from './database/database.service';
import { PostService as PostServiceDifinition } from './grpc/genproto/post_service/post_grpc_pb';
import { PostCommentService as PostCommentServiceDifinitaion } from './grpc/genproto/post_service/post_comment_grpc_pb';
import { Grpc } from './grpc';
import { PostsGrpcService } from './posts/posts.grpc.service';
import { PostsService } from './posts/posts.service';
import { PostsRepository } from './posts/posts.repository';
import { PostCommentsGrpcService } from './post-comments/post-comments.grpc.service';
import { Log } from './log/log';
import { PostCommentsRepository } from './post-comments/post-comments.repository';
import { PostCommentsService } from './post-comments/post-comments.service';

async function bootstrap() {
	const configService = ConfigService.getInstance();
	const databaseService = DatabaseService.getInstance(configService);
	// Posts
	const postsRepository = new PostsRepository(databaseService);
	const postsService = new PostsService(postsRepository);
	// Post comments
	const postCommentsRepository = new PostCommentsRepository(databaseService);
	const postCommentsService = new PostCommentsService(postCommentsRepository, postsService);

	const grpc = new Grpc(
		[
			{
				difinition: PostServiceDifinition,
				implementaion: new PostsGrpcService(postsService),
			},
			{
				difinition: PostCommentServiceDifinitaion,
				implementaion: new PostCommentsGrpcService(postCommentsService),
			},
		],
		configService
	);

	const app = new App(databaseService, grpc);
	await app.init();
	Log.info('Post microservice started');
}

bootstrap();
