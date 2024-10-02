// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if token exists

  // If no token is found, redirect to the register page
  if (!token) {
    return <Navigate to="/register" />;
  }

  // If token exists, render the protected component
  return children;
};

export default Protected;
