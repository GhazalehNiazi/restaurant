import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./CartFinal.module.css";
// this components will be shown when the order button in the menu get clicked
const CartFinal = () => {
  const context = useContext(CartContext);
  const contextCart = context.cart;
  return (
    <div className={classes.container}>
      <ul className={classes.items}>
        {contextCart.map((cartItem) => (
          <li key={cartItem.id} className={classes.item}>
            <div className={classes.columnOne}>
              <div className={classes.name}>{cartItem.name}</div>
              <div className={classes.price}>
                ${cartItem.price * cartItem.amount}{" "}
                <span>({cartItem.amount})</span>
              </div>
            </div>
            <div className={classes.button}>
              <button
                className={classes.remove}
                onClick={context.removeItem.bind(this, cartItem.id)}
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.totalAmount}>total amount : ${context.totalAmount.toFixed(2)}</div>
    </div>
  );
};
export default CartFinal;
