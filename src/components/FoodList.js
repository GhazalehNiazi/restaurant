import React, { useContext } from "react";
import FoodListForm from "./FoodListForm";
import classes from "./FoodList.module.css";
import CartContext from "../store/cart-context";

const FoodList = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {

    cartCtx.addProductToCart({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };


  return (
    <div className={classes.foodDetail}>
      <div className={classes.columnOne}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.columnTwo}>
        <div>{price}</div>
        <div>
          <FoodListForm id={props.id} onAddToCart={addToCartHandler}></FoodListForm>
        </div>
      </div>
      <div className={classes.img}>
        <img src={props.photo} alt=''></img>
      </div>
    </div>
  );
};
export default FoodList;
