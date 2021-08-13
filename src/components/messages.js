import React from "react";
import "./messages.css";

function messages(props) {
  return (
    <div className="message">
      <img src={props.userImage} alt="" />
      <div className="message-info">
        <h4>
          {props.user}{" "}
          <span className="message-timestamp">
            {new Date(props.timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default messages;
