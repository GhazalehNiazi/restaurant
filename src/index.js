import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Menu from "../src/components/Menu";
import Cart from "./components/Cart";
import GlobalState from "./store/GlobalState";
import Order from "./components/Order";
import Visit from "./components/Visit";
import "./index.css";
import DessertMenu from "./components/DessertMenu";

ReactDOM.render(
  <GlobalState>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="menu" element={<Menu />} />
        <Route path="dessert" element={<DessertMenu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
        <Route path="visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
