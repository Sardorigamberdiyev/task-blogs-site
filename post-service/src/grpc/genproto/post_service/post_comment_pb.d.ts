// package: post_comment
// file: post_comment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as general_pb from "./general_pb";

export class CreatePostCommentRequest extends jspb.Message { 
    getPostId(): number;
    setPostId(value: number): CreatePostCommentRequest;
    getUserId(): number;
    setUserId(value: number): CreatePostCommentRequest;
    getComment(): string;
    setComment(value: string): CreatePostCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePostCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePostCommentRequest): CreatePostCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePostCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePostCommentRequest;
    static deserializeBinaryFromReader(message: CreatePostCommentRequest, reader: jspb.BinaryReader): CreatePostCommentRequest;
}

export namespace CreatePostCommentRequest {
    export type AsObject = {
        postId: number,
        userId: number,
        comment: string,
    }
}

export class UpdatePostCommentRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdatePostCommentRequest;
    getComment(): string;
    setComment(value: string): UpdatePostCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePostCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePostCommentRequest): UpdatePostCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePostCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePostCommentRequest;
    static deserializeBinaryFromReader(message: UpdatePostCommentRequest, reader: jspb.BinaryReader): UpdatePostCommentRequest;
}

export namespace UpdatePostCommentRequest {
    export type AsObject = {
        id: number,
        comment: string,
    }
}

export class GetPostCommentsRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetPostCommentsRequest;
    getLimit(): number;
    setLimit(value: number): GetPostCommentsRequest;
    getPostId(): number;
    setPostId(value: number): GetPostCommentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostCommentsRequest): GetPostCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostCommentsRequest;
    static deserializeBinaryFromReader(message: GetPostCommentsRequest, reader: jspb.BinaryReader): GetPostCommentsRequest;
}

export namespace GetPostCommentsRequest {
    export type AsObject = {
        page: number,
        limit: number,
        postId: number,
    }
}

export class GetPostCommentsResponse extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetPostCommentsResponse;
    getTotalPages(): number;
    setTotalPages(value: number): GetPostCommentsResponse;
    getTotalResults(): number;
    setTotalResults(value: number): GetPostCommentsResponse;
    clearCommentsList(): void;
    getCommentsList(): Array<general_pb.PostCommentEntityPB>;
    setCommentsList(value: Array<general_pb.PostCommentEntityPB>): GetPostCommentsResponse;
    addComments(value?: general_pb.PostCommentEntityPB, index?: number): general_pb.PostCommentEntityPB;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostCommentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostCommentsResponse): GetPostCommentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostCommentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostCommentsResponse;
    static deserializeBinaryFromReader(message: GetPostCommentsResponse, reader: jspb.BinaryReader): GetPostCommentsResponse;
}

export namespace GetPostCommentsResponse {
    export type AsObject = {
        page: number,
        totalPages: number,
        totalResults: number,
        commentsList: Array<general_pb.PostCommentEntityPB.AsObject>,
    }
}
