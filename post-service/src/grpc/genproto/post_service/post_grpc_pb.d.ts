// package: post
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as post_pb from "./post_pb";
import * as general_pb from "./general_pb";

interface IPostService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPosts: IPostService_IGetPosts;
    getPostById: IPostService_IGetPostById;
    createPost: IPostService_ICreatePost;
    updatePost: IPostService_IUpdatePost;
    deletePost: IPostService_IDeletePost;
}

interface IPostService_IGetPosts extends grpc.MethodDefinition<post_pb.GetPostsRequest, post_pb.GetPostsResponse> {
    path: "/post.Post/GetPosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.GetPostsRequest>;
    requestDeserialize: grpc.deserialize<post_pb.GetPostsRequest>;
    responseSerialize: grpc.serialize<post_pb.GetPostsResponse>;
    responseDeserialize: grpc.deserialize<post_pb.GetPostsResponse>;
}
interface IPostService_IGetPostById extends grpc.MethodDefinition<general_pb.IdParams, general_pb.PostEntityPB> {
    path: "/post.Post/GetPostById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<general_pb.IdParams>;
    requestDeserialize: grpc.deserialize<general_pb.IdParams>;
    responseSerialize: grpc.serialize<general_pb.PostEntityPB>;
    responseDeserialize: grpc.deserialize<general_pb.PostEntityPB>;
}
interface IPostService_ICreatePost extends grpc.MethodDefinition<post_pb.CreatePostRequest, general_pb.IdParams> {
    path: "/post.Post/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.CreatePostRequest>;
    requestDeserialize: grpc.deserialize<post_pb.CreatePostRequest>;
    responseSerialize: grpc.serialize<general_pb.IdParams>;
    responseDeserialize: grpc.deserialize<general_pb.IdParams>;
}
interface IPostService_IUpdatePost extends grpc.MethodDefinition<post_pb.UpdatePostRequest, general_pb.IdParams> {
    path: "/post.Post/UpdatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.UpdatePostRequest>;
    requestDeserialize: grpc.deserialize<post_pb.UpdatePostRequest>;
    responseSerialize: grpc.serialize<general_pb.IdParams>;
    responseDeserialize: grpc.deserialize<general_pb.IdParams>;
}
interface IPostService_IDeletePost extends grpc.MethodDefinition<general_pb.IdParams, general_pb.IdParams> {
    path: "/post.Post/DeletePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<general_pb.IdParams>;
    requestDeserialize: grpc.deserialize<general_pb.IdParams>;
    responseSerialize: grpc.serialize<general_pb.IdParams>;
    responseDeserialize: grpc.deserialize<general_pb.IdParams>;
}

export const PostService: IPostService;

export interface IPostServer extends grpc.UntypedServiceImplementation {
    getPosts: grpc.handleUnaryCall<post_pb.GetPostsRequest, post_pb.GetPostsResponse>;
    getPostById: grpc.handleUnaryCall<general_pb.IdParams, general_pb.PostEntityPB>;
    createPost: grpc.handleUnaryCall<post_pb.CreatePostRequest, general_pb.IdParams>;
    updatePost: grpc.handleUnaryCall<post_pb.UpdatePostRequest, general_pb.IdParams>;
    deletePost: grpc.handleUnaryCall<general_pb.IdParams, general_pb.IdParams>;
}

export interface IPostClient {
    getPosts(request: post_pb.GetPostsRequest, callback: (error: grpc.ServiceError | null, response: post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    getPosts(request: post_pb.GetPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    getPosts(request: post_pb.GetPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    getPostById(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.PostEntityPB) => void): grpc.ClientUnaryCall;
    getPostById(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.PostEntityPB) => void): grpc.ClientUnaryCall;
    getPostById(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.PostEntityPB) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    updatePost(request: post_pb.UpdatePostRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    updatePost(request: post_pb.UpdatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    updatePost(request: post_pb.UpdatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    deletePost(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    deletePost(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    deletePost(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
}

export class PostClient extends grpc.Client implements IPostClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPosts(request: post_pb.GetPostsRequest, callback: (error: grpc.ServiceError | null, response: post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    public getPosts(request: post_pb.GetPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    public getPosts(request: post_pb.GetPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    public getPostById(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.PostEntityPB) => void): grpc.ClientUnaryCall;
    public getPostById(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.PostEntityPB) => void): grpc.ClientUnaryCall;
    public getPostById(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.PostEntityPB) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public updatePost(request: post_pb.UpdatePostRequest, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public updatePost(request: post_pb.UpdatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public updatePost(request: post_pb.UpdatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public deletePost(request: general_pb.IdParams, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public deletePost(request: general_pb.IdParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
    public deletePost(request: general_pb.IdParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: general_pb.IdParams) => void): grpc.ClientUnaryCall;
}
