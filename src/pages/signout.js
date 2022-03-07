import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SignOut = (props) => {
  const navigate = useNavigate();

  const clickNo = () => {
    navigate("/posts");
  };

  const logout = async () => {
    const port = 3000;
    const serverUrl = "http://localhost:" + port;

    await fetch(serverUrl + "/users/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("accessToken", null);
        props.setSignedIn(false);
        navigate("/");
      });
  };

  return (
    <div>
      <h2>Are you sure?</h2>
      <div className="signOutButtons">
        <button id="yes" onClick={logout}>
          Yes
        </button>
        <button id="no" onClick={clickNo}>
          No
        </button>
      </div>
    </div>
  );
};

export default SignOut;