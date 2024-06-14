// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var post_pb = require('./post_pb.js');
var general_pb = require('./general_pb.js');

function serialize_general_IdParams(arg) {
  if (!(arg instanceof general_pb.IdParams)) {
    throw new Error('Expected argument of type general.IdParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_IdParams(buffer_arg) {
  return general_pb.IdParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_PostEntityPB(arg) {
  if (!(arg instanceof general_pb.PostEntityPB)) {
    throw new Error('Expected argument of type general.PostEntityPB');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_PostEntityPB(buffer_arg) {
  return general_pb.PostEntityPB.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_CreatePostRequest(arg) {
  if (!(arg instanceof post_pb.CreatePostRequest)) {
    throw new Error('Expected argument of type post.CreatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_CreatePostRequest(buffer_arg) {
  return post_pb.CreatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_GetPostsRequest(arg) {
  if (!(arg instanceof post_pb.GetPostsRequest)) {
    throw new Error('Expected argument of type post.GetPostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_GetPostsRequest(buffer_arg) {
  return post_pb.GetPostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_GetPostsResponse(arg) {
  if (!(arg instanceof post_pb.GetPostsResponse)) {
    throw new Error('Expected argument of type post.GetPostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_GetPostsResponse(buffer_arg) {
  return post_pb.GetPostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_UpdatePostRequest(arg) {
  if (!(arg instanceof post_pb.UpdatePostRequest)) {
    throw new Error('Expected argument of type post.UpdatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_UpdatePostRequest(buffer_arg) {
  return post_pb.UpdatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostService = exports.PostService = {
  getPosts: {
    path: '/post.Post/GetPosts',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.GetPostsRequest,
    responseType: post_pb.GetPostsResponse,
    requestSerialize: serialize_post_GetPostsRequest,
    requestDeserialize: deserialize_post_GetPostsRequest,
    responseSerialize: serialize_post_GetPostsResponse,
    responseDeserialize: deserialize_post_GetPostsResponse,
  },
  getPostById: {
    path: '/post.Post/GetPostById',
    requestStream: false,
    responseStream: false,
    requestType: general_pb.IdParams,
    responseType: general_pb.PostEntityPB,
    requestSerialize: serialize_general_IdParams,
    requestDeserialize: deserialize_general_IdParams,
    responseSerialize: serialize_general_PostEntityPB,
    responseDeserialize: deserialize_general_PostEntityPB,
  },
  createPost: {
    path: '/post.Post/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.CreatePostRequest,
    responseType: general_pb.IdParams,
    requestSerialize: serialize_post_CreatePostRequest,
    requestDeserialize: deserialize_post_CreatePostRequest,
    responseSerialize: serialize_general_IdParams,
    responseDeserialize: deserialize_general_IdParams,
  },
  updatePost: {
    path: '/post.Post/UpdatePost',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.UpdatePostRequest,
    responseType: general_pb.IdParams,
    requestSerialize: serialize_post_UpdatePostRequest,
    requestDeserialize: deserialize_post_UpdatePostRequest,
    responseSerialize: serialize_general_IdParams,
    responseDeserialize: deserialize_general_IdParams,
  },
  deletePost: {
    path: '/post.Post/DeletePost',
    requestStream: false,
    responseStream: false,
    requestType: general_pb.IdParams,
    responseType: general_pb.IdParams,
    requestSerialize: serialize_general_IdParams,
    requestDeserialize: deserialize_general_IdParams,
    responseSerialize: serialize_general_IdParams,
    responseDeserialize: deserialize_general_IdParams,
  },
};

exports.PostClient = grpc.makeGenericClientConstructor(PostService);
