import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class BurgerMenu extends React.Component {
  render() {
    return (
      <nav>
        <Router>
          <Link to="/">Workplaces</Link>
          <Link to="/">Settings</Link>
          <Link to="/">About Us</Link>
        </Router>
      </nav>
    );
  }
}
export default BurgerMenu;
