import { KnownOnly } from '../common/types/known-only.type';
import { IUserServer } from '../grpc/genproto/user_service/user_grpc_pb';

export interface IUsersGrpcService extends KnownOnly<IUserServer> {}
