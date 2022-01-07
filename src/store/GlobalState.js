import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { shopReducer, ADD } from "./Reducer";
import AvailableFood from "../components/AvailableFood";

const GlobalState = (props) => {
  const products = AvailableFood;

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] , totalAmount:0});

  const addProductToCart = (product) => {
    dispatch({ type: ADD, item: product });
  };

  return (
    <CartContext.Provider
      value={{
        // items:cartState.items,
        // product: products,
        cart: cartState.cart,
        totalAmount: cartState.totalAmount,
        addProductToCart: addProductToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default GlobalState;
