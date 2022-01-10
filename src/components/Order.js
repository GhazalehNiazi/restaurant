import OrderForm from "./OrderForm";
import CartFinal from "./CartFinal";
import classes from "./Order.module.css";
import React from "react";
const Order = () => {
  return (
      <React.Fragment>
    <div className={classes.container}>
      <CartFinal />
      <OrderForm className={classes.inputs}></OrderForm>
      <div>
    <button className={classes.buttons}>cancel</button>
    <button className={classes.buttons}>buy</button>
    </div>
    </div>
    </React.Fragment>
  );
};
export default Order;
