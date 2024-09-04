import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUserData: [],
    pagination: {
        totalItems: 0,
        currentPage: 1,
        totalPages: 1,
        itemsPerPage: 10,
    },
    isAuth: false,
    user: {},
    message: "",
    role: '',
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserData(state, action) {
            state.user = action.payload;
            state.isAuth = true;
        },
        setUserData(state, action) {
            state.user = action.payload;
        },
        getAllUserDataStart(state) {
            state.loading = true;
            state.error = null;
        },
        getAllUserDataSuccess(state, action) {
            state.allUserData = action.payload.users;
            state.pagination = action.payload.pagination;
            state.loading = false;
        },
        getAllUserDataFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        setRole(state, action) {
            state.role = action.payload;
        },
        logoutUser(state) {
            state.isAuth = false;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;
