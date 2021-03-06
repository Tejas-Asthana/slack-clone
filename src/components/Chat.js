import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./chat.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../firebase";
import Message from "./messages";
import ChatInput from "./ChatInput.js";

function Chat(props) {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);

  console.log(roomDetails, roomMessages);
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-headerLeft">
          <h4 className="chat-channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat-headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat-messages">
        {roomMessages.map(({ message, timestamp, user, userimage }) => {
          return (
            <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userimage}
            />
          );
        })}
      </div>

      <ChatInput
        user={props.user}
        channelName={roomDetails?.name}
        channelId={roomId}
      />
    </div>
  );
}

export default Chat;
