import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AboutUs from "../Components/Containers/Auth/AboutUs/AboutUsMain/AboutUsMain";
import HomeOnBoarding from "../Components/Containers/Auth/HomeOnBoarding/HomeOnBoardingMain/HomeOnBoarding";

const ApplicationRoutes = () => {
  return (
    <>
<BrowserRouter>
<Routes>    
  <Route path="/" element={<HomeOnBoarding/>} />
<Route path="/aboutUs" element={<AboutUs/>} />
</Routes>
</BrowserRouter>
  </>
  );
};

export default ApplicationRoutes;


