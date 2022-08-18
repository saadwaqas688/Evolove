import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../config/Firebase/firebase";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
// const handleLogin = (val) => {
//   setLoggedIn(val);
// }
  useEffect(() => {
    const unsub =onAuthStateChanged(auth, (user) => {
      if (user) {
        // localStorage.getItem("auth");
        // handleLogin(true)
        // setLoggedIn(true);
        // alert(user.uid)
      } else {
        setLoggedIn(false);
        // handleLogin(false)
      }
      return unsub
   
    });
  }, []);
  return loggedIn;
};

export default useAuth;
