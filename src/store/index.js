
import { configureStore } from "@reduxjs/toolkit";
import consultationReducer from "./consultation-Slice";
import uiactionSlice from "./uiaction-slice";

const store = configureStore({
    reducer: {
        consultation: consultationReducer,
        uiActions: uiactionSlice.reducer, // Include the UI slice
    },
});

export default store;
