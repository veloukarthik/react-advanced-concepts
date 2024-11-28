import React, { useEffect, useState } from "react";

const WebSocketChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);
  const [error,setError] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    // Set up WebSocket handlers
    ws.onopen = () => {
      setError("");
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]); // Append new messages
    };

    ws.onclose = () => {
      setError("Websocket connection closed")
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      setError(error.message);
      console.error("WebSocket error:", error);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>
      <div style={{ border: "1px solid black", height: "200px", overflow: "auto" }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button disabled={error ? true : false} onClick={sendMessage}>Send</button>
      {error ? <div>{error}</div> : ""}
    </div>
  );
};

export default WebSocketChat;
