import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();

  const submitSignin = async () => {
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");

    const port = 3000;
    const serverUrl = "http://localhost:" + port;

    await fetch(serverUrl + "/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput.value,
        password: passwordInput.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return;
        }
        // Save access token for use in protected requests
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/posts");
        props.setSignedIn(true);
      });
  };

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="usernameInput" />
      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="passwordInput" />
      <button onClick={submitSignin}>Sign in</button>
    </div>
  );
};

export default SignIn;
