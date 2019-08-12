import React, { useState } from "react";
import { ListenChatsRequest, Message, InsertChatRequest } from "./protos/chatroom_pb";
import { ChatRoomClient } from "./protos/chatroom_grpc_web_pb";

const Chatbox = () => {
  const [form, setForm] = useState({
    email: "yingray_lu@htc.com",
    text: "Hello"
  });

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const client = new ChatRoomClient("http://localhost:8080");
    const req = new InsertChatRequest();
    const message = new Message();
    message.setEmail(form.email);
    message.setText(form.text);
    req.setMessage(message);
    client.insertChat(req, {}, e => {
      if (e) {
        alert(e);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={form.email} />
      <label htmlFor="text">Message</label>
      <input type="text" name="text" value={form.text} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Chatbox;
