import { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import "./Chat.css";
import InfoBar from "./InforBar/InfoBar";
import Input from "./Input/Input";
import Messages from "./Messages/Messages";

let socket;

const Chat = () => {
  const [room, setRoom] = useState(" ");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    body: "",
  });
  const location = useLocation();
  const ENDPOINT = "http://localhost:4000/";
  const user = useSelector(selectUser);

  useEffect(() => {
    const { room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setRoom(room);

    if (user) {
      socket.emit("join", { userId: user.id, room });
      return () => {
        socket.disconnect();

        socket.off();
      };
    }
  }, [user, location.search]);
  useEffect(() => {
    socket.on(
      "message",
      (message) => {
        console.log("this is coming from the server");
        setMessages([...messages, message]);
      },
      [messages]
    );
  });
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message);
    }
    setMessage({
      body: "",
    });
  };
  console.log("messages", messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} user={user} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          user={user}
          room={room}
        />
      </div>
    </div>
  );
};

export default Chat;
