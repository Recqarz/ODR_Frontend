import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, permittedUser }) => {
  // Temporary hardcoded values for testing
  const isAuthenticated = true; // Change to `false` to simulate an unauthenticated user
  const userRole = 'uaer'; // Change to test different roles

  if (!isAuthenticated || (permittedUser.length > 0 && !permittedUser.includes(userRole))) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
