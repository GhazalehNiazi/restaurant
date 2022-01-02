import React from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import CartProvider from "./store/CartProvider";
function App() {
  return (
    <CartProvider>
      <MainPage>
        <NavBar></NavBar>
      </MainPage>
    </CartProvider>
  );
}

export default App;
