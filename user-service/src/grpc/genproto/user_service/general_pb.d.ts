// package: general
// file: general.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserEntityPB extends jspb.Message { 
    getId(): number;
    setId(value: number): UserEntityPB;
    getUsername(): string;
    setUsername(value: string): UserEntityPB;
    getRole(): string;
    setRole(value: string): UserEntityPB;
    getFullName(): string;
    setFullName(value: string): UserEntityPB;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserEntityPB.AsObject;
    static toObject(includeInstance: boolean, msg: UserEntityPB): UserEntityPB.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserEntityPB, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserEntityPB;
    static deserializeBinaryFromReader(message: UserEntityPB, reader: jspb.BinaryReader): UserEntityPB;
}

export namespace UserEntityPB {
    export type AsObject = {
        id: number,
        username: string,
        role: string,
        fullName: string,
    }
}

export enum UserRole {
    ADMIN = 0,
    AUTHOR = 1,
    GUEST = 2,
}
