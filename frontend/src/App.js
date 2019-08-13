import React, { useEffect, useState } from "react";
import shortid from "shortid";
import logo from "./logo.svg";
import "./App.css";
import Chatbox from "./Chatbox";
import { ListenChatsRequest, GetChatsRequest, Message } from "./protos/chatroom_pb";
import { ChatRoomClient } from "./protos/chatroom_grpc_web_pb";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const client = new ChatRoomClient("http://localhost:8080");
    client.getChats(new GetChatsRequest(), {}, (err, res) => {
      if (err) {
        return console.log(err);
      } else if (res && res.toObject) {
        return setMessages(res.toObject().messagesList);
      }
    });
    const req = new ListenChatsRequest();
    const stream = client.listenChats(req);
    stream.on("data", response => {
      const data = response.toObject();
      console.log(data);
      console.log(messages);
      return setMessages(m => [...m, data]);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Chatbox />
        <table>
          <tr>
            <td>Email</td>
            <td>Text</td>
            <td>Time</td>
          </tr>
          {messages.map(msg => (
            <tbody key={shortid.generate()}>
              <tr>
                <td>{msg.email}</td>
                <td>{msg.text}</td>
                <td>{msg.time}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;
