// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var general_pb = require('./general_pb.js');

function serialize_user_GetUserByIdRequest(arg) {
  if (!(arg instanceof user_pb.GetUserByIdRequest)) {
    throw new Error('Expected argument of type user.GetUserByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserByIdRequest(buffer_arg) {
  return user_pb.GetUserByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserByIdResponse(arg) {
  if (!(arg instanceof user_pb.GetUserByIdResponse)) {
    throw new Error('Expected argument of type user.GetUserByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserByIdResponse(buffer_arg) {
  return user_pb.GetUserByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUsersRequest(arg) {
  if (!(arg instanceof user_pb.GetUsersRequest)) {
    throw new Error('Expected argument of type user.GetUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUsersRequest(buffer_arg) {
  return user_pb.GetUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUsersResponse(arg) {
  if (!(arg instanceof user_pb.GetUsersResponse)) {
    throw new Error('Expected argument of type user.GetUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUsersResponse(buffer_arg) {
  return user_pb.GetUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  getUserById: {
    path: '/user.User/GetUserById',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserByIdRequest,
    responseType: user_pb.GetUserByIdResponse,
    requestSerialize: serialize_user_GetUserByIdRequest,
    requestDeserialize: deserialize_user_GetUserByIdRequest,
    responseSerialize: serialize_user_GetUserByIdResponse,
    responseDeserialize: deserialize_user_GetUserByIdResponse,
  },
  getUsers: {
    path: '/user.User/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUsersRequest,
    responseType: user_pb.GetUsersResponse,
    requestSerialize: serialize_user_GetUsersRequest,
    requestDeserialize: deserialize_user_GetUsersRequest,
    responseSerialize: serialize_user_GetUsersResponse,
    responseDeserialize: deserialize_user_GetUsersResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
