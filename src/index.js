import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Menu from "../src/components/Menu";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
