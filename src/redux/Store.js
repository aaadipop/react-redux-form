import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from 'redux-thunk';

const initialState = {};

export const reduxStore = createStore(
  RootReducer,
  initialState,
  applyMiddleware(thunk)
);
