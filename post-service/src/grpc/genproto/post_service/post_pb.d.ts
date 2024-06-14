// package: post
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as general_pb from "./general_pb";

export class CreatePostRequest extends jspb.Message { 
    getAuthorId(): number;
    setAuthorId(value: number): CreatePostRequest;
    getTitle(): string;
    setTitle(value: string): CreatePostRequest;
    getDescription(): string;
    setDescription(value: string): CreatePostRequest;
    getImageUrl(): string;
    setImageUrl(value: string): CreatePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
    static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
    export type AsObject = {
        authorId: number,
        title: string,
        description: string,
        imageUrl: string,
    }
}

export class UpdatePostRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdatePostRequest;
    getTitle(): string;
    setTitle(value: string): UpdatePostRequest;
    getDescription(): string;
    setDescription(value: string): UpdatePostRequest;
    getImageUrl(): string;
    setImageUrl(value: string): UpdatePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePostRequest): UpdatePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePostRequest;
    static deserializeBinaryFromReader(message: UpdatePostRequest, reader: jspb.BinaryReader): UpdatePostRequest;
}

export namespace UpdatePostRequest {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        imageUrl: string,
    }
}

export class GetPostsRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetPostsRequest;
    getLimit(): number;
    setLimit(value: number): GetPostsRequest;

    hasAuthorId(): boolean;
    clearAuthorId(): void;
    getAuthorId(): number | undefined;
    setAuthorId(value: number): GetPostsRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetPostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostsRequest): GetPostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostsRequest;
    static deserializeBinaryFromReader(message: GetPostsRequest, reader: jspb.BinaryReader): GetPostsRequest;
}

export namespace GetPostsRequest {
    export type AsObject = {
        page: number,
        limit: number,
        authorId?: number,
        search?: string,
    }
}

export class GetPostsResponse extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetPostsResponse;
    getTotalPages(): number;
    setTotalPages(value: number): GetPostsResponse;
    getTotalResults(): number;
    setTotalResults(value: number): GetPostsResponse;
    clearPostsList(): void;
    getPostsList(): Array<general_pb.PostEntityPB>;
    setPostsList(value: Array<general_pb.PostEntityPB>): GetPostsResponse;
    addPosts(value?: general_pb.PostEntityPB, index?: number): general_pb.PostEntityPB;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostsResponse): GetPostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostsResponse;
    static deserializeBinaryFromReader(message: GetPostsResponse, reader: jspb.BinaryReader): GetPostsResponse;
}

export namespace GetPostsResponse {
    export type AsObject = {
        page: number,
        totalPages: number,
        totalResults: number,
        postsList: Array<general_pb.PostEntityPB.AsObject>,
    }
}
