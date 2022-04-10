import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import navbarReducer from "./navbarReducer";

export default combineReducers({
  productsReducer,
  navbarReducer,
});
