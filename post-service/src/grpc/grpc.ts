import { ServerCredentials, ServiceDefinition, UntypedServiceImplementation } from '@grpc/grpc-js';
import { IGrpc } from './grpc.interface';
import { GrpcServerOverride } from './grpc.server-override';
import { IConfigService } from '../config/config.service.interface';

interface IService {
	difinition: ServiceDefinition<UntypedServiceImplementation>;
	implementaion: object;
}

export class Grpc implements IGrpc {
	private server: GrpcServerOverride;

	constructor(
		private readonly services: IService[],
		private readonly configService: IConfigService
	) {
		this.server = new GrpcServerOverride();
	}

	private useServices() {
		for (const service of this.services) {
			this.server.addTypedService(service.difinition, service.implementaion);
		}
	}

	public start() {
		this.useServices();

		return new Promise<{ port: number; hostname: string }>((resolve, reject) => {
			const GRPC_PORT = this.configService.get('GRPC_PORT');
			const GRPC_HOSTNAME = this.configService.get('GRPC_HOSTNAME');

			this.server.bindAsync(
				`${GRPC_HOSTNAME}:${GRPC_PORT}`,
				ServerCredentials.createInsecure(),
				(error, port) => {
					if (error) return reject(error);
					resolve({ port, hostname: GRPC_HOSTNAME });
				}
			);
		});
	}
}
