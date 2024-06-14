import { KnownOnly } from '../common/types/known-only.type';
import { IPostServer } from '../grpc/genproto/post_service/post_grpc_pb';

export interface IPostsGrpcService extends KnownOnly<IPostServer> {}
