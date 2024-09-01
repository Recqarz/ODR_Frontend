import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    message: {},
    active: false,
    loading: false

}

const uiactionSlice = createSlice({
    name: "uiaction",
    initialState,
    reducers: {
        toggle(state) {
            state.active = !state.active

        },
        showNotification(state, action) {
            state.message = ({
                status: action.payload.status,
                message: action.payload.message
            })
        },
        closeNotification(state) {
            state.message = null
        },
        toggleLoader(state) {
            state.loading = !state.loading

        }

    }
})
export const uiActions = uiactionSlice.actions;
export default uiactionSlice;