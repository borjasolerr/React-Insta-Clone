import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./Post.css";

export default function PostContainer(props) {
  const post = props.post;
  const comments = post.comments;
  const timestamp = post.timestamp;
  return (
    <div className="postcontainer-container">
      <div className="post-user-container">
        <img className="post-thumbnail" src={post.thumbnailUrl} alt="thumbnail of user" />
        <div className="post-username">{post.username}</div>
      </div>{" "}
      <div className="post-image-container">
        <img className="post-image" src={post.imageUrl} alt="users added" />
      </div>
      <div className="timestamp">{timestamp}</div>
      <CommentSection comments={comments} likes={post.likes} />
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
};
