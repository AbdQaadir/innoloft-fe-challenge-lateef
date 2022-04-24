import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import configurationReducer from "./features/configuration/configurationSlice";
import trlReducer from "./features/trl/trlSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    sidebar: sidebarReducer,
    configuration: configurationReducer,
    trl: trlReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
