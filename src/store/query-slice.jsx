import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    queries: [],
    query: null,
    loading: false,
    error: null,
};

const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        fetchQueryStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchQuerySuccess(state, action) {
            state.queries = action.payload;
            state.loading = false;
        },
        fetchQueryFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        setQueries(state, action) {
            state.queries = action.payload;
            state.loading = false;
        },
        deleteQuerySuccess(state, action) {
            state.queries = state.queries.filter(query => query._id !== action.payload);
            state.loading = false;
        },
        deleteQueryFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const queryActions = querySlice.actions;
export default querySlice.reducer;
