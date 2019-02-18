import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./Post.css";

export default function PostContainer(props) {
  const post = props.post;
  const comments = post.comments;
  return (
    <div className="postcontainer-container">
      <div className="post-container">Postcontainer</div>
      <CommentSection comments={comments} />
    </div>
  );
}
