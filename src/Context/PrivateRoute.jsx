import React, { useContext } from "react";
import { Navigate } from "react-router";
import { Authentication } from "./AuthenticateContext";

const PrivateRoute = ({ element: Component}) => {
  const { isAuthenticated } = useContext(Authentication);
  return isAuthenticated ? <Component  /> : <Navigate to="/login" />;
};

export default PrivateRoute;
