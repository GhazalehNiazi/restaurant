import React, { useRef, useState } from "react";
import classes from "./OrderForm.module.css";

const OrderForm = (props) => {

  const inputName = useRef();
  const inputAddress = useRef();
  const [nameIsValid, setNameIsValid] = useState(false);
  const [addressIsValid, setAddressIsValid] = useState(false);
  const [NameIsTouched, setNameIsTouched] = useState(false);
  const [addressIsTouched, setAddressIsTouched] = useState(false);

  const changeNameInputHandler = () => {
    setNameIsTouched(true);
    const lastInputValue = inputName.current.value;
    console.log(lastInputValue.split("").length);
    if (lastInputValue.split("").length < 3) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  };

  const changeAddressInputHandler = () => {
    setAddressIsTouched(true);
    const lastInputValue = inputAddress.current.value;
    console.log(lastInputValue.split("").length);
    if (lastInputValue.split("").length < 6) {
      setAddressIsValid(false);
    } else {
      setAddressIsValid(true);
    }
  };

  const buyButtonHandler = () => {
    if (nameIsValid && NameIsTouched && addressIsValid && addressIsTouched) {
      console.log("bought");
    }
  };

  return (
    <React.Fragment>
      {!nameIsValid && NameIsTouched && (
        <p className={classes.error}>Name should be more than 3 charactors.</p>
      )}
      {!addressIsValid && addressIsTouched && (
        <p className={classes.error}>
          Address should be more than 6 charactors.
        </p>
      )}
      <form className={classes.form}>
        <label htmlFor="name"></label>
        <input
          className={classes.input}
          type="text"
          placeholder="Name"
          id="name"
          ref={inputName}
          onBlur={changeNameInputHandler}
        ></input>
        <label htmlFor="address"></label>
        <input
          className={classes.input}
          type="text"
          placeholder="Address"
          id="address"
          ref={inputAddress}
          onBlur={changeAddressInputHandler}
        ></input>
      </form>
      <div>
        <button
          className={classes.buttons}
        //   onClick={props.modalClickHandler}
        >
          cancel
        </button>
        <button className={classes.buttons} onClick={buyButtonHandler}>
          buy
        </button>
      </div>
    </React.Fragment>
  );
};
export default OrderForm;
