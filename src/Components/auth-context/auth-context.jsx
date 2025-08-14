import React, { useState, useEffect, useContext } from "react";

export const AuthContext = React.createContext({
  isRight: false,
  setIsRight: () => {},
  userDataHandler: () => {},
  logoutHandler: () => {},
});
let usernameData = "";
let passwordData = "";
export const AuthProvider = (props) => {
  const [isRight, setIsRight] = useState(false);
  const userDataHandler = (userData) => {
    usernameData = userData.username;
    passwordData = userData.password;
    const username = userData.username;
    const password = userData.password;
    if (username === "username123" && password === "password123") {
      setIsRight(true);
    }
  };
  useEffect(() => {
    if (usernameData === "username123" && passwordData === "password123") {
      console.log("WORKING");
      localStorage.setItem("SaveState", "true");
      setIsRight(true);
    } else {
      let key = localStorage.getItem("SaveState");
      if (key === "true") {
        setIsRight(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usernameData, passwordData]);
  const logoutHandler = () => {
    localStorage.removeItem("SaveState");
    setIsRight(false);
  };
  return (
    <AuthContext
      value={{
        isRight: isRight,
        setIsRight,
        userDataHandler: userDataHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext>
  );
};
export const useAuth = () => useContext(AuthContext);
