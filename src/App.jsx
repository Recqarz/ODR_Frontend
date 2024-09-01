import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes/index';
import ProtectedRoute from './routes/ProtectedRoute';
import PopupNotification from './pages/PopupNotification';
import { useSelector } from 'react-redux';


function App() {
  const  notification= useSelector((state) => state.uiActions.message)

  return (
    <>
      {notification && (
        <PopupNotification status={notification?.status} message={notification?.message} />
      )}
      <Routes>
        {routes.map((route, index) => {
          if (route.protected) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute permittedUser={route.permittedUser}>
                    <route.component />
                  </ProtectedRoute>
                }
              />
            );
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </>

  );
}

export default App;
