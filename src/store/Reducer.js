export const ADD = "ADD";

const addProductToCart = (state, action) => {
  console.log("addProductCart from reducer");
  console.log('state:',state);
  console.log('action', action);
  console.log(state.cart, state); // product is undefined!
console.log(state.items);
  // const updatedCart = [...state.cart];
  // console.log(updatedCart); //not updated!
  // const updatedItemIndex = updatedCart.findIndex(
  //   (item) => item.id === product.id
  // );
  // if (updatedItemIndex < 0) {
  //   updatedCart.push({ ...product, quantity: 1 });
  // } else {
  //   const updatedItem = { ...updatedCart[updatedItemIndex] };
  //   updatedItem.quantity++;
  //   updatedCart[updatedItemIndex] = updatedItem;
  // }

  // return { ...state, cart: updatedCart };
  const updatedItems = state.cart.concat(action.item);
  console.log('updatedItems',updatedItems);
  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;
    return{
      cart: updatedItems,
      totalAmount: updatedTotalAmount,
    }
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return addProductToCart(state, action);
    // console.log('shopreducer switch')  it works!
    // console.log(state,action);
    default:
      return state;
  }
};
