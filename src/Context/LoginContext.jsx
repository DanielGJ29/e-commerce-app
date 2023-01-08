import { createContext, useReducer } from "react";

const LoginContext = createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Login_user":
      return {
        ...state,
        user: action.payload,
      };

    default:
      break;
  }
};

const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    state,
    dispatch,
  };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};
export default LoginContext;
export { LoginProvider };
