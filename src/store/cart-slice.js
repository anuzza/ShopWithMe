import { createSlice } from "@reduxjs/toolkit";

itemInitialState = {items: [], totalQuantity: 0}

const cartSlice = createSlice({
    name: 'cartItem',
    initialState: {},
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem= state.item.find(item=>item.id===newItem.id);
            if(!existingItem){
                state.items.push(
                    { itemId: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price,
                    name: newItem.title
                    }
                );


            }else{
                existingItem.quantity++;
                existingItem.totalPrice= existingItem.totalPrice + newItem.price; 
            }
        

        
        },
        removeItemFromCart(){}

    }
})