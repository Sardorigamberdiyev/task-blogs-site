// source: user.proto
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
goog.exportSymbol('proto.user.GetUserByIdRequest', null, global);
goog.exportSymbol('proto.user.GetUserByIdResponse', null, global);
goog.exportSymbol('proto.user.GetUsersRequest', null, global);
goog.exportSymbol('proto.user.GetUsersResponse', null, global);
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
proto.user.GetUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.GetUsersRequest.displayName = 'proto.user.GetUsersRequest';
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
proto.user.GetUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.GetUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.user.GetUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.GetUsersResponse.displayName = 'proto.user.GetUsersResponse';
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
proto.user.GetUserByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUserByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.GetUserByIdRequest.displayName = 'proto.user.GetUserByIdRequest';
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
proto.user.GetUserByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUserByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.GetUserByIdResponse.displayName = 'proto.user.GetUserByIdResponse';
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
proto.user.GetUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.user.GetUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.GetUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    search: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.user.GetUsersRequest}
 */
proto.user.GetUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.GetUsersRequest;
  return proto.user.GetUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.GetUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.GetUsersRequest}
 */
proto.user.GetUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setSearch(value);
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
proto.user.GetUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.GetUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.GetUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUsersRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 page = 1;
 * @return {number}
 */
proto.user.GetUsersRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.GetUsersRequest} returns this
 */
proto.user.GetUsersRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 limit = 2;
 * @return {number}
 */
proto.user.GetUsersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.GetUsersRequest} returns this
 */
proto.user.GetUsersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string search = 3;
 * @return {string}
 */
proto.user.GetUsersRequest.prototype.getSearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.GetUsersRequest} returns this
 */
proto.user.GetUsersRequest.prototype.setSearch = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.user.GetUsersRequest} returns this
 */
proto.user.GetUsersRequest.prototype.clearSearch = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.GetUsersRequest.prototype.hasSearch = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.GetUsersResponse.repeatedFields_ = [4];



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
proto.user.GetUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.user.GetUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.GetUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalPages: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResults: jspb.Message.getFieldWithDefault(msg, 3, 0),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    general_pb.UserEntityPB.toObject, includeInstance)
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
 * @return {!proto.user.GetUsersResponse}
 */
proto.user.GetUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.GetUsersResponse;
  return proto.user.GetUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.GetUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.GetUsersResponse}
 */
proto.user.GetUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new general_pb.UserEntityPB;
      reader.readMessage(value,general_pb.UserEntityPB.deserializeBinaryFromReader);
      msg.addUsers(value);
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
proto.user.GetUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.GetUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.GetUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUsersResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      general_pb.UserEntityPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 page = 1;
 * @return {number}
 */
proto.user.GetUsersResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.GetUsersResponse} returns this
 */
proto.user.GetUsersResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 total_pages = 2;
 * @return {number}
 */
proto.user.GetUsersResponse.prototype.getTotalPages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.GetUsersResponse} returns this
 */
proto.user.GetUsersResponse.prototype.setTotalPages = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 total_results = 3;
 * @return {number}
 */
proto.user.GetUsersResponse.prototype.getTotalResults = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.GetUsersResponse} returns this
 */
proto.user.GetUsersResponse.prototype.setTotalResults = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated general.UserEntityPB users = 4;
 * @return {!Array<!proto.general.UserEntityPB>}
 */
proto.user.GetUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.general.UserEntityPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, general_pb.UserEntityPB, 4));
};


/**
 * @param {!Array<!proto.general.UserEntityPB>} value
 * @return {!proto.user.GetUsersResponse} returns this
*/
proto.user.GetUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.general.UserEntityPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.general.UserEntityPB}
 */
proto.user.GetUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.general.UserEntityPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.GetUsersResponse} returns this
 */
proto.user.GetUsersResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
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
proto.user.GetUserByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.user.GetUserByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.GetUserByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUserByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.user.GetUserByIdRequest}
 */
proto.user.GetUserByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.GetUserByIdRequest;
  return proto.user.GetUserByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.GetUserByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.GetUserByIdRequest}
 */
proto.user.GetUserByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
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
proto.user.GetUserByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.GetUserByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.GetUserByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUserByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.user.GetUserByIdRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.GetUserByIdRequest} returns this
 */
proto.user.GetUserByIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.user.GetUserByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.user.GetUserByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.GetUserByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUserByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    role: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fullName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.user.GetUserByIdResponse}
 */
proto.user.GetUserByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.GetUserByIdResponse;
  return proto.user.GetUserByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.GetUserByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.GetUserByIdResponse}
 */
proto.user.GetUserByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullName(value);
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
proto.user.GetUserByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.GetUserByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.GetUserByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.GetUserByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFullName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.user.GetUserByIdResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.GetUserByIdResponse} returns this
 */
proto.user.GetUserByIdResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.user.GetUserByIdResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.GetUserByIdResponse} returns this
 */
proto.user.GetUserByIdResponse.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string role = 3;
 * @return {string}
 */
proto.user.GetUserByIdResponse.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.GetUserByIdResponse} returns this
 */
proto.user.GetUserByIdResponse.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string full_name = 4;
 * @return {string}
 */
proto.user.GetUserByIdResponse.prototype.getFullName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.GetUserByIdResponse} returns this
 */
proto.user.GetUserByIdResponse.prototype.setFullName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.user);
