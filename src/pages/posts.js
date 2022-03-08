import React, { useEffect } from "react";
import { useState } from "react";
import PostListView from "../components/postListView";
import "./style.css";

const Posts = () => {
  const [response, setResponse] = useState([]);

  const port = 3000;
  const serverUrl = "http://localhost:" + port;
  const fetchPostList = () => {
    fetch(serverUrl + "/post/list", {
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponse(data.posts);
      });
  };

  useEffect(() => {
    fetchPostList();
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
