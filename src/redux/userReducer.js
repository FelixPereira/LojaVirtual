
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {loginStart, loginFail, loginSuccess} = userSlice.actions;
export default userSlice.reducer;