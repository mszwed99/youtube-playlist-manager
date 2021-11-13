import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './Auth/authSlice';
import { AuthStateI } from './Auth/authSlice.types';

const rootReducer = combineReducers({
  auth: authSlice,
});

export interface RootState {
  auth: AuthStateI,
}
export default rootReducer;
