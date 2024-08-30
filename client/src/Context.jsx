import React, { createContext, useState, useEffect } from 'react';
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userCookie = Cookies.get("user");
    setIsAuthenticated(userCookie !== undefined);
  }, []);

  const login = () => {
    Cookies.set("user", "true"); 
    setIsAuthenticated(true); 
  };

  const logout = () => {
    Cookies.remove("user"); 
    setIsAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
