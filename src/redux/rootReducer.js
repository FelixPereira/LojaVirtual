import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from './cartRedux';

const rootReducer = combineReducers({
  cart: cartSlice
});

export default rootReducer;
