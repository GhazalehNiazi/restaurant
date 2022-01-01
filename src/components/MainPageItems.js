import React, { useState } from "react";
import classes from './MainPageItems.module.css'
import NavBar from "./NavBar";
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
        {/* <div className={classes.address}><p >123 Fake Street — Seattle, WA — 206-555-7890</p></div> */}
      <div className={classes.container} >
        <div
          onMouseEnter={addBackgroundChangeHandler}
          onMouseLeave={removeBackgroundChangeHandler}
          className="foodOption"
        >
          EAT
        </div>
        <div
          onMouseEnter={addBackgroundChangeHandler}
          onMouseLeave={removeBackgroundChangeHandler}
          className="drinkOption"
        >
          DRINK
        </div>
        <div
          onMouseEnter={addBackgroundChangeHandler}
          onMouseLeave={removeBackgroundChangeHandler}
          className="visitOption"
        >
          VISIT
        </div>
      </div>
    </div>
  );
};

export default MainPage;
