import React , {useReducer} from "react";
import CartContext from "./cart-context";
import { shopReducer, ADD } from "./Reducer";
import AvailableFood from '../components/AvailableFood'

const GlobalState = (props)=>{
    const products = AvailableFood;

    const [cartState, dispatch]=useReducer(shopReducer,{cart:[]});

    const addProductToCart = product =>{
        dispatch({type: ADD , item:product});
    }
    
    return(
        <CartContext.Provider value={
            {
                items:cartState.items,
                product:products,
                cart: cartState.cart, //cart state is undefined!!! //it should be cartState.cart but it doesn't work
                addProductToCart:addProductToCart,
            }
        }>
{props.children}
        </CartContext.Provider>
    )
}
export default GlobalState;