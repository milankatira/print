import { combineReducers } from "redux";
import exampleReducer from "./themeReducer";

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
