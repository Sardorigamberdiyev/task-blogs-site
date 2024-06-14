import { status } from '@grpc/grpc-js';

export class GrpcError extends Error {
	constructor(message: string, public code: status, public data: unknown = null) {
		super(message);
	}
}
