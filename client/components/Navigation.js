import React from "react";
// import { useHistory } from "react-router";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navigation = () => {
  // const history = useHistory();
  // const authToken = localStorage.getItem(AUTH_TOKEN);
  const authToken = true;
  return (
    <nav>
      <Router>
        {authToken && (
          <div>
            <Link to="/workplaces">Workplaces</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/about">About Us</Link>
            <div
              onClick={() => {
                // localStorage.removeItem(AUTH_TOKEN);
                console.log('clicked')
                // history.push(`/login`);
              }}
            >
              Logout
            </div>
          </div>
        )}
        
      </Router>
    </nav>
  );
};

export default Navigation;
