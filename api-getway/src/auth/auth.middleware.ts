import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IMiddleware } from '../common/middleware.interface';
import { IConfigService } from '../config/config.service.interface';

export class AuthMiddleware implements IMiddleware {
	constructor(private configService: IConfigService) {}

	handler(req: Request, res: Response, next: NextFunction): void {
		const [bearer, token] = req.headers.authorization?.split(' ') || [];

		if (bearer !== 'Bearer') return next();

		const secret = this.configService.get('JWT_SECRET');

		verify(token, secret, (err, payload) => {
			const errorCondition = err || !payload || typeof payload === 'string';

			if (!errorCondition && this.isAuthPayload(payload)) {
				req.user = payload;
			}

			next();
		});
	}

	private isAuthPayload(payload: object): payload is Extract<Request['user'], object> {
		return 'id' in payload || 'username' in payload || 'role' in payload;
	}
}
