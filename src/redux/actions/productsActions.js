import {
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../constants/actionTypes";

export const addToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
