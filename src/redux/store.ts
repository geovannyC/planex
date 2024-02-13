import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import initialState from "./features/initialState";
import { jsonApi } from "./services/jsonApi";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    counterReducer,
    initialState,
    [userApi.reducerPath]: userApi.reducer,
    [jsonApi.reducerPath]: jsonApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([jsonApi.middleware, userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
