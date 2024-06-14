import { IDatabaseService } from './database/database.service.interface';
import { IGrpc } from './grpc';
import { Log } from './log/log';

export class App {
	constructor(private readonly databaseService: IDatabaseService, private readonly grpc: IGrpc) {}

	public async init() {
		await this.databaseService.run();
		Log.info('DATABASE success running');

		const { port, hostname } = await this.grpc.start();
		Log.info(`gRPC started on ${hostname}:${port}`);
	}
}
