import { KnownOnly } from '../common/types/known-only.type';
import { IAuthServer } from '../grpc/genproto/user_service/auth_grpc_pb';

export interface IAuthGrpcService extends KnownOnly<IAuthServer> {}
