import OrderForm from "./OrderForm";
import CartFinal from "./CartFinal";
import classes from "./Order.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  return (
    <div className={classes.container}>
      <CartFinal />
      <OrderForm className={classes.inputs}></OrderForm>
    </div>
  );
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Order = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};
export default Order;
