import React from "react";
import { Link } from "react-router-dom";

const PostListView = (props) => {
  const handleClick = () => {
    console.log(props._id);
  };

  return (
    <li onClick={handleClick}>
      <Link
        to={{
          pathname: `post/${props._id}`,
          state: { id: props._id },
        }}
      >
        {props.title} by {props.author}
      </Link>
    </li>
  );
};

export default PostListView;
