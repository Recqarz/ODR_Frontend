
import { userActions } from "./user-slice";
import axiosInstance from "../helper/AxiosInstance";
import { uiActions } from "./uiaction-slice";

export const isAuthentication = (username, password) => {
    return async (dispatch) => {
        try {
            const data = await axiosInstance.post('/user/login', {
                email: username,
                password: password,
                
            });

            await localStorage.setItem("accessToken", data.data.data.accessToken)
            await localStorage.setItem("user", btoa(JSON.stringify(data.data.data.role)))

            await dispatch(userActions.getUserData(data.data.data));
            await dispatch(userActions.setRole(data.data.data.role));
            return data

        } catch (error) {
            dispatch(uiActions.showNotification(
                {
                    status: "failure",
                    message: error?.response?.data?.message || error?.message
                }

            ))
        }
    };
}

export const getUserDetails = () => {
    return async (dispatch) => {
      try {
        const data = JSON.parse(atob(localStorage.getItem("user")));

        dispatch(userActions.setRole(data));
      } catch (setRole) {
        dispatch(uiActions.showNotification(
            {
                status: "failure",
                message: 'Please Login again'
            }

        ))

      } 
    };
  };

export const logout = () => {
    return async (dispatch) => {
      try {
        await localStorage.clear();
        dispatch(userActions.setRole(''));
        dispatch(userActions.logoutUser(''));
        
        return true
      } catch (setRole) {
        dispatch(uiActions.showNotification(
            {
                status: "failure",
                message: 'Please Login again'
            }

        ))

      } 
    };
  };
export const registerUser = (body) => {
  return async (dispatch) => {
    try {
      const data = await axiosInstance.post("/user/register", body);
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: data.data.message,
        })
      );
      return true;
    } catch (error) {
      dispatch(uiActions.showNotification(
        {
            status: "failure",
            message: error?.response?.data?.message || error?.message
        }

    ))
    } 
  };
};


// Async action to fetch all users with pagination and user type filtering
export const getAllUsers = (page = 1, limit = 10, userType = '') => {
  return async (dispatch) => {
      dispatch(userActions.getAllUserDataStart());
      dispatch(uiActions.toggleLoader());

      try {
          const response = await axiosInstance.get(`/user/all/?page=${page}&limit=${limit}&user=${userType}`);
          // console.log(response.data.data.users)
          dispatch(userActions.getAllUserDataSuccess(response.data.data));
      } catch (error) {
          dispatch(userActions.getAllUserDataFailure(error?.response?.data?.message || error?.message));
          dispatch(uiActions.showNotification({
              status: "failure",
              message: error?.response?.data?.message || error?.message
          }));
      } finally {
          dispatch(uiActions.toggleLoader());
      }
  };
};
export const forgotPassword = (body, userId, hash) => {
  return async (dispatch) => {
    try {
      const data = await axiosInstance.post(`/user/verify/${userId}/${hash}`, body);
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: data.data.message,
        })
      );
      return true;
    } catch (error) {
      dispatch(uiActions.showNotification(
        {
            status: "failure",
            message: error?.response?.data?.message || error?.message
        }

    ))
    } 
  };
};

export const getForgotPasswordLink = (email) => {
  return async (dispatch) => {
    try {
      console.log(email,'===')
      const data = await axiosInstance.post(`/user/forget`, {email:email});
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: data.data.message,
        })
      );
      return true;
    } catch (error) {
      dispatch(uiActions.showNotification(
        {
            status: "failure",
            message: error?.response?.data?.message || error?.message
        }

    ))
    } 
  };
};