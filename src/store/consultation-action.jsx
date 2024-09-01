
import axiosInstance from "../helper/AxiosInstance";
import { consultationActions } from "./consultation-Slice";
import { uiActions } from "./uiaction-slice";

// Async action to create a new consultation
export const createConsultation = (data) => {
    console.log("createConsultation--->",data)
    return async (dispatch) => {
        dispatch(consultationActions.fetchConsultationStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.post('/consultation', data);
            dispatch(consultationActions.fetchConsultationSuccess(response.data.data));

            // Optionally show success notification
            dispatch(uiActions.showNotification({
                status: "success",
                message: "Consultation created successfully!"
            }));
        } catch (error) {
            dispatch(consultationActions.fetchConsultationFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};

// Async action to get consultation by ID
export const getConsultationById = (id) => {
    return async (dispatch) => {
        dispatch(consultationActions.fetchConsultationStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.get(`/consultation/${id}`);
            dispatch(consultationActions.fetchConsultationSuccess(response.data.data));
        } catch (error) {
            dispatch(consultationActions.fetchConsultationFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};

// Async action to get all consultations
export const getAllConsultations = () => {
    return async (dispatch) => {
        dispatch(consultationActions.fetchConsultationStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.get('/consultation/all');
            dispatch(consultationActions.setConsultations(response.data.data.consultations));
        } catch (error) {
            dispatch(consultationActions.fetchConsultationFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};

// Async action to update consultation by ID
export const updateConsultationById = (id, data) => {
    return async (dispatch) => {
        dispatch(consultationActions.fetchConsultationStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.put(`/consultation/${id}`, data);
            dispatch(consultationActions.updateConsultation(response.data.data));

            dispatch(uiActions.showNotification({
                status: "success",
                message: "Consultation updated successfully!"
            }));
        } catch (error) {
            dispatch(consultationActions.fetchConsultationFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};
