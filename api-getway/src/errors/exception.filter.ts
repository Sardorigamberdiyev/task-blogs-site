import { Request, Response, NextFunction } from 'express';
import { IExeptionFilter } from './exception.filter.interface';
import { HTTPError } from './http-error';
import { GrpcServiceError } from './grpc-service-error';
import { Log } from '../log/log';
import { grpcCodeToHttp } from '../utils/grpc-code-to-http';

export class ExeptionFilter implements IExeptionFilter {
	public routeNotFoundHandler(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError('Route not found', 404));
	}

	public errorHandler(
		error: Error | HTTPError | GrpcServiceError,
		req: Request,
		res: Response,
		_: NextFunction
	): void {
		const message = error.message;
		let code = 500;
		let data = null;

		if (error instanceof HTTPError) {
			code = error.code;
			data = error.data;
		}

		if (error instanceof GrpcServiceError) {
			code = grpcCodeToHttp(error.code);
		}

		Log.error(code, '|', message);

		res.status(code).json({
			message,
			code,
			data,
		});
	}
}
