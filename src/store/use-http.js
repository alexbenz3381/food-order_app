import { useState } from "react";
import { cartDataActions } from ".";
import { notificationAction } from "./notification";
export const fetchCartData = () => {

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://react-http-3cb44-default-rtdb.firebaseio.com/cart.json");
      if (!response.ok) {
        throw new Error("fetching data failed");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartDataActions.replaceCart(cartData)
      );
    } catch (error) {
     console.log(error)
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    console.log(cart);
    // dispatch(notificationAction.setNotification("pending"))
    const sendData = async () => {
      console.log("in main")
      const response = await fetch("https://react-http-3cb44-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error("sending data failed");
      }
    };
    try {
      await sendData();
      console.log("checking")
     dispatch(notificationAction.setNotification("success"))
    } catch (error) {
      dispatch(notificationAction.setNotification("error"))
      console.log(error.message)
    }
  };
};
