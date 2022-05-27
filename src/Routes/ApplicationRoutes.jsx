import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AboutUs from "../Components/Containers/Auth/AboutUs/AboutUsMain/AboutUsMain";
import HomeOnBoarding from "../Components/Containers/Auth/HomeOnBoarding/HomeOnBoardingMain/HomeOnBoarding";
import ContactUs from "../Components/Containers/Auth/ContactUs/ContactUsMain/ContactUsMain"
import SignUp from "../Components/Containers/Auth/SignUp/SignUpMain/SignUp";
import Login from "../Components/Containers/Auth/Login/LoginMain/Login";
import ForgetPassword from "../Components/Containers/Auth/ForgetPassword/ForgetPasswordMain/ForgetPassword";
import VerifyCode from "../Components/Containers/Auth/VerifyCode/VerifyCodeMain/VerifyCode";
import VerifyCodeStepOne from "../Components/Containers/Auth/VerifyCodeStepOne/VerifyCodeStepOneMain/VerifyCodeStepOne";

const ApplicationRoutes = () => {
  return (
    <>
<BrowserRouter>
<Routes>    
  <Route path="/" element={<HomeOnBoarding/>} />
<Route path="/aboutUs" element={<AboutUs/>} />
<Route path="/contactUs" element={<ContactUs/>} />
<Route path="/signUp" element={<SignUp/>} />
<Route path="/login" element={<Login/>} />
<Route path="/forgotPassword" element={<ForgetPassword/>} />
<Route path="/VerifyCode" element={<VerifyCode/>} />
<Route path="/verifyCodeStepOne" element={<VerifyCodeStepOne/>} />






</Routes>
</BrowserRouter>
  </>
  );
};

export default ApplicationRoutes;


