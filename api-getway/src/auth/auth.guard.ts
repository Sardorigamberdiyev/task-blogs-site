import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from '../common/middleware.interface';
import { HTTPError } from '../errors/http-error';

export class AuthGuard implements IMiddleware {
	async handler(req: Request, res: Response, next: NextFunction) {
		if (!!req.user) return next();

		next(new HTTPError('Unauthorized', 401));
	}
}
