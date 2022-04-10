import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../constants/actionTypes";

const initialState = {
  deliveryCharges: 120,
  cartItems: [],
  summary: { items: 0, price: 0 },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        summary: {
          ...state.summary,
          price: state.summary.price + parseFloat(action.payload.price),
          items: state.summary.items + 1,
        },
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        summary: {
          price: state.summary.price - parseFloat(action.payload.price),
          items: state.summary.items - 1,
        },
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        summary: { items: 0, price: 0 },
      };

    default:
      return state;
  }
};

export default productsReducer;
