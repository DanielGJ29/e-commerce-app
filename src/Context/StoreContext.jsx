import { useEffect, createContext, useReducer } from "react";

//Hook
import { useFetchData } from "../Hooks/useFetchData";

const StoreContext = createContext();

//Reducer
const initialState = {
  list: [],
  cart: [],
  total: 0,
  color: "primary",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "READ_PRODUCTS":
      return {
        ...state,
        list: action.payload,
      };

    case "ADD_TO_CART":
      const exist = state.cart.find((p) => p.id === action.payload.id);
      if (exist) {
        const dataCart = state.cart.filter(
          (item) => item.id === action.payload.id
        );
        const newQuantity = dataCart[dataCart.length - 1].quantity;
        const newTotalPrice = dataCart.reduce(
          (acc, item) => acc + item.price,
          0
        );
        const resultTotalPrice = dataCart[0].price + newTotalPrice;

        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: newQuantity + action.payload.quantity,
              totalPrice: resultTotalPrice,
            },
          ],

          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: 1,
              totalPrice: action.payload.price,
            },
          ],
          total: state.total + action.payload.price,
        };
      }

    case "ADD_QUANTITY":
      const lastCurrentQuantity = state.cart[state.cart.length - 1].quantity;
      const currentQuantity = action.payload.quantity;
      const newData = [];
      //ADD  totalPrice to payload
      const newPayload = {
        ...action.payload,
        totalPrice: action.payload.price,
      };

      //Filter Product id
      const dataFilter = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      dataFilter.map((item) => newData.push(item));
      //REMOVE FROM CART
      if (currentQuantity < lastCurrentQuantity) {
        for (let i = 0; i < currentQuantity; i++) {
          newData.push(newPayload);
        }
        // ADD TO CART
      } else {
        for (let i = 0; i < action.payload.quantity; i++) {
          newData.push(newPayload);
        }
      }
      //ADD TOTALPRICE TO NEWDATA
      const uniqueCart = newData.filter(
        (item) => item.id === action.payload.id
      );

      const allTotalPrice = newData.reduce((acc, item) => acc + item.price, 0);

      const newTotalPrice = uniqueCart.reduce(
        (acc, item) => acc + item.price,
        0
      );
      const newItem = {
        ...action.payload,
        totalPrice: +newTotalPrice.toFixed(2),
      };

      newData.splice(-1, 1, newItem);

      return {
        ...state,
        cart: newData,
        total: +allTotalPrice.toFixed(2),
      };

    case "DELETE_FROM_CART":
      const currentProduct = state.cart.filter(
        (item) => item.id === action.payload
      );
      const lastTotalPrice =
        currentProduct[currentProduct.length - 1].totalPrice;

      let newTotal = state.total - lastTotalPrice;
      newTotal < 0 ? (newTotal = 0) : (newTotal = state.total - lastTotalPrice);

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: newTotal,
      };

    case "SEARCH":
      return state;

    case "DARKMODE":
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { fetchResult } = useFetchData(
    `${process.env.REACT_APP_API_STORE}products?limit=${12}`
  );

  useEffect(() => {
    const readProducts = () => {
      dispatch({
        type: "READ_PRODUCTS",
        payload: fetchResult,
      });
    };
    readProducts();
  }, [fetchResult]);

  const data = {
    state,
    dispatch,
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
export default StoreContext;
export { StoreProvider };
