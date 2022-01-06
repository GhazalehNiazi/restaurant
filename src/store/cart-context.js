import React from "react";
import AvailableFood from "../components/AvailableFood";

export default React.createContext({
  items: AvailableFood,
  totalAmount: 0,
  cart: [],
  addProductToCart: (item) => {},
  removeItem: (id) => {},
});
