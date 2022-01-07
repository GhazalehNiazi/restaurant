import { useContext } from "react";
import cartContext from "../store/cart-context";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const context = useContext(CartContext);
  const contextCart = context.cart;
  return (
    <div className={classes.container}>
     {/* {!contextCart && <div>cart is empty</div>} */}
      <ul>
        {contextCart.map((cartItem) => (
          <li key={cartItem.id}>  
            <div>
              <strong>{cartItem.name}</strong> - ${cartItem.price * cartItem.amount} (
                {cartItem.amount})
            </div>
            <div>
              <button
              // onClick={context.removeProductFromCart.bind(
              //   this,
              //   cartItem.id
              // )}
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))
        }
      </ul>
      <div>total amount : ${context.totalAmount.toFixed(2)}</div>
    </div>
  );
};
export default Cart;
