import {
  HANDLE_OPEN_CART,
  HANDLE_OPEN_FILTER,
  CLOSE_CART_AND_FILTER,
} from "../constants/actionTypes";

export const handleOpenFilter = () => ({
  type: HANDLE_OPEN_FILTER,
});

export const handleOpenCart = () => ({
  type: HANDLE_OPEN_CART,
});

export const closeCartAndFilter = () => ({
  type: CLOSE_CART_AND_FILTER,
});
