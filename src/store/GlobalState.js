import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { shopReducer, ADD } from "./Reducer";

const GlobalState = (props) => {
  const [cartState, dispatch] = useReducer(shopReducer, {
    cart: [],
    totalAmount: 0,
  });

  const addProductToCart = (product) => {
    dispatch({ type: ADD, item: product });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        totalAmount: cartState.totalAmount,
        addProductToCart: addProductToCart,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default GlobalState;
