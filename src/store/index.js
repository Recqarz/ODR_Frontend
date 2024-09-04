
import { configureStore } from "@reduxjs/toolkit";
import consultationReducer from "./consultation-Slice";
import uiactionSlice from "./uiaction-slice";
import userslice from "./user-slice";
import drawerSlice from "./drawerSlice";
import querySlice from "./query-slice";

const store = configureStore({
    reducer: {
        user: userslice.reducer,
        consultation: consultationReducer,
        querie: querySlice,
        uiActions: uiactionSlice.reducer, // Include the UI slice
        drawer: drawerSlice.reducer, // Include the UI slice
    },
});

export default store;
