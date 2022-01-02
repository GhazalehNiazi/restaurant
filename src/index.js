import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Menu from "../src/components/Menu";
import Cart from "./components/Cart";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      <Route path='cart' element={<Cart/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
