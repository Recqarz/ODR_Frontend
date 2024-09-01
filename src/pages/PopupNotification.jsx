import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/uiaction-slice';

const PopupNotification = ({ status, title, message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isCancelled = false;

    const showToast = () => {
      if (status === "success") {
        if (title) {
          toast.success(
            <>
              <div>{title}</div>
              <div>{message}</div>
            </>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    };

    if (message) {
      showToast();
    }

    const handleChange = () => {
      if (!isCancelled) {
        dispatch(uiActions.closeNotification());
      }
    };

    const timeoutId = setTimeout(handleChange, 5000);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [status, title, message, dispatch]);

  return <ToastContainer autoClose={3000} limit={1} hideProgressBar style={{ zIndex: 9999 }} />;
};

export default PopupNotification;
