import { shopTypes } from "../types/shop.types";

export const handleShowProductsAction = (data) => {
  return {
    type: shopTypes.SHOW_PRODUCTS,
    payload: data,
  };
};

export const handleAddProductsAction = (product) => {
  return {
    type: shopTypes.ADD_TO_CART,
    payload: product,
  };
};

export const handleDeleteProductsAction = ({ id, price }) => {
  return {
    type: shopTypes.DELETE_FROM_CART,
    payload: { id, price },
  };
};
