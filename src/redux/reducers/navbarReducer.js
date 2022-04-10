import {
  HANDLE_OPEN_CART,
  HANDLE_OPEN_FILTER,
  CLOSE_CART_AND_FILTER,
} from "../constants/actionTypes";

const initialState = {
  cart: false,
  filter: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_OPEN_CART:
      return {
        ...state,
        cart: !state.cart,
        filter: false,
      };

    case HANDLE_OPEN_FILTER:
      return {
        ...state,
        filter: !state.filter,
        cart: false,
      };

    case CLOSE_CART_AND_FILTER:
      return {
        ...state,
        cart: false,
        filter: false,
      };

    default:
      return state;
  }
};

export default navbarReducer;
