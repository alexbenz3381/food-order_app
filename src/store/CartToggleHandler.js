import { createSlice } from "@reduxjs/toolkit";

const initialState={cartToggle:false}

const toggleCart=createSlice({
    name:"cart toggle",
    initialState,
    reducers:{
       setToggle(state) {
        state.cartToggle=!state.cartToggle;
       }
    }
});




export const toggleCartActions=toggleCart.actions;

export default toggleCart;