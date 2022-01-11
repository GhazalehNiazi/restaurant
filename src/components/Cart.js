import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const context = useContext(CartContext);
  const contextCart = context.cart;

  return (
    <div className={classes.container}>
      <ul className={classes.foodList}>
        {contextCart.map((cartItem) => (
          <li key={cartItem.id} className={classes.item}>
            <div className={classes.columnOne}>
              <div className={classes.name}>{cartItem.name}</div>
              <div className={classes.price}>
                ${cartItem.price * cartItem.amount}{" "}
                <span>({cartItem.amount})</span>
              </div>
            </div>
            <div className={classes.columnTwo}>
              <button
                className={classes.button}
                onClick={context.removeItem.bind(this,cartItem.id)}
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.finalDetails}>
      <div className={classes.totalAmount}>total amount : ${context.totalAmount.toFixed(2)}</div>
      <Link  to='/order' className={classes.order}>
        <span className={classes.orderText}>Order</span>
      </Link>
      </div>
    </div>
  );
};
export default Cart;
