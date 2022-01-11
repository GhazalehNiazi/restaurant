import OrderForm from "./OrderForm";
import CartFinal from "./CartFinal";
import classes from "./Order.module.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  // const [showModal, setShowModal] = useState(true);

  // const modalClickHandler = () => {
  //   setShowModal(false);
  // };
  return (
    // <React.Fragment>
    //   {showModal && (
    //     <div className={classes.container}>
    //       <CartFinal />
    //       <OrderForm
    //         className={classes.inputs}
    //         modalClickHandler={modalClickHandler}
    //       ></OrderForm>
    //     </div>
    //   )}
    // </React.Fragment>
    <div className={classes.container}>
    <CartFinal />
    <OrderForm
      className={classes.inputs}
      // modalClickHandler={modalClickHandler}
    ></OrderForm>
  </div>
  );
};
const Backdrop = (props) => {
  // const [showModal, setShowModal] = useState(true);

  // const backdropClickHandler = () => {
  //   setShowModal(false);
  // };
  return (
    // <React.Fragment>
    //   {showModal && (
    //     <div className={classes.backdrop} onClick={backdropClickHandler} />
    //   )}
    // </React.Fragment>
    <div className={classes.backdrop}  />
  );
};

const Order = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};
export default Order;
