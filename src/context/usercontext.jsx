"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    setLoggedInUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const login = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setLoggedInUser(user);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
