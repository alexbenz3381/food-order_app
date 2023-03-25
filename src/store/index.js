import { configureStore, createSlice } from "@reduxjs/toolkit";

import toggleCart from "./CartToggleHandler";
import notification from "./notification";

const initialState={
items:[],
totalPrice:0,
totalAmount:0,
changed:false,
}


const cartData=createSlice({
    name:"cart_data",
    initialState,
    reducers:{
        replaceCart(state,action) {
         state.items=action.payload.items||[];
         state.totalPrice=action.payload.totalPrice||0;
         state.totalAmount=action.payload.totalAmount||0;
        },
        addToCart(state,action) {
           const existingItemIndex=state.items.findIndex((items)=>items.id===action.payload.id );
           let existingItem=state.items[existingItemIndex];
           state.totalPrice=state.totalPrice+action.payload.price*action.payload.amount;
           state.totalAmount=state.totalAmount+Number(action.payload.amount);
           state.changed=true;
           let updatedItem={};
           if(!existingItem){
            state.items.push({
                id:action.payload.id,
                name:action.payload.name,
                price:action.payload.price,
                amount:action.payload.amount||1,
            })
           }else{
            updatedItem={...existingItem,amount:existingItem.amount+Number(action.payload.amount)}
            state.items[existingItemIndex]=updatedItem;
            
           }
           console.log(initialState)
        
        },
        removeFromCart(state,action) {
            const existingItemIndex=state.items.findIndex(item => item.id===action.payload.id);
            const existingItem=state.items[existingItemIndex];
            console.log(existingItem.price)
            state.totalPrice=state.totalPrice-existingItem.price;
            console.log(action.payload.price)
            state.totalAmount--;
            if(existingItem.amount===1){
            state.items=state.items.filter(item => item.id!==existingItem.id) 
            }else{
                existingItem.amount--;
            }
        }
    }
});

export const cartDataActions=cartData.actions;

const store= configureStore({reducer:{cart:toggleCart.reducer,cartData:cartData.reducer,notifi:notification.reducer}});

export default store;