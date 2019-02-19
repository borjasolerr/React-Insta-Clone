import React from "react";
import "./comment.css";

export default function NewComment(props) {
  const inputCommentValue = props.inputCommentValue;
  const handleAddNewInput = event => {
    props.handleAddNewInput(event.target.value);
  };
  const handleAddNewComment = event => {
    props.addNewComment(inputCommentValue);
    event.preventDefault();
    props.clearInput();
  };

  return (
    <form onSubmit={handleAddNewComment}>
      <input value={inputCommentValue} onChange={handleAddNewInput} placeholder="Add new comment..." />
    </form>
  );
}
