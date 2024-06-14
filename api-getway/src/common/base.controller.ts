import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from './route.interface';
import { HTTPError } from '../errors/http-error';
import { Log } from '../log/log';

export abstract class BaseController {
	public router: Router;

	constructor() {
		this.router = Router();
	}

	protected attachRoutes(routes: IRoute[]) {
		for (const route of routes) {
			const { path, method, middlewares, controller } = route;

			const middlewareHandlers =
				middlewares?.map((m) => this.funcErrorHandler(m.handler.bind(m))) || [];

			Log.info(
				`[${method.toUpperCase()}]: ${path} (Middleware: ${middlewareHandlers.length})`
			);

			this.router[method](
				path,
				middlewareHandlers,
				this.funcErrorHandler(controller.bind(this))
			);
		}
	}

	protected ok(res: Response, sendData: unknown) {
		this.send(res, 200, sendData);
	}

	protected created(res: Response, sendData: unknown) {
		this.send(res, 201, sendData);
	}

	private send(res: Response, code: number, data: unknown) {
		res.status(code).json(data);
	}

	private funcErrorHandler(controller: IRoute['controller']) {
		return async (req: Request, res: Response, next: NextFunction) => {
			try {
				await controller(req, res, next);
			} catch (e) {
				next(e);
			}
		};
	}
}
