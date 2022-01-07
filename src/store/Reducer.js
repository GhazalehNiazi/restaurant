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

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return addProductToCart(state, action);
    default:
      return state;
  }
};
