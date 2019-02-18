import React from "react";
import CommentSection from "../CommentSection/CommentSection";

export default function PostContainer(props) {
  const post = props.post;
  const comments = post.comments;
  return (
    <div>
      <CommentSection comments={comments} />
    </div>
  );
}
