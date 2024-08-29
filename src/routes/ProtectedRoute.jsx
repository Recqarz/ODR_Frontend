import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, permittedUser }) => {
  const isAuthenticated ="" /* logic to check if the user is authenticated */;
  const userRole ="" /* logic to get the current user's role */;

  if (!isAuthenticated || (permittedUser.length > 0 && !permittedUser.includes(userRole))) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
