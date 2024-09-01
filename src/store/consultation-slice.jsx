// D:\ODR\ODR_Frontend\src\store\consultation-slice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    consultations: [],
    consultation: null,
    loading: false,
    error: null,
};

const consultationSlice = createSlice({
    name: "consultation",
    initialState,
    reducers: {
        fetchConsultationStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchConsultationSuccess(state, action) {
            state.consultation = action.payload;
            state.loading = false;
        },
        fetchConsultationFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        setConsultations(state, action) {
            state.consultations = action.payload;
            state.loading = false;
        },
        updateConsultation(state, action) {
            const index = state.consultations.findIndex(
                (consultation) => consultation._id === action.payload._id
            );
            if (index !== -1) {
                state.consultations[index] = action.payload;
            }
            state.loading = false;
        },
    },
});

export const consultationActions = consultationSlice.actions;
export default consultationSlice.reducer;
