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
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + action.item.amount,
    };
    updatedItems = [...state.cart];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
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
  const findIndexItem = state.cart.findIndex((item) => item.id === action.id);
  const chosenItem = state.cart[findIndexItem];
  chosenItem.amount--;
  let updatedCart;
  if (chosenItem.amount>0) {
    console.log('upper 0');
    const updatedItem = {
      ...chosenItem,
      amount: chosenItem.amount,
    };
    updatedCart = [...state.cart];
    updatedCart[findIndexItem] = updatedItem;
  } else {
    console.log('under 0');
    updatedCart = state.cart.filter(el=>el.id !== findIndexItem); // it does't work
  }
  console.log(updatedCart);
  const updatedTotalAmount = state.totalAmount - chosenItem.price;
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