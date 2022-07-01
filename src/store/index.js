import { configureStore } from "@reduxjs/toolkit";
import cartBtnReducer from './cartBtn';

const store = configureStore({
    reducer: {cartBtn: cartBtnReducer },
});

export default store;