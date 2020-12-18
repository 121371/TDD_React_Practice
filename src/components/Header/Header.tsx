import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-text">
        <p>Welcome to our app</p>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
