import "./App.css";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Posts from "./pages/posts";
import Post from "./pages/post";
import SignIn from "./pages/signin";
import SignOut from "./pages/signout";
import Create from "./pages/create";

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const [signedIn, setSignedIn] = useState(
    accessToken != "null" ? true : false
  );

  return (
    <Router>
      <Navbar signedIn={signedIn} />
      <div className="pageContent">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/post/:id" element={<Post />}></Route>
          <Route
            path="/signin"
            element={<SignIn setSignedIn={setSignedIn} />}
          ></Route>
          <Route
            path="signout"
            element={<SignOut setSignedIn={setSignedIn} />}
          ></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
