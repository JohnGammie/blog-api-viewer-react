import React from "react";
import "./style.css";

const CommentInput = (props) => {
  const handleSubmit = async () => {
    const usernameInput = document.getElementById("usernameInput");
    const commentInput = document.getElementById("commentInput");

    await fetch(process.env.REACT_APP_SERVER_URL + "/post/comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput.value,
        content: commentInput.value,
        postId: props.id,
      }),
    });
    refreshPageAfterSubmission(usernameInput, commentInput);
  };

  const refreshPageAfterSubmission = (usernameInput, commentInput) => {
    props.reloadPage(props.id);
    usernameInput.value = "";
    commentInput.value = "";
  };

  return (
    <div className="commentInputs">
      <div className="commentInput">
        <label htmlFor="username">Name</label>
        <input name="username" id="usernameInput" type="text" />
      </div>
      <div className="commentInput">
        <label htmlFor="comment">Comment</label>
        <input name="comment" id="commentInput" type="text" />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CommentInput;
