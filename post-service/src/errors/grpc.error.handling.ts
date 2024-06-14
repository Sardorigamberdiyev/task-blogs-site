import { sendUnaryData, status } from '@grpc/grpc-js';
import { GrpcError } from './grpc.error';
import { Log } from '../log/log';

export async function grpcErrorHandling<R>(
	serviceCb: () => Promise<R>,
	callback: sendUnaryData<R>
) {
	try {
		const response = await serviceCb();
		callback(null, response);
	} catch (e) {
		if (e instanceof GrpcError) {
			return callback(new GrpcError(e.message, e.code, e.data), null);
		}
		if (e instanceof Error) Log.error(e.message);
		callback(new GrpcError('Internal server error', status.INTERNAL));
	}
}
