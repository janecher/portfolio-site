import { Link } from "react-router-dom";
import React from "react";

function Header(){
  return (
    <React.Fragment>
      <h1>Portfolio Site</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;