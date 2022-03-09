import React, { useEffect } from "react";
import { useState } from "react";
import PostListView from "../components/postListView";
import "./style.css";

const Posts = () => {
  const [response, setResponse] = useState([]);

  const port = 3000;
  const serverUrl = "http://localhost:" + port;

  const fetchPostListPublic = () => {
    fetch(serverUrl + "/post/list/public", {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.posts);
      });
  };

  const fetchPostListProtected = () => {
    fetch(serverUrl + "/post/list/protected", {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error === true) {
          fetchPostListPublic();
        } else {
          setResponse(data.posts);
        }
      });
  };

  useEffect(() => {
    // If user signed in attempt to fetch Protected list
    if (localStorage.getItem("accessToken") !== "null") {
      fetchPostListProtected();
    } else {
      fetchPostListPublic();
    }
  }, []);

  return (
    <div>
      <ul className="postsList">
        {response.map((item) => (
          <PostListView
            key={item._id}
            _id={item._id}
            title={item.title}
            author={item.author}
            published={item.published}
          />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
