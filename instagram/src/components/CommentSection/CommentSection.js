import React from "react";
import Comment from "./Comment";

export default function CommentSection(props) {
  const comments = props.comments;
  return (
    <div>
      {comments.map((comment, idx) => {
        return <Comment comment={comment} key={idx} />;
      })}
    </div>
  );
}
