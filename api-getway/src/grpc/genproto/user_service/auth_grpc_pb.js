// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var general_pb = require('./general_pb.js');

function serialize_auth_AuthResponse(arg) {
  if (!(arg instanceof auth_pb.AuthResponse)) {
    throw new Error('Expected argument of type auth.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_AuthResponse(buffer_arg) {
  return auth_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SignInRequest(arg) {
  if (!(arg instanceof auth_pb.SignInRequest)) {
    throw new Error('Expected argument of type auth.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignInRequest(buffer_arg) {
  return auth_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SignUpRequest(arg) {
  if (!(arg instanceof auth_pb.SignUpRequest)) {
    throw new Error('Expected argument of type auth.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignUpRequest(buffer_arg) {
  return auth_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  signIn: {
    path: '/auth.Auth/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignInRequest,
    responseType: auth_pb.AuthResponse,
    requestSerialize: serialize_auth_SignInRequest,
    requestDeserialize: deserialize_auth_SignInRequest,
    responseSerialize: serialize_auth_AuthResponse,
    responseDeserialize: deserialize_auth_AuthResponse,
  },
  signUp: {
    path: '/auth.Auth/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignUpRequest,
    responseType: auth_pb.AuthResponse,
    requestSerialize: serialize_auth_SignUpRequest,
    requestDeserialize: deserialize_auth_SignUpRequest,
    responseSerialize: serialize_auth_AuthResponse,
    responseDeserialize: deserialize_auth_AuthResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
