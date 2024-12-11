"use client";
import React, { createContext, useContext, useState } from "react";
import { login, logout } from "./authService";

const AuthContext = createContext({
  isAuthenticated: false,
  authenticate: () => {},
  signout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== "undefined" && localStorage.getItem("accessToken") ? true : false
  );

  const authenticate = async ({ email, password }) => {
    const data = await login(email, password);
    localStorage.setItem("accessToken", data.access_token);
    localStorage.setItem("refreshToken", data.refresh_token);
    setIsAuthenticated(true);
    return true;
  };

  const signout = async () => {
    await logout();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
