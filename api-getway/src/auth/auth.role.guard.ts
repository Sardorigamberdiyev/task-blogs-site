import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from '../common/middleware.interface';
import { Role } from '../common/enums/role.enum';
import { HTTPError } from '../errors/http-error';

export class AuthRoleGuard implements IMiddleware {
	private roles: Role[];

	constructor(...roles: Role[]) {
		this.roles = roles;
	}

	handler({ user }: Request, res: Response, next: NextFunction): void {
		if (!user) {
			return next(new HTTPError('Unauthorized', 401));
		}

		const isAllowByRole = this.roles.some((role) => role === user.role);

		if (!isAllowByRole) {
			return next(new HTTPError('Forbidden', 403));
		}

		next();
	}
}
