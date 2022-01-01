import React from "react";
import { Link } from "react-router-dom";
import classes from './FoodList.module.css'
import img from '../image/foodImage.jpg'
const FoodList = (props) => {
  return (
    <div className={classes.foodDetail}>
      <div className={classes.columnOne}>
        <a>Food Name</a>
        <p>food detail dfnkgldn</p>
      </div>
      <div className={classes.columnOne}>
        <div>price</div>
        <form>
          <input type='number' value='1'></input>
        <div className={classes.buttons}>
          <button>+</button>
          <button>-</button>
          </div>
        </form>
      </div>
      <div className={classes.img}>
      <img src={img} ></img>
      </div>
    </div>
  );
};
export default FoodList;
