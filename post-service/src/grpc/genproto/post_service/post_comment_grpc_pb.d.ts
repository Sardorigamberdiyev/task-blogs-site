// package: post_comment
// file: post_comment.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as post_comment_pb from "./post_comment_pb";
import * as general_pb from "./general_pb";

interface IPostCommentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPostComments: IPostCommentService_IGetPostComments;
    getPostCommentById: IPostCommentService_IGetPostCommentById;
    createPostComment: IPostCommentService_ICreatePostComment;
    updatePostComment: IPostCommentService_IUpdatePostComment;
    deletePostComment: IPostCommentService_IDeletePostComment;
}

interface IPostCommentService_IGetPostComments extends grpc.MethodDefinition<post_comment_pb.GetPostCommentsRequest, post_comment_pb.GetPostCommentsResponse> {
    path: "/post_comment.PostComment/GetPostComments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_comment_pb.GetPostCommentsRequest>;
    requestDeserialize: grpc.deserialize<post_comment_pb.GetPostCommentsRequest>;
    responseSerialize: grpc.serialize<post_comment_pb.GetPostCommentsResponse>;
    responseDeserialize: grpc.deserialize<post_comment_pb.GetPostCommentsResponse>;
}
interface IPostCommentService_IGetPostCommentById extends grpc.MethodDefinition<general_pb.IdParams, general_pb.PostCommentEntityPB> {
    path: "/post_comment.PostComment/GetPostCommentById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<general_pb.IdParams>;
    requestDeserialize: grpc.deserialize<general_pb.IdParams>;
    responseSerialize: grpc.serialize<general_pb.PostCommentEntityPB>;
    responseDeserialize: grpc.deserialize<general_pb.PostCommentEntityPB>;
}
interface IPostCommentService_ICreatePostComment extends grpc.MethodDefinition<post_comment_pb.CreatePostCommentRequest, general_pb.IdParams> {
    path: "/post_comment.PostComment/CreatePostComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_comment_pb.CreatePostCommentRequest>;
    requestDeserialize: grpc.deserialize<post_comment_pb.CreatePostCommentRequest>;
    responseSerialize: grpc.serialize<general_pb.IdParams>;
    responseDeserialize: grpc.deserialize<general_pb.IdParams>;
}
interface IPostCommentService_IUpdatePostComment extends grpc.MethodDefinition<post_comment_pb.UpdatePostCommentRequest, general_pb.IdParams> {
    path: "/post_comment.PostComment/UpdatePostComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_comment_pb.UpdatePostCommentRequest>;
    requestDeserialize: grpc.deserialize<post_comment_pb.UpdatePostCommentRequest>;
    responseSerialize: grpc.serialize<general_pb.IdParams>;
    responseDeserialize: grpc.deserialize<general_pb.IdParams>;
}
interface IPostCommentService_IDeletePostComment extends grpc.MethodDefinition<general_pb.IdParams, general_pb.IdParams> {
    path: "/post_comment.PostComment/DeletePostComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<general_pb.IdParams>;
    requestDeserialize: grpc.deserialize<general_pb.IdParams>;
    responseSerialize: grpc.serialize<general_pb.IdParams>;
    responseDeserialize: grpc.deserialize<general_pb.IdParams>;
}

export const PostCommentService: IPostCommentService;

export interface IPostCommentServer extends grpc.UntypedServiceImplementation {
    getPostComments: grpc.handleUnaryCall<post_comment_pb.GetPostCommentsRequest, post_comment_pb.GetPostCommentsResponse>;
    getPostCommentById: grpc.handleUnaryCall<general_pb.IdParams, general_pb.PostCommentEntityPB>;
    createPostComment: grpc.handleUnaryCall<post_comment_pb.CreatePostCommentRequest, general_pb.IdParams>;
    updatePostComment: grpc.handleUnaryCall<post_comment_pb.UpdatePostCommentRequest, general_pb.IdParams>;
    deletePostComment: grpc.handleUnaryCall<general_pb.IdParams, general_pb.IdParams>;
}

export interface IPostCommentClient {
    getPostComments(request: post_comment_pb.GetPostCommentsRequest, callback: (error: grpc.ServiceError | null, response: post_comment_pb.GetPostCommentsResponse) => void): grpc.ClientUnaryCall;
    getPostComments(request: post_comment_pb.GetPostCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_comment_pb.GetPostCommentsResponse) => void): grpc.ClientUnaryCall;
    getPostComments(request: post_comment_pb.GetPostCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_comment_pb.GetPostCommentsResponse) => void): grpc.ClientUnaryCall;
    getPostCommentById(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.PostCommentEntityPB) => void): grpc.ClientUnaryCall;
    getPostCommentById(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.PostCommentEntityPB) => void): grpc.ClientUnaryCall;
    getPostCommentById(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.PostCommentEntityPB) => void): grpc.ClientUnaryCall;
    createPostComment(request: post_comment_pb.CreatePostCommentRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    createPostComment(request: post_comment_pb.CreatePostCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    createPostComment(request: post_comment_pb.CreatePostCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    updatePostComment(request: post_comment_pb.UpdatePostCommentRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    updatePostComment(request: post_comment_pb.UpdatePostCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    updatePostComment(request: post_comment_pb.UpdatePostCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    deletePostComment(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    deletePostComment(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    deletePostComment(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
}

export class PostCommentClient extends grpc.Client implements IPostCommentClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPostComments(request: post_comment_pb.GetPostCommentsRequest, callback: (error: grpc.ServiceError | null, response: post_comment_pb.GetPostCommentsResponse) => void): grpc.ClientUnaryCall;
    public getPostComments(request: post_comment_pb.GetPostCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_comment_pb.GetPostCommentsResponse) => void): grpc.ClientUnaryCall;
    public getPostComments(request: post_comment_pb.GetPostCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_comment_pb.GetPostCommentsResponse) => void): grpc.ClientUnaryCall;
    public getPostCommentById(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.PostCommentEntityPB) => void): grpc.ClientUnaryCall;
    public getPostCommentById(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.PostCommentEntityPB) => void): grpc.ClientUnaryCall;
    public getPostCommentById(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.PostCommentEntityPB) => void): grpc.ClientUnaryCall;
    public createPostComment(request: post_comment_pb.CreatePostCommentRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public createPostComment(request: post_comment_pb.CreatePostCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public createPostComment(request: post_comment_pb.CreatePostCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public updatePostComment(request: post_comment_pb.UpdatePostCommentRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public updatePostComment(request: post_comment_pb.UpdatePostCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public updatePostComment(request: post_comment_pb.UpdatePostCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public deletePostComment(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public deletePostComment(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public deletePostComment(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
}
