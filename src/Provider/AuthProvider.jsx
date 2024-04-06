import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase,confiq";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null); 
  const [loader, setloader] = useState(true)

  const createUser = (email, password) => {
    setloader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singinUser = (email, password) => {
    setloader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setloader(true)
    return signOut(auth);
  };

  useEffect(() => {
    const onSubcribe = onAuthStateChanged(auth, (users) => {
      console.log("User is ", users);
      setuser(users);
      setloader(false)
    });

    return () => {
      onSubcribe();
    };
  }, []);

  const authInfo = { createUser, user, singinUser, logout, loader };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
