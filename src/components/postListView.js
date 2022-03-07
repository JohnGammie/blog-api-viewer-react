import React from "react";
import { Link } from "react-router-dom";

const PostListView = (props) => {
  return (
    <li>
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
