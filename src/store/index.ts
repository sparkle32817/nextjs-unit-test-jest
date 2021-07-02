import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

import {
  bookSlice,
} from "./reducers";

const combinedReducer = combineReducers({
  book: bookSlice.reducer,
});

const reducer = (state, action): any => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else if (action.type == "authSlice/logout") {
    // storage.removeItem("persist:root");
    localStorage.clear();
    return combinedReducer(initialRootState, action);
  } else {
    return combinedReducer(state, action);
  }
};

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

const initialRootState = {
  ...store.getState(),
};

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): any => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
