import { BaseController } from '../common/base.controller';
import { AuthGrpcClientService } from './auth.grpc-client.service';
import { Request, Response } from 'express';
import { SignInDTO } from './dto/sign-in.dto';
import { ValidateMiddleware } from '../common/validate.middleware';
import { SignUpDTO } from './dto/sign-up.dto';

export class AuthController extends BaseController {
	constructor(private readonly authGrpcClientService: AuthGrpcClientService) {
		super();
		this.attachRoutes([
			{
				method: 'post',
				path: '/auth/signin',
				middlewares: [new ValidateMiddleware(SignInDTO)],
				controller: this.signIn,
			},
			{
				method: 'post',
				path: '/auth/signup',
				middlewares: [new ValidateMiddleware(SignUpDTO)],
				controller: this.signUp,
			},
		]);
	}

	public async signIn(req: Request<{}, {}, SignInDTO>, res: Response) {
		const { accessToken, user } = await this.authGrpcClientService.signIn(req.body);
		this.ok(res, { accessToken, user });
	}

	public async signUp(req: Request<{}, {}, SignUpDTO>, res: Response) {
		const { accessToken, user } = await this.authGrpcClientService.singUp(req.body);
		this.created(res, { accessToken, user });
	}
}
