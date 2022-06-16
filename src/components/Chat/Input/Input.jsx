import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message, user, room }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message.body}
      onChange={(e) => {
        console.log("user", user);
        setMessage({
          user: user.id,
          username: user.name,
          body: e.target.value,
          room: room,
        });
      }}
      //   onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
