// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as general_pb from "./general_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserById: IUserService_IGetUserById;
    getUsers: IUserService_IGetUsers;
}

interface IUserService_IGetUserById extends grpc.MethodDefinition<user_pb.GetUserByIdRequest, user_pb.GetUserByIdResponse> {
    path: "/user.User/GetUserById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserByIdRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserByIdRequest>;
    responseSerialize: grpc.serialize<user_pb.GetUserByIdResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUserByIdResponse>;
}
interface IUserService_IGetUsers extends grpc.MethodDefinition<user_pb.GetUsersRequest, user_pb.GetUsersResponse> {
    path: "/user.User/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUsersRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUsersRequest>;
    responseSerialize: grpc.serialize<user_pb.GetUsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUsersResponse>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
    getUserById: grpc.handleUnaryCall<user_pb.GetUserByIdRequest, user_pb.GetUserByIdResponse>;
    getUsers: grpc.handleUnaryCall<user_pb.GetUsersRequest, user_pb.GetUsersResponse>;
}

export interface IUserClient {
    getUserById(request: user_pb.GetUserByIdRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByIdResponse) => void): grpc.ClientUnaryCall;
    getUserById(request: user_pb.GetUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByIdResponse) => void): grpc.ClientUnaryCall;
    getUserById(request: user_pb.GetUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByIdResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: user_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: user_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: user_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUserById(request: user_pb.GetUserByIdRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByIdResponse) => void): grpc.ClientUnaryCall;
    public getUserById(request: user_pb.GetUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByIdResponse) => void): grpc.ClientUnaryCall;
    public getUserById(request: user_pb.GetUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByIdResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
}
