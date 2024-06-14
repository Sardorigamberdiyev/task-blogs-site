import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { ExeptionFilter } from './errors/exception.filter';
import { Log } from './log/log';
import { IExeptionFilter } from './errors/exception.filter.interface';
import { BaseController } from './common/base.controller';
import { AuthMiddleware } from './auth/auth.middleware';
import { IConfigService } from './config/config.service.interface';

export class App {
	private app: Express;
	private exceptionFilter: IExeptionFilter;

	constructor(
		private readonly controllers: BaseController[],
		private readonly configService: IConfigService
	) {
		this.app = express();
		this.exceptionFilter = new ExeptionFilter();
	}

	private useGlobal() {
		this.app.use(cors());
		this.app.use(json());
	}

	private useGlobalMiddlewares() {
		const authMiddleware = new AuthMiddleware(this.configService);
		this.app.use(authMiddleware.handler.bind(authMiddleware));
	}

	private useRoutes() {
		for (const controller of this.controllers) {
			this.app.use('/api', controller.router);
		}
		this.app.use(this.exceptionFilter.routeNotFoundHandler);
	}

	private useCatchError() {
		this.app.use(this.exceptionFilter.errorHandler);
	}

	private listenServer() {
		const port = 3000;
		this.app.listen(port, () => Log.info(`Server running on port ${port}`));
	}

	public async init() {
		this.useGlobal();
		this.useGlobalMiddlewares();
		this.useRoutes();
		this.useCatchError();
		this.listenServer();
	}
}
