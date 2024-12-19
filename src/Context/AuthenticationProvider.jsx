import React, { useEffect, useState } from "react";
import { Authentication } from "./AuthenticateContext";

const AuthenticationProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(() => {
      // Retrieve the initial state from local storage
      const savedAuthState = localStorage.getItem("isAuthenticated");
      return savedAuthState ? JSON.parse(savedAuthState) : false;
    });
  
    useEffect(() => {
      // Save the authentication state to local storage whenever it changes
      localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);
  
    return (
      <Authentication.Provider value={{ isAuthenticated, setAuthenticated }}>
        {children}
      </Authentication.Provider>
    );
  };
  
  export default AuthenticationProvider;