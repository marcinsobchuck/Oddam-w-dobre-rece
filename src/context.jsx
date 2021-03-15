import React, { useState, useEffect } from "react";
import fire from "./firebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  const register = (email, password) => {
    fire.auth().createUserWithEmailAndPassword(email, password);
  };

  const logIn = (email, password) => {
    fire.auth().signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    fire.auth().signOut();
  };

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  });

  return (
    <AuthContext.Provider
      value={{
        activeStep,
        setActiveStep,
        currentUser,
        register,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
