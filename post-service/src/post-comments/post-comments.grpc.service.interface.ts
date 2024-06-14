import { KnownOnly } from '../common/types/known-only.type';
import { IPostCommentServer } from '../grpc/genproto/post_service/post_comment_grpc_pb';

export interface IPostCommentsGrpcService extends KnownOnly<IPostCommentServer> {}
