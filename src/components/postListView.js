import React from "react";

const PostListView = (props) => {
  const handleClick = () => {
    console.log(props._id);
  };

  return (
    <li onClick={handleClick}>
      {props.title} by {props.author}
    </li>
  );
};

export default PostListView;
