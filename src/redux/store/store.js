import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

//Reducers
import { darkmodeReducer } from "../reducer/darkmode.reducer";
import { userReducer } from "../reducer/user.reducer";
import { shopReducer } from "../reducer/shop.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  darkmode: darkmodeReducer,
  user: userReducer,
  shop: shopReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
