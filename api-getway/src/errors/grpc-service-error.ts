import { ServiceError, status } from '@grpc/grpc-js';

export class GrpcServiceError extends Error {
	public code: status;

	constructor(serviceError: ServiceError) {
		const message = serviceError.message.split(':')[1];
		super(message);
		this.code = serviceError.code;
	}
}
