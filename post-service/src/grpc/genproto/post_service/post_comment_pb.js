// source: post_comment.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var general_pb = require('./general_pb.js');
goog.object.extend(proto, general_pb);
goog.exportSymbol('proto.post_comment.CreatePostCommentRequest', null, global);
goog.exportSymbol('proto.post_comment.GetPostCommentsRequest', null, global);
goog.exportSymbol('proto.post_comment.GetPostCommentsResponse', null, global);
goog.exportSymbol('proto.post_comment.UpdatePostCommentRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.post_comment.CreatePostCommentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.post_comment.CreatePostCommentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.post_comment.CreatePostCommentRequest.displayName = 'proto.post_comment.CreatePostCommentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.post_comment.UpdatePostCommentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.post_comment.UpdatePostCommentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.post_comment.UpdatePostCommentRequest.displayName = 'proto.post_comment.UpdatePostCommentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.post_comment.GetPostCommentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.post_comment.GetPostCommentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.post_comment.GetPostCommentsRequest.displayName = 'proto.post_comment.GetPostCommentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.post_comment.GetPostCommentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.post_comment.GetPostCommentsResponse.repeatedFields_, null);
};
goog.inherits(proto.post_comment.GetPostCommentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.post_comment.GetPostCommentsResponse.displayName = 'proto.post_comment.GetPostCommentsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.post_comment.CreatePostCommentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.post_comment.CreatePostCommentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.post_comment.CreatePostCommentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.CreatePostCommentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    postId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    comment: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.post_comment.CreatePostCommentRequest}
 */
proto.post_comment.CreatePostCommentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.post_comment.CreatePostCommentRequest;
  return proto.post_comment.CreatePostCommentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.post_comment.CreatePostCommentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.post_comment.CreatePostCommentRequest}
 */
proto.post_comment.CreatePostCommentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPostId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.post_comment.CreatePostCommentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.post_comment.CreatePostCommentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.post_comment.CreatePostCommentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.CreatePostCommentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 post_id = 1;
 * @return {number}
 */
proto.post_comment.CreatePostCommentRequest.prototype.getPostId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.CreatePostCommentRequest} returns this
 */
proto.post_comment.CreatePostCommentRequest.prototype.setPostId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.post_comment.CreatePostCommentRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.CreatePostCommentRequest} returns this
 */
proto.post_comment.CreatePostCommentRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.post_comment.CreatePostCommentRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.post_comment.CreatePostCommentRequest} returns this
 */
proto.post_comment.CreatePostCommentRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.post_comment.UpdatePostCommentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.post_comment.UpdatePostCommentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.post_comment.UpdatePostCommentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.UpdatePostCommentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    comment: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.post_comment.UpdatePostCommentRequest}
 */
proto.post_comment.UpdatePostCommentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.post_comment.UpdatePostCommentRequest;
  return proto.post_comment.UpdatePostCommentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.post_comment.UpdatePostCommentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.post_comment.UpdatePostCommentRequest}
 */
proto.post_comment.UpdatePostCommentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.post_comment.UpdatePostCommentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.post_comment.UpdatePostCommentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.post_comment.UpdatePostCommentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.UpdatePostCommentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.post_comment.UpdatePostCommentRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.UpdatePostCommentRequest} returns this
 */
proto.post_comment.UpdatePostCommentRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.post_comment.UpdatePostCommentRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.post_comment.UpdatePostCommentRequest} returns this
 */
proto.post_comment.UpdatePostCommentRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.post_comment.GetPostCommentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.post_comment.GetPostCommentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.post_comment.GetPostCommentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.GetPostCommentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    postId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.post_comment.GetPostCommentsRequest}
 */
proto.post_comment.GetPostCommentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.post_comment.GetPostCommentsRequest;
  return proto.post_comment.GetPostCommentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.post_comment.GetPostCommentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.post_comment.GetPostCommentsRequest}
 */
proto.post_comment.GetPostCommentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPostId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.post_comment.GetPostCommentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.post_comment.GetPostCommentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.post_comment.GetPostCommentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.GetPostCommentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPostId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 page = 1;
 * @return {number}
 */
proto.post_comment.GetPostCommentsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.GetPostCommentsRequest} returns this
 */
proto.post_comment.GetPostCommentsRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 limit = 2;
 * @return {number}
 */
proto.post_comment.GetPostCommentsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.GetPostCommentsRequest} returns this
 */
proto.post_comment.GetPostCommentsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 post_id = 3;
 * @return {number}
 */
proto.post_comment.GetPostCommentsRequest.prototype.getPostId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.GetPostCommentsRequest} returns this
 */
proto.post_comment.GetPostCommentsRequest.prototype.setPostId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.post_comment.GetPostCommentsResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.post_comment.GetPostCommentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.post_comment.GetPostCommentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.post_comment.GetPostCommentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.GetPostCommentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalPages: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResults: jspb.Message.getFieldWithDefault(msg, 3, 0),
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    general_pb.PostCommentEntityPB.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.post_comment.GetPostCommentsResponse}
 */
proto.post_comment.GetPostCommentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.post_comment.GetPostCommentsResponse;
  return proto.post_comment.GetPostCommentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.post_comment.GetPostCommentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.post_comment.GetPostCommentsResponse}
 */
proto.post_comment.GetPostCommentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalPages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalResults(value);
      break;
    case 4:
      var value = new general_pb.PostCommentEntityPB;
      reader.readMessage(value,general_pb.PostCommentEntityPB.deserializeBinaryFromReader);
      msg.addComments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.post_comment.GetPostCommentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.post_comment.GetPostCommentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.post_comment.GetPostCommentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post_comment.GetPostCommentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalPages();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalResults();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      general_pb.PostCommentEntityPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 page = 1;
 * @return {number}
 */
proto.post_comment.GetPostCommentsResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.GetPostCommentsResponse} returns this
 */
proto.post_comment.GetPostCommentsResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 total_pages = 2;
 * @return {number}
 */
proto.post_comment.GetPostCommentsResponse.prototype.getTotalPages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.GetPostCommentsResponse} returns this
 */
proto.post_comment.GetPostCommentsResponse.prototype.setTotalPages = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 total_results = 3;
 * @return {number}
 */
proto.post_comment.GetPostCommentsResponse.prototype.getTotalResults = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.post_comment.GetPostCommentsResponse} returns this
 */
proto.post_comment.GetPostCommentsResponse.prototype.setTotalResults = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated general.PostCommentEntityPB comments = 4;
 * @return {!Array<!proto.general.PostCommentEntityPB>}
 */
proto.post_comment.GetPostCommentsResponse.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.general.PostCommentEntityPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, general_pb.PostCommentEntityPB, 4));
};


/**
 * @param {!Array<!proto.general.PostCommentEntityPB>} value
 * @return {!proto.post_comment.GetPostCommentsResponse} returns this
*/
proto.post_comment.GetPostCommentsResponse.prototype.setCommentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.general.PostCommentEntityPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.general.PostCommentEntityPB}
 */
proto.post_comment.GetPostCommentsResponse.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.general.PostCommentEntityPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.post_comment.GetPostCommentsResponse} returns this
 */
proto.post_comment.GetPostCommentsResponse.prototype.clearCommentsList = function() {
  return this.setCommentsList([]);
};


goog.object.extend(exports, proto.post_comment);
