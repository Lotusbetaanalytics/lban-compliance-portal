import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: {
    // postUserActive: postUserActiveReducer,
  },
  initialState,
});

export default store;
