import { status } from '@grpc/grpc-js';

export function grpcCodeToHttp(code: status) {
	switch (code) {
		case status.INVALID_ARGUMENT:
			return 400;
		case status.NOT_FOUND:
			return 404;
		case status.ALREADY_EXISTS:
			return 400;
		default:
			return 500;
	}
}
