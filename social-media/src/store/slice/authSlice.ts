import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../types/login";

const initialAuthState: IAuth = {
  id: 0,
  fullname: "",
  username: "",
  email: "",
  profile: "",
  sampul: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const { data, token } = action.payload;
      localStorage.setItem("token", token);
      const user = {
        id: data.id,
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        profile: data.profile,
        sampul: data.sampul,
      };
      return user;
    },
    AUTH_CHECK: (_, action) => {
      const { id, fullname, username, email, profile, sampul } = action.payload;

      const user = {
        id,
        fullname,
        username,
        email,
        profile,
        sampul,
      };
      return user;
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
    },
    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },
  },
});
