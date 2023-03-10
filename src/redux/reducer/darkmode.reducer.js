import { darkmodeTypes } from "../types/darkmode.types";

const initialState = {
  color: "primary",
};

export const darkmodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case darkmodeTypes.HEADER_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
