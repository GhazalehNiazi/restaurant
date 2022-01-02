import React from "react";
import { Link } from "react-router-dom";
import classes from './FoodList.module.css'
import img from '../image/foodImage.jpg'
const FoodList = (props) => {
  const price = `$${props.price.toFixed(2)}`
  return (
    <div className={classes.foodDetail}>
      <div className={classes.columnOne}>
        <a >{props.name}</a>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.columnOne}>
        <div>{price}</div>
        <form>
          <input type='number' min='0' max='6'></input>
        <div className={classes.buttons}>
          <button>+</button>
          <button>-</button>
          </div>
        </form>
      </div>
      <div className={classes.img}>
      <img src={props.photo} ></img>
      </div>
    </div>
  );
};
export default FoodList;
