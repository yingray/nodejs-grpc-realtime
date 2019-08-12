/**
 * @fileoverview gRPC-Web generated client stub for chatroom
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */ 



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chatroom = require('./chatroom_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chatroom.ChatRoomClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chatroom.ChatRoomPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatroom.GetChatsRequest,
 *   !proto.chatroom.GetChatsResponse>}
 */
const methodDescriptor_ChatRoom_GetChats = new grpc.web.MethodDescriptor(
  '/chatroom.ChatRoom/GetChats',
  grpc.web.MethodType.UNARY,
  proto.chatroom.GetChatsRequest,
  proto.chatroom.GetChatsResponse,
  /** @param {!proto.chatroom.GetChatsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatroom.GetChatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chatroom.GetChatsRequest,
 *   !proto.chatroom.GetChatsResponse>}
 */
const methodInfo_ChatRoom_GetChats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chatroom.GetChatsResponse,
  /** @param {!proto.chatroom.GetChatsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatroom.GetChatsResponse.deserializeBinary
);


/**
 * @param {!proto.chatroom.GetChatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chatroom.GetChatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatroom.GetChatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatroom.ChatRoomClient.prototype.getChats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatroom.ChatRoom/GetChats',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_GetChats,
      callback);
};


/**
 * @param {!proto.chatroom.GetChatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatroom.GetChatsResponse>}
 *     A native promise that resolves to the response
 */
proto.chatroom.ChatRoomPromiseClient.prototype.getChats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatroom.ChatRoom/GetChats',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_GetChats);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatroom.InsertChatRequest,
 *   !proto.chatroom.InsertChatResponse>}
 */
const methodDescriptor_ChatRoom_InsertChat = new grpc.web.MethodDescriptor(
  '/chatroom.ChatRoom/InsertChat',
  grpc.web.MethodType.UNARY,
  proto.chatroom.InsertChatRequest,
  proto.chatroom.InsertChatResponse,
  /** @param {!proto.chatroom.InsertChatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatroom.InsertChatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chatroom.InsertChatRequest,
 *   !proto.chatroom.InsertChatResponse>}
 */
const methodInfo_ChatRoom_InsertChat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chatroom.InsertChatResponse,
  /** @param {!proto.chatroom.InsertChatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatroom.InsertChatResponse.deserializeBinary
);


/**
 * @param {!proto.chatroom.InsertChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chatroom.InsertChatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatroom.InsertChatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatroom.ChatRoomClient.prototype.insertChat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatroom.ChatRoom/InsertChat',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_InsertChat,
      callback);
};


/**
 * @param {!proto.chatroom.InsertChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatroom.InsertChatResponse>}
 *     A native promise that resolves to the response
 */
proto.chatroom.ChatRoomPromiseClient.prototype.insertChat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatroom.ChatRoom/InsertChat',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_InsertChat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatroom.ListenChatsRequest,
 *   !proto.chatroom.Message>}
 */
const methodDescriptor_ChatRoom_ListenChats = new grpc.web.MethodDescriptor(
  '/chatroom.ChatRoom/ListenChats',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chatroom.ListenChatsRequest,
  proto.chatroom.Message,
  /** @param {!proto.chatroom.ListenChatsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatroom.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chatroom.ListenChatsRequest,
 *   !proto.chatroom.Message>}
 */
const methodInfo_ChatRoom_ListenChats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chatroom.Message,
  /** @param {!proto.chatroom.ListenChatsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatroom.Message.deserializeBinary
);


/**
 * @param {!proto.chatroom.ListenChatsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chatroom.Message>}
 *     The XHR Node Readable Stream
 */
proto.chatroom.ChatRoomClient.prototype.listenChats =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chatroom.ChatRoom/ListenChats',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_ListenChats);
};


/**
 * @param {!proto.chatroom.ListenChatsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chatroom.Message>}
 *     The XHR Node Readable Stream
 */
proto.chatroom.ChatRoomPromiseClient.prototype.listenChats =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chatroom.ChatRoom/ListenChats',
      request,
      metadata || {},
      methodDescriptor_ChatRoom_ListenChats);
};


module.exports = proto.chatroom;

