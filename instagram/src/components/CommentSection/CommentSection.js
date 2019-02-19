import React from "react";
import PropTypes from "prop-types";
import Comment from "./comment";
import "./comment.css";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }

  render() {
    return (
      <div className="commentsection-container">
        <div className="commentsection-icons-likes-container">
          <div className="commentsection-icons-container">
            <img className="commentsection-icon" src="/assets/instagram-heart.svg" alt="instagram icon" />
            <img className="commentsection-icon" src="/assets/instagram-bubble.svg" alt="instagram icon" />
            <img className="commentsection-icon" src="/assets/instagram-save.svg" alt="instagram icon" />
          </div>
          <div>{this.props.likes} likes</div>

          {this.state.comments.map((comment, idx) => {
            return <Comment comment={comment} key={idx} />;
          })}
          <div className="commentsection-new-comment-container">
            <input placeholder="Add new comment..." />
          </div>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  likes: PropTypes.number.isRequired
};
