import { createSlice } from "@reduxjs/toolkit";

const initialBtnState = {showCart: false, notification: null};

const cartBtnSlice= createSlice({
    name: 'cartBtn',
    initialState: initialBtnState,
    reducers:{
        btnClicked(state){
            state.showCart= !state.showCart;
        },
        showNotification(state, action){
            state.notification= {status: action.payload.status, title: action.payload.title, message: action.payload.message }


        }

        
    }
});

export const btnActions = cartBtnSlice.actions;

export default cartBtnSlice.reducer;