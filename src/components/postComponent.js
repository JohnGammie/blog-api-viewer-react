import React from "react";

const PostComponent = (props) => {
  return (
    <>
      <h1>{props.post.title}</h1>
      <h2>by {props.post.author}</h2>
      <h3>Created at: {props.post.created}</h3>
      <p>{props.post.content}</p>
    </>
  );
};

export default PostComponent;
