import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <h1>Welcome to blog-api viewer</h1>
      <h2>Visitors can:</h2>
      <p>View published Posts and make a comment</p>
      <h2>Registered users (signed in) can:</h2>
      <p>Create new posts</p>
      <p>Publish posts</p>
      <h3>New user registration is not open at this time</h3>
    </div>
  );
};

export default Home;
