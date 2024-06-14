import { Role } from './common/enums/role.enum';
import { IConfigService } from './config/config.service.interface';
import { IDatabaseService } from './database/database.service.interface';
import { IGrpc } from './grpc';
import { Log } from './log/log';
import { IUsersService } from './users/users.service.interface';

export class App {
	constructor(
		private readonly databaseService: IDatabaseService,
		private readonly grpc: IGrpc,
		private readonly usersService: IUsersService,
		private readonly configService: IConfigService
	) {}

	public async initFirstAdmin() {
		const existAdmin = await this.usersService.isExistAdmin();

		if (!existAdmin) {
			const full_name = this.configService.get('ADMIN_FULL_NAME');
			const username = this.configService.get('ADMIN_USERNAME');
			const password = this.configService.get('ADMIN_PASSWORD');
			await this.usersService.createUser({ username, password, full_name, role: Role.ADMIN });
			Log.info('Created by first admin');
		}
	}

	public async init() {
		await this.databaseService.run();
		Log.info('DATABASE success running');

		await this.initFirstAdmin();

		const { port, hostname } = await this.grpc.start();
		Log.info(`gRPC started on ${hostname}:${port}`);
	}
}
