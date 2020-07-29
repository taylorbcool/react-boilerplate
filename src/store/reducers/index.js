import { combineReducers } from "redux";
import { counter } from "./counter";
import { selector } from "./selector";

// Using combine reducers to break up reducers into different files
const rootReducer = combineReducers({
  counter,
  selector
});

export default rootReducer