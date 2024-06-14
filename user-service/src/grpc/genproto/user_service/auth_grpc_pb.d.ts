// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";
import * as general_pb from "./general_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signIn: IAuthService_ISignIn;
    signUp: IAuthService_ISignUp;
}

interface IAuthService_ISignIn extends grpc.MethodDefinition<auth_pb.SignInRequest, auth_pb.AuthResponse> {
    path: "/auth.Auth/SignIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.SignInRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.SignInRequest>;
    responseSerialize: grpc.serialize<auth_pb.AuthResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResponse>;
}
interface IAuthService_ISignUp extends grpc.MethodDefinition<auth_pb.SignUpRequest, auth_pb.AuthResponse> {
    path: "/auth.Auth/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<auth_pb.AuthResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer extends grpc.UntypedServiceImplementation {
    signIn: grpc.handleUnaryCall<auth_pb.SignInRequest, auth_pb.AuthResponse>;
    signUp: grpc.handleUnaryCall<auth_pb.SignUpRequest, auth_pb.AuthResponse>;
}

export interface IAuthClient {
    signIn(request: auth_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    signIn(request: auth_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    signIn(request: auth_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    signUp(request: auth_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    signUp(request: auth_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    signUp(request: auth_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public signIn(request: auth_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: auth_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: auth_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: auth_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: auth_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: auth_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
}
