import { loginFailure, loginStart, loginSuccess } from "./userReducer"
import {publicRequest} from '.././requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try{
    const res = await publicRequest.post('auth/login', user);
    dispatch(loginSuccess(res.data));
    console.log(res.data)
  } catch(err) {
    dispatch(loginFailure());
    console.log(err.response.data);
  }
}