import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import github from "../image/github.png";
const NavBar = (props) => {
  return (
    <React.Fragment>
      
        <ul className={classes.navContainer}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/visit">visit</Link>
          </li>
          <a className={classes.logo} href='https://github.com/GhazalehNiazi/restaurant' target='_blank'>
            <img src={github}  alt='github'/>
          </a>
        </ul>
    
    </React.Fragment>
  );
};
export default NavBar;
