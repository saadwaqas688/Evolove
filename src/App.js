// import ErrorPage from './Components/UI/ErrorPage/ErrorPage';
import React, { useEffect } from "react";
import ApplicationRoutes from "./Routes/ApplicationRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/Firebase/firebase";
import Snackbar from "./Components/Providers/Snackbar";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
      } 
    });
  }, []);
  return (
    <Snackbar>
      <ApplicationRoutes />
    </Snackbar>
  );
}

export default App;
