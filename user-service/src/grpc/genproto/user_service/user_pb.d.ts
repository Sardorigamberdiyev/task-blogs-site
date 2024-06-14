// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as general_pb from "./general_pb";

export class GetUsersRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetUsersRequest;
    getLimit(): number;
    setLimit(value: number): GetUsersRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
    static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
    export type AsObject = {
        page: number,
        limit: number,
        search?: string,
    }
}

export class GetUsersResponse extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetUsersResponse;
    getTotalPages(): number;
    setTotalPages(value: number): GetUsersResponse;
    getTotalResults(): number;
    setTotalResults(value: number): GetUsersResponse;
    clearUsersList(): void;
    getUsersList(): Array<general_pb.UserEntityPB>;
    setUsersList(value: Array<general_pb.UserEntityPB>): GetUsersResponse;
    addUsers(value?: general_pb.UserEntityPB, index?: number): general_pb.UserEntityPB;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersResponse): GetUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersResponse;
    static deserializeBinaryFromReader(message: GetUsersResponse, reader: jspb.BinaryReader): GetUsersResponse;
}

export namespace GetUsersResponse {
    export type AsObject = {
        page: number,
        totalPages: number,
        totalResults: number,
        usersList: Array<general_pb.UserEntityPB.AsObject>,
    }
}

export class GetUserByIdRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): GetUserByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByIdRequest): GetUserByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIdRequest;
    static deserializeBinaryFromReader(message: GetUserByIdRequest, reader: jspb.BinaryReader): GetUserByIdRequest;
}

export namespace GetUserByIdRequest {
    export type AsObject = {
        userId: number,
    }
}

export class GetUserByIdResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GetUserByIdResponse;
    getUsername(): string;
    setUsername(value: string): GetUserByIdResponse;
    getRole(): string;
    setRole(value: string): GetUserByIdResponse;
    getFullName(): string;
    setFullName(value: string): GetUserByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByIdResponse): GetUserByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIdResponse;
    static deserializeBinaryFromReader(message: GetUserByIdResponse, reader: jspb.BinaryReader): GetUserByIdResponse;
}

export namespace GetUserByIdResponse {
    export type AsObject = {
        id: number,
        username: string,
        role: string,
        fullName: string,
    }
}
