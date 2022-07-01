import { configureStore } from "@reduxjs/toolkit";
import cartBtnReducer from './cartBtn';
import cartItemReducer from './cart-slice';

const store = configureStore({
    reducer: {cartBtn: cartBtnReducer, cartItem: cartItemReducer },
});

export default store;