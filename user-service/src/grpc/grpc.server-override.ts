import { Server, ServiceDefinition } from '@grpc/grpc-js';

export class GrpcServerOverride extends Server {
	public addTypedService<TypedServiceImplementation extends Record<any, any>>(
		service: ServiceDefinition,
		implementation: TypedServiceImplementation
	): void {
		this.addService(service, implementation);
	}
}
