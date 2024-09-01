import axiosInstance from "../helper/AxiosInstance";
import { queryActions } from "./query-slice";
import { uiActions } from "./uiaction-slice";

// Async action to create a new query
export const createQuery = (data) => {
    return async (dispatch) => {
        dispatch(queryActions.fetchQueryStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.post('/query', data);
            dispatch(queryActions.fetchQuerySuccess(response.data.data));

            // Optionally show success notification
            dispatch(uiActions.showNotification({
                status: "success",
                message: "Query created successfully!"
            }));
        } catch (error) {
            dispatch(queryActions.fetchQueryFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};

// Async action to get query by ID
export const getQueryById = (id) => {
    return async (dispatch) => {
        dispatch(queryActions.fetchQueryStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.get(`/query/${id}`);
            dispatch(queryActions.fetchQuerySuccess(response.data.data));
        } catch (error) {
            dispatch(queryActions.fetchQueryFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};

// Async action to get all queries
export const getAllQueries = () => {
    return async (dispatch) => {
        dispatch(queryActions.fetchQueryStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.get('/query');
            dispatch(queryActions.setQueries(response.data.data));
        } catch (error) {
            dispatch(queryActions.fetchQueryFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};

// Async action to update query by ID
export const updateQueryById = (id, data) => {
    return async (dispatch) => {
        dispatch(queryActions.fetchQueryStart());
        dispatch(uiActions.toggleLoader());

        try {
            const response = await axiosInstance.put(`/query/${id}`, data);
            dispatch(queryActions.updateQuery(response.data.data));

            dispatch(uiActions.showNotification({
                status: "success",
                message: "Query updated successfully!"
            }));
        } catch (error) {
            dispatch(queryActions.fetchQueryFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};


// Async action to delete a query by ID
export const deleteQueryById = (id) => {
    return async (dispatch) => {
        dispatch(queryActions.fetchQueryStart());
        dispatch(uiActions.toggleLoader());

        try {
            await axiosInstance.delete(`/query/${id}`);
            dispatch(queryActions.deleteQuerySuccess(id));

            // Optionally show success notification
            dispatch(uiActions.showNotification({
                status: "success",
                message: "Query deleted successfully!"
            }));
        } catch (error) {
            dispatch(queryActions.deleteQueryFailure(error?.response?.data?.message || error?.message));
            dispatch(uiActions.showNotification({
                status: "failure",
                message: error?.response?.data?.message || error?.message
            }));
        } finally {
            dispatch(uiActions.toggleLoader());
        }
    };
};

