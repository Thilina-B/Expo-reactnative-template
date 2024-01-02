import { createSlice } from "@reduxjs/toolkit";
import WooCommerceAPI from "react-native-woocommerce-api";

const initialState = {
  domain: "example.com",
  key: "0",
  secret: "0",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      //console.log(action.payload);
      login(state, action.payload);
    },
    logout: () => {},
  },
});

const login = (state, payload) => {
  const { domain, key, secret } = payload;

  const WooApi = new WooCommerceAPI({
    url: domain,
    ssl: true,
    consumerKey: key,
    consumerSecret: secret,
    wpAPI: true,
    version: "wc/v3",
    queryStringAuth: true,
  });

  WooApi.get("orders", { per_page: 1 })
    .then((data) => {
      console.log(data);
      updateAuthState(state, payload);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateAuthState = (state, { domain, key, secret }) => {
  state.domain = domain;
  state.key = key;
  state.secret = secret;
};

export const { auth, logout } = authSlice.actions;
export default authSlice.reducer;
