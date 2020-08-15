import { combineReducers } from "redux";
import ExReducer from "./ExReducer";

const RootReducer = combineReducers({
  reduxReducerData: ExReducer,
});

export default RootReducer;
