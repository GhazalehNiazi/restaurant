import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav>
        <ul className={classes.navContainer}>
          <li>
            <Link to="/menu">Order now</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/visit">visit</Link>
          </li>
          <li>icon</li>
          <li>icon</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
