import React from "react";
import "./style.css";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="commentContent">{props.content}</div>
      <div className="commentAuthor">{props.username}</div>
      <div className="commentDate">{props.created}</div>
    </div>
  );
};

export default Comment;
