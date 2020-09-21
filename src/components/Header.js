import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Link id="logo" to="/">
          weteo
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
