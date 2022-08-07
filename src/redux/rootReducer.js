import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from './cartRedux';
import userSlice from './userReducer';

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice
});

export default rootReducer;
