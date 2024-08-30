import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes/index';
import ProtectedRoute from './routes/ProtectedRoute';


function App() {
  return (
      <Routes>
        {routes.map((route, index) => {
          console.log(`Rendering route: ${route.path}, protected: ${route.protected}`);
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
  );
}

export default App;
