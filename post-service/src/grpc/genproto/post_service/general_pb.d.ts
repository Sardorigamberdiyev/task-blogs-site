// package: general
// file: general.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Author extends jspb.Message { 
    getId(): number;
    setId(value: number): Author;
    getFullName(): string;
    setFullName(value: string): Author;
    getUsername(): string;
    setUsername(value: string): Author;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Author.AsObject;
    static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Author;
    static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
}

export namespace Author {
    export type AsObject = {
        id: number,
        fullName: string,
        username: string,
    }
}

export class PostEntityPB extends jspb.Message { 
    getId(): number;
    setId(value: number): PostEntityPB;
    getTitle(): string;
    setTitle(value: string): PostEntityPB;
    getDescription(): string;
    setDescription(value: string): PostEntityPB;
    getImageUrl(): string;
    setImageUrl(value: string): PostEntityPB;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): Author | undefined;
    setAuthor(value?: Author): PostEntityPB;
    getCreatedAt(): string;
    setCreatedAt(value: string): PostEntityPB;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostEntityPB.AsObject;
    static toObject(includeInstance: boolean, msg: PostEntityPB): PostEntityPB.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostEntityPB, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostEntityPB;
    static deserializeBinaryFromReader(message: PostEntityPB, reader: jspb.BinaryReader): PostEntityPB;
}

export namespace PostEntityPB {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        imageUrl: string,
        author?: Author.AsObject,
        createdAt: string,
    }
}

export class PostCommentEntityPB extends jspb.Message { 
    getId(): number;
    setId(value: number): PostCommentEntityPB;
    getComment(): string;
    setComment(value: string): PostCommentEntityPB;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): Author | undefined;
    setAuthor(value?: Author): PostCommentEntityPB;
    getCreatedAt(): string;
    setCreatedAt(value: string): PostCommentEntityPB;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCommentEntityPB.AsObject;
    static toObject(includeInstance: boolean, msg: PostCommentEntityPB): PostCommentEntityPB.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCommentEntityPB, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCommentEntityPB;
    static deserializeBinaryFromReader(message: PostCommentEntityPB, reader: jspb.BinaryReader): PostCommentEntityPB;
}

export namespace PostCommentEntityPB {
    export type AsObject = {
        id: number,
        comment: string,
        author?: Author.AsObject,
        createdAt: string,
    }
}

export class IdParams extends jspb.Message { 
    getId(): number;
    setId(value: number): IdParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdParams.AsObject;
    static toObject(includeInstance: boolean, msg: IdParams): IdParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdParams;
    static deserializeBinaryFromReader(message: IdParams, reader: jspb.BinaryReader): IdParams;
}

export namespace IdParams {
    export type AsObject = {
        id: number,
    }
}
