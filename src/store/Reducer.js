export const ADD = 'ADD'

const addProductToCart = (product, state) => {
    console.log('addProductCart from reducer');
    console.log(product,state); // product is undefined!

  const updatedCart = [...state.cart];
  console.log(updatedCart); //not updated!
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return addProductToCart(action.product, state)
      // console.log('shopreducer switch')  it works!
    default:
      return state;
  }
};
