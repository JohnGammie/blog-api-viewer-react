import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Create = () => {
  const navigate = useNavigate();
  const createPost = async (e) => {
    // Disabling the "Submit" behaviour will also stop simple HTML required validation.
    // Force check the validity here, as it is a simple validation suitable for this program
    const form = document.querySelector(".createPostForm");
    if (form.checkValidity()) {
      e.preventDefault();

      const authorInput = document.getElementById("authorInput");
      const titleInput = document.getElementById("titleInput");
      const contentInput = document.getElementById("contentInput");

      const port = 3000;
      const serverUrl = "http://localhost:" + port;
      await fetch(serverUrl + "/post/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({
          author: authorInput.value,
          title: titleInput.value,
          content: contentInput.value,
        }),
      }).then((data) => {
        if (data.status === 200) {
          navigate("/posts");
        } else {
          alert(
            "Something went wrong with the Post Creation request. Try again or try sign out & back in"
          );
        }
      });
    }
  };

  return (
    <form action="" className="createPostForm">
      <label htmlFor="author">Author</label>
      <input type="text" name="author" id="authorInput" required />
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="titleInput" required />
      <label htmlFor="content">Content</label>
      <input type="text" name="content" id="contentInput" required />
      <button type="submit" className="createPostButton" onClick={createPost}>
        Create Post
      </button>
    </form>
  );
};

export default Create;
