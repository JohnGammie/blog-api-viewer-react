import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import PostComponent from "../components/postComponent";
import Comment from "../components/comment";
import CommentInput from "../components/commentInput";

const Post = (props) => {
  const [response, setResponse] = useState();

  let { id } = useParams();
  console.log(id);

  const port = 3000;
  const serverUrl = "http://localhost:" + port;
  const fetchPostDetails = async (id) => {
    fetch(serverUrl + "/post/postDetails/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
      });
  };

  useEffect(() => {
    fetchPostDetails(id);
  }, []);

  if (response === undefined) {
    return <div>waiting for api result</div>;
  }

  return (
    <div>
      <PostComponent post={response.post} />
      <div className="comments">
        {response.comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              content={comment.content}
              username={comment.username}
              created={comment.created}
            />
          );
        })}
      </div>
      <CommentInput id={id} reloadPage={fetchPostDetails} />
    </div>
  );
};

export default Post;
