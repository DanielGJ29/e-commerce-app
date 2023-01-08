import { shopTypes } from "../types/shop.types";

const initialState = {
  list: [],
  cart: [],
  total: 0,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.SHOW_PRODUCTS:
      return { ...state, list: action.payload };

    case shopTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
