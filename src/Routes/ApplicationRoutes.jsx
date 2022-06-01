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
import Test from "../Test/Test";
import AppWrapper from "../Components/UI/AppWrapper/AppWrapperMain/AppWrapper";

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
<Route element={<AppWrapper />}>
<Route path="/test" element={<Test/>} />
{/*<Route path="/wallet" element={<Test/>} />
<Route path="/shop" element={<Test/>} />

<Route path="/home" element={<Test/>} /> 

 <Route path="/blogs" element={<Test/>} />
<Route path="/todo" element={<Test/>} />
<Route path="/favorite" element={<Test/>} />
<Route path="/moonCalender" element={<Test/>} />
<Route path="/categories/consciousbusiness" element={<Test/>} />
<Route path="/categories/naturalmedicine" element={<Test/>} /> */}

</Route>















</Routes>
</BrowserRouter>
  </>
  );
};

export default ApplicationRoutes;


