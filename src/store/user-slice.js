import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allUserData: [],
    isAuth: false,
    user: {},
    message: "",
    role:'',
}
const userslice = createSlice(
    {
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
            getAllUserData(state, action) {
                state.allUserData = action.payload.data;
            },
            setRole(state, action) {
                state.role = action.payload;
            },
            logoutUser(state, action){
                state.isAuth = false
            }
        }
    })
export const userActions = userslice.actions;
export default userslice;