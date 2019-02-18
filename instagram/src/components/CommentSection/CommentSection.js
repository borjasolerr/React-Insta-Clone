import React from "react";
import Comment from "./comment";

export default function CommentSection(props) {
  const comments = props.comments;
  return (
    <div className="commentsection-container">
      {comments.map((comment, idx) => {
        return <Comment comment={comment} key={idx} />;
      })}
    </div>
  );
}
