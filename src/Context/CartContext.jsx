import { createContext, useState } from "react";

//context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(10);

  const add = () => {
    setCounter(counter + 1);
  };
  const subtract = () => {
    setCounter(counter - 1);
  };

  //Functions
  const data = { add, subtract, counter };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
