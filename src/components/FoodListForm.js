import { useRef, useState } from "react";
import classes from "./FoodListForm.module.css";

const FoodItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    // passing the amount of items to the FooList.js
    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;



        if (
          enteredAmount.trim().length === 0 ||
          enteredAmountNumber < 1 ||
          enteredAmountNumber > 5
        ) {
          setAmountIsValid(false);
          return;
        }
        props.onAddToCart(enteredAmountNumber);
      };
    

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="amount"></label>
      <input
        ref={amountInputRef}
        id="amount"
        type="number"
        step="1"
        defaultValue="1"
        min="0"
        max="6"
      />
        <button className={classes.buttons} type="submit">Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default FoodItemForm;
