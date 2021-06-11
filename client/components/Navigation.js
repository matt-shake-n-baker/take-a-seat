import React from "react";
import { useHistory } from "react-router";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const authToken = localStorage.getItem("auth-token");
  const userId = localStorage.getItem("user-id");
  return (
    authToken && (
      <nav>
        <Link to="/workspaces">Workspaces</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/about">About Us</Link>
        <Link
          to="/login"
          onClick={() => {
            localStorage.removeItem(authToken);
            localStorage.removeItem(userId);
            history.push(`/login`);
          }}
        >
          Logout
        </Link>
      </nav>
    )
  );
};

export default Navigation;
