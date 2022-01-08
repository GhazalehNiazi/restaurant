import React from "react";

export default React.createContext({
  totalAmount: 0,
  cart: [],
  addProductToCart: (item) => {},
  removeItem: (id) => {},
});
