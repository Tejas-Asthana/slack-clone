import React, { useState } from "react";
import "./chatInput.css";
import db from "../firebase.js";
import firebase from "firebase";

function ChatInput({ user, channelName, channelId }) {
  let [inputText, setInputText] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: inputText,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.name,
        userimage: user.userimage,
      });
    }
    setInputText("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={(e) => sendMessage(e)}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
