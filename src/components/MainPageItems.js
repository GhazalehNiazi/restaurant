import React, { useState } from "react";
import classes from "./MainPageItems.module.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const MainPage = (props) => {
  const [foodBackground, setFoodBackground] = useState(false);
  const [drinkBackground, setDrinkBackground] = useState(false);
  const [visitBackground, setVisitBackground] = useState(false);

  const addBackgroundChangeHandler = (e) => {
    if (e.target.className === "foodOption") {
      setFoodBackground(true);
    } else if (e.target.className === "drinkOption") {
      setDrinkBackground(true);
    } else if (e.target.className === "visitOption") {
      setVisitBackground(true);
    }
  };

  const removeBackgroundChangeHandler = (e) => {
    setFoodBackground(false);
    setDrinkBackground(false);
    setVisitBackground(false);
  };

  let backroundClassName = foodBackground
    ? classes.foodActive
    : drinkBackground
    ? classes.drinkActive
    : visitBackground
    ? classes.visitActive
    : classes.mainActive;

  return (
    <div className={[classes.MainPage, backroundClassName].join(" ")}>
      <NavBar></NavBar>
      <div className={classes.container}>
        <div className={classes.address}>
          <p >123 Fake Street — Seattle, WA — 206-555-7890</p>
        </div>
        <span className={classes.lists}>
          <span
            onMouseEnter={addBackgroundChangeHandler}
            onMouseLeave={removeBackgroundChangeHandler}
            className="foodOption"
          >
            <Link to="/menu" className="foodOption">
              {" "}
              EAT{" "}
            </Link>
          </span>
          <span
            onMouseEnter={addBackgroundChangeHandler}
            onMouseLeave={removeBackgroundChangeHandler}
            className="drinkOption"
          >
            <Link to="/menu" className="drinkOption">
              {" "}
              DRINK{" "}
            </Link>
          </span>
          <span
            onMouseEnter={addBackgroundChangeHandler}
            onMouseLeave={removeBackgroundChangeHandler}
            className="visitOption"
          >
            <Link to="/visit" className="visitOption">
              {" "}
              VISIT
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default MainPage;
