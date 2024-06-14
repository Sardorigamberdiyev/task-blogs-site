import { IConfigService } from '../config/config.service.interface';
import { PostCommentClient } from './genproto/post_service/post_comment_grpc_pb';
import { PostClient } from './genproto/post_service/post_grpc_pb';
import { AuthClient } from './genproto/user_service/auth_grpc_pb';
import { UserClient } from './genproto/user_service/user_grpc_pb';
import { credentials } from '@grpc/grpc-js';

export class GrpcClients {
	private authClient: AuthClient;
	private userClient: UserClient;
	private postClient: PostClient;
	private postCommentClient: PostCommentClient;

	constructor(configServie: IConfigService) {
		const userServiceHost = configServie.get('USER_SERVICE_HOST');
		const postServiceHost = configServie.get('POST_SERVICE_HOST');
		// User microservice
		this.authClient = new AuthClient(userServiceHost, credentials.createInsecure());
		this.userClient = new UserClient(userServiceHost, credentials.createInsecure());
		// Post microservice
		this.postClient = new PostClient(postServiceHost, credentials.createInsecure());
		this.postCommentClient = new PostCommentClient(
			postServiceHost,
			credentials.createInsecure()
		);
	}

	public getAuthInstance() {
		return this.authClient;
	}

	public getUserInstance() {
		return this.userClient;
	}

	public getPostInstance() {
		return this.postClient;
	}

	public getPostCommentInstance() {
		return this.postCommentClient;
	}
}
