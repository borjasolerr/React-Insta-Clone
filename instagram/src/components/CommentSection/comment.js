import React from "react";
import PropTypes from "prop-types";
import "./comment.css";

export default function Comment(props) {
  const username = props.comment.username;
  const text = props.comment.text;
  return (
    <div className="comment-box">
      <div>
        <span className="comments-username">{username}</span>
        {text}
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};
