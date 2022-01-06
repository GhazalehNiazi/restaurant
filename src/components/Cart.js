import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const context = useContext(CartContext);

  return (
    <div className={classes.container}>
      <h1>text text</h1>
      <ul>
        {context.cart.map((cartItem) => (
          <li key={cartItem.id}>  
             {/* //the key is being added but  it error says add a key! FoodList.js line 13*/}

            <div>
              <strong>{cartItem.name}</strong> - ${cartItem.price} (
              {cartItem.quantity})
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
        ))}
      </ul>
    </div>
  );
};
export default Cart;
