import React from "react";
import "./comment.css";

export default function Comment(props) {
  const username = props.comment.username;
  const text = props.comment.text;
  return (
    <div className="comment-box">
      <h3>{username}</h3>
      <div>{text}</div>
      <input placeholder="new comment" />
    </div>
  );
}
