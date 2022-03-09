import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostListView = (props) => {
  const [isPublished, setIsPublished] = useState(props.published);

  const publishPost = async () => {
    const port = 3000;
    const serverUrl = "http://localhost:" + port;

    await fetch(serverUrl + "/post/publish?_id=" + props._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      mode: "cors",
    }).then((data) => {
      if (data.status === 200) {
        setIsPublished(true);
      } else {
        alert(
          "Something went wrong with the request. Try sign out & back in for a new Access Token"
        );
      }
    });
  };

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
      {!isPublished && (
        <button className="publishPost" onClick={publishPost}>
          {" "}
          Publish
        </button>
      )}
    </li>
  );
};

export default PostListView;
