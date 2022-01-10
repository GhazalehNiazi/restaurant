export const ADD = "ADD";

const addProductToCart = (state, action) => {
  console.log("state:", state);
  console.log("action", action);

  // it updates the total price of the cart
  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;

  // it checks if the items that is being added to the cart already exists or not(and returns the index of it)
  const existingCartItemIndex = state.cart.findIndex(
    (item) => item.id === action.item.id
  );
  // it gives the full item obj
  const existingCartItem = state.cart[existingCartItemIndex];
  let updatedItems;

  if (existingCartItem) {
    // it updates the item in cart if the amount is upper than 0
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + action.item.amount,
    };
    updatedItems = [...state.cart];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    // it adds a new item to the cart if the amount is 0
    updatedItems = state.cart.concat(action.item);
  }

  return {
    cart: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

const removeItem = (state, action) => {
  console.log("cart", state.cart);
  console.log("action", action);
  // it findes the index of the chosen item
  const findIndexItem = state.cart.findIndex((item) => item.id === action.id);
  // it findes the chosen item itself
  const chosenItem = state.cart[findIndexItem];
  //updating the cart total price
  const updatedTotalAmount = state.totalAmount - chosenItem.price;
  // applying the change it the item amount
  chosenItem.amount--;
  let updatedCart;

  if (chosenItem.amount > 0) {
    // it applyes the changes of the chosen item in the cart if the amount is upper than 0
    const updatedItem = {
      ...chosenItem,
      amount: chosenItem.amount,
    };
    updatedCart = [...state.cart];
    updatedCart[findIndexItem] = updatedItem;
  } else {
    // it removes the item from the cart if the amount is 0
    updatedCart = state.cart.filter((el) => el.id !== chosenItem.id);
  }
  console.log(updatedCart);
  return {
    cart: updatedCart,
    totalAmount: updatedTotalAmount,
  };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return addProductToCart(state, action);
    case "REMOVE":
      return removeItem(state, action);
    default:
      return state;
  }
};
