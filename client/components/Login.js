import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Registration from "./Registration";
import Workspaces from "./Workspaces";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  useEffect(() => {
    console.log("changing state");
  }, [email, password]);

  if (login === "loggedIn") {
    return <Workspaces />;
  } else if (login === "register") {
    return <Registration />;
  } else {
    return (
      <div id="login-form">
        Email
        <input name="email" onChange={setEmail} />
        Password
        <input name="password" onChange={setPassword} />
        <button onClick={() => setLogin("loggedIn")}>Login</button>
        <button onClick={() => setLogin("register")}>Register</button>
      </div>
    );
  }
}

export default LoginForm;
