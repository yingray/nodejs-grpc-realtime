var PROTO_PATH = __dirname + "/../protos/chatroom.proto";
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
const db = mongoose.connection;
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
var chatroom_proto = grpc.loadPackageDefinition(packageDefinition).chatroom;

const MessageSchema = new Schema({
  email: String,
  text: String,
  time: String
});
const MessageCol = mongoose.model("Message", MessageSchema);
class Message {
  constructor(email, text, time) {
    return {
      email,
      text,
      time
    };
  }
}

const users = [];

const dbMessages = [new Message("yingray_lu@htc.com", "Hello Yingray", new Date().getTime())];

/**
 * Implements the GetChats RPC method.
 */
function GetChats(call, callback) {
  MessageCol.find((err, doc) => {
    if (err) return console.error(err);
    callback(null, { messages: doc });
  });
}

MessageCol.watch().on("change", change => {
  notifyChat(change);
});

function ListenChats(call, callback) {
  users.push(call);
}

const notifyChat = message => {
  console.log("users: ", users.length);
  users.forEach(user => {
    user.write(message);
  });
};

const InsertChat = (call, callback) => {
  const {
    message: { email, text }
  } = call.request;
  const time = new Date().getTime();
  const newMessage = new MessageCol({
    email,
    text,
    time
  });
  newMessage.save(err => {
    callback();
  });
};

/**
 * Starts an RPC server that receives requests for the ChatRoom service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(chatroom_proto.ChatRoom.service, { GetChats, ListenChats, InsertChat });
  server.bind("0.0.0.0:9090", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
