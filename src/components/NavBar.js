import React from "react";
import classes from './NavBar.module.css'
const NavBar = props =>{

return(
    <React.Fragment>
        <nav>
            <ul className={classes.navContainer}>
                <li className={classes.navItem}>Order now</li>
                <li className={classes.navItem}>Home</li>
                <li className={classes.navItem}>Gallery</li>
                <li className={classes.navItem}>Visit</li>
                <li className={classes.navItem}>icon</li>
                <li className={classes.navItem}>icon</li>
            </ul>
        </nav>
    </React.Fragment>
)
}
export default NavBar;