import "./App.css";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Posts from "./pages/posts";
import Post from "./pages/post";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pageContent">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/post/:id" element={<Post />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
