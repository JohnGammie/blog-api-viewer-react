import React from "react";
import "./style.css";

const Comment = (props) => {
  // YYYY/MM/DD
  function formatDate(date) {
    date = new Date(date);
    var month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return date.getFullYear() + "/" + month + "/" + day;
  }

  return (
    <div className="comment">
      <div className="commentContent">{props.content}</div>
      <div className="commentAuthor">{props.username}</div>
      <div className="commentDate">{formatDate(props.created)}</div>
    </div>
  );
};

export default Comment;
