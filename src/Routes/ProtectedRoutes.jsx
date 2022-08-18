import React from "react";
import useAuth from "./../Utils/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const loggedIn = useAuth();
  if (loggedIn) {
    return <Navigate to="home" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
