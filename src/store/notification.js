import { createSlice } from "@reduxjs/toolkit";


const initialState={notification:null};

const notification=createSlice({
    name:"notifications",
    initialState,
    reducers:{
      setNotification(state,action) {
        state.notification={
            status:action.payload.status
        }
      }  
    }
});

export const notificationAction = notification.actions;

export default notification;