import OrderForm from "./OrderForm";
import CartFinal from "./CartFinal";
import classes from "./Order.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <div className={classes.container}>
      <CartFinal />
      <OrderForm
        className={classes.inputs}
        onCloseButton={props.onClose}
      ></OrderForm>
    </div>
  );
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const Order = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal onClose={props.onClose} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default Order;
