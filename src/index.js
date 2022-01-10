import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Menu from "../src/components/Menu";
import Cart from "./components/Cart";
import GlobalState from './store/GlobalState';
import Order from "./components/Order";

ReactDOM.render(
  <GlobalState>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      <Route path='cart' element={<Cart/>} />
      <Route path='order' element={<Order/>}/>
    </Routes>
  </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
