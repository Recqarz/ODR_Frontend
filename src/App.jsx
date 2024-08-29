import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import routes from './routes/index';

function App() {
  return (
      <Routes>
        {routes.map((route, index) => {
          if (route.protected) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.protectedRoute permittedUser={route.permittedUser}>
                    <route.component />
                  </route.protectedRoute>
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
  );
}

export default App;
