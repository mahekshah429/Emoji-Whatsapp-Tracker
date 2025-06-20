import React, { useState } from "react";
import "./App.css";

const emojis = ["😀", "😂", "😍", "🥺", "🤔", "😎", "🥳", "❤️", "👍", "🔥"];

function App() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleEmojiClick = (emoji) => {
    setText((prev) => prev + emoji);
  };

  const handleSend = () => {
    if (text.trim() !== "") {
      setMessages([...messages, text]);
      setText("");
    }
  };

  return (
    <div className="chat-container">
      <h2>💬 WhatsApp-Like Chat</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="chat-bubble">
            {msg}
          </div>
        ))}
      </div>

      <div className="emoji-bar">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className="emoji-btn"
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>

      <div className="input-row">
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="send-btn" onClick={handleSend}>
          ➤
        </button>
      </div>
    </div>
  );
}

export default App;
