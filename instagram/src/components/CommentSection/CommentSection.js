import React from "react";
import PropTypes from "prop-types";
import Comment from "./comment";
import NewComment from "./NewComment";
import "./comment.css";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      inputCommentValue: "",
      likes: this.props.likes,
      liked: false
    };
  }

  addNewComment = message => {
    this.setState(currState => ({
      comments: currState.comments.concat({ username: this.props.username, text: message })
    }));
  };

  handleAddNewInput = input => {
    this.setState({
      inputCommentValue: input
    });
  };

  clearInput = () => {
    this.setState({
      inputCommentValue: ""
    });
  };

  toggleLike = () => {
    this.setState(
      currState => ({ liked: !currState.liked }),
      () => {
        if (this.state.liked) {
          this.setState(currState => ({ likes: currState.likes + 1 }));
        } else if (!this.state.liked) {
          this.setState(currState => ({ likes: currState.likes - 1 }));
        }
      }
    );
  };

  render() {
    return (
      <div className="commentsection-container">
        <div className="commentsection-icons-likes-container">
          <div className="commentsection-icons-container">
            <img className="commentsection-icon" onClick={() => this.toggleLike()} className={this.state.liked ? "display-none" : "display-true"} src="/assets/heart-icon.svg" alt="instagram icon" />
            <img className="commentsection-icon" onClick={() => this.toggleLike()} className={!this.state.liked ? "display-none" : "display-true"} src="/assets/heart-red-icon.svg" alt="instagram icon" />
            <img className="commentsection-icon bubble" src="/assets/bubble-icon.svg" alt="instagram icon" />
          </div>
          <div>{this.state.likes} likes</div>

          {this.state.comments.map((comment, idx) => {
            return <Comment comment={comment} key={idx} />;
          })}
          <div className="commentsection-new-comment-container">
            <NewComment addNewComment={this.addNewComment} inputCommentValue={this.state.inputCommentValue} handleAddNewInput={this.handleAddNewInput} clearInput={this.clearInput} />{" "}
          </div>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  likes: PropTypes.number.isRequired,
  username: PropTypes.string
};
