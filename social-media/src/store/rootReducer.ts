import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT, AUTH_ERROR } =
  authSlice.actions;

export const authReducer = authSlice.reducer;

export const rootReducer = combineReducers({
  auth: authReducer,
});
