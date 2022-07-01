import { createSlice } from "@reduxjs/toolkit";

const initialBtnState = {showCart: false};

const cartBtnSlice= createSlice({
    name: 'cartBtn',
    initialState: initialBtnState,
    reducers:{
        btnClicked(state){
            state.showCart= !state.showCart;
        }
        
    }
});

export const btnActions = cartBtnSlice.actions;

export default cartBtnSlice.reducer;