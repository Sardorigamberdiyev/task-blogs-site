// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var post_comment_pb = require('./post_comment_pb.js');
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

function serialize_general_PostCommentEntityPB(arg) {
  if (!(arg instanceof general_pb.PostCommentEntityPB)) {
    throw new Error('Expected argument of type general.PostCommentEntityPB');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_PostCommentEntityPB(buffer_arg) {
  return general_pb.PostCommentEntityPB.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_comment_CreatePostCommentRequest(arg) {
  if (!(arg instanceof post_comment_pb.CreatePostCommentRequest)) {
    throw new Error('Expected argument of type post_comment.CreatePostCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_comment_CreatePostCommentRequest(buffer_arg) {
  return post_comment_pb.CreatePostCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_comment_GetPostCommentsRequest(arg) {
  if (!(arg instanceof post_comment_pb.GetPostCommentsRequest)) {
    throw new Error('Expected argument of type post_comment.GetPostCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_comment_GetPostCommentsRequest(buffer_arg) {
  return post_comment_pb.GetPostCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_comment_GetPostCommentsResponse(arg) {
  if (!(arg instanceof post_comment_pb.GetPostCommentsResponse)) {
    throw new Error('Expected argument of type post_comment.GetPostCommentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_comment_GetPostCommentsResponse(buffer_arg) {
  return post_comment_pb.GetPostCommentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_comment_UpdatePostCommentRequest(arg) {
  if (!(arg instanceof post_comment_pb.UpdatePostCommentRequest)) {
    throw new Error('Expected argument of type post_comment.UpdatePostCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_comment_UpdatePostCommentRequest(buffer_arg) {
  return post_comment_pb.UpdatePostCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostCommentService = exports.PostCommentService = {
  getPostComments: {
    path: '/post_comment.PostComment/GetPostComments',
    requestStream: false,
    responseStream: false,
    requestType: post_comment_pb.GetPostCommentsRequest,
    responseType: post_comment_pb.GetPostCommentsResponse,
    requestSerialize: serialize_post_comment_GetPostCommentsRequest,
    requestDeserialize: deserialize_post_comment_GetPostCommentsRequest,
    responseSerialize: serialize_post_comment_GetPostCommentsResponse,
    responseDeserialize: deserialize_post_comment_GetPostCommentsResponse,
  },
  getPostCommentById: {
    path: '/post_comment.PostComment/GetPostCommentById',
    requestStream: false,
    responseStream: false,
    requestType: general_pb.IdParams,
    responseType: general_pb.PostCommentEntityPB,
    requestSerialize: serialize_general_IdParams,
    requestDeserialize: deserialize_general_IdParams,
    responseSerialize: serialize_general_PostCommentEntityPB,
    responseDeserialize: deserialize_general_PostCommentEntityPB,
  },
  createPostComment: {
    path: '/post_comment.PostComment/CreatePostComment',
    requestStream: false,
    responseStream: false,
    requestType: post_comment_pb.CreatePostCommentRequest,
    responseType: general_pb.IdParams,
    requestSerialize: serialize_post_comment_CreatePostCommentRequest,
    requestDeserialize: deserialize_post_comment_CreatePostCommentRequest,
    responseSerialize: serialize_general_IdParams,
    responseDeserialize: deserialize_general_IdParams,
  },
  updatePostComment: {
    path: '/post_comment.PostComment/UpdatePostComment',
    requestStream: false,
    responseStream: false,
    requestType: post_comment_pb.UpdatePostCommentRequest,
    responseType: general_pb.IdParams,
    requestSerialize: serialize_post_comment_UpdatePostCommentRequest,
    requestDeserialize: deserialize_post_comment_UpdatePostCommentRequest,
    responseSerialize: serialize_general_IdParams,
    responseDeserialize: deserialize_general_IdParams,
  },
  deletePostComment: {
    path: '/post_comment.PostComment/DeletePostComment',
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

exports.PostCommentClient = grpc.makeGenericClientConstructor(PostCommentService);
