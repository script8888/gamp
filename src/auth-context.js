import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loading, setLoading] = useState(true);
  
  const history = useHistory();
  const [loggedIn, setLoggedin] = useState(false);
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    try {
    const data = localStorage.getItem('logged-in');
    setLoggedin(JSON.parse(data));
    setLoading(false);
    } catch(err) {
      console.log("ERROR MESSAGE FOR FIRST",err)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('logged-in', loggedIn)
  },[loggedIn])

  const login = () => {
    setTimeout(() => {
      setLoggedin(true);
    }, 500);
  };

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      setLoggedin(false);
    }, 1000);
  };

  const authContextValue = { login, loggedIn, logout, loading };
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
