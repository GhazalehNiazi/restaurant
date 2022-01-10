import React from "react";
import classes from './OrderForm.module.css';
const OrderForm = props =>{

return(
    <form className={classes.form}>
        <label htmlFor='name'></label>
        <input type="text" placeholder="Name" id='name'></input>
        <label htmlFor='address'></label>
        <input type="text" placeholder="Address" id='address'></input>
    </form>
)
}
export default OrderForm;