import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../Components/Containers/Auth/AboutUs/AboutUsMain/AboutUsMain";
import HomeOnBoarding from "../Components/Containers/Auth/HomeOnBoarding/HomeOnBoardingMain/HomeOnBoarding";
import ContactUs from "../Components/Containers/Auth/ContactUs/ContactUsMain/ContactUsMain";
import SignUp from "../Components/Containers/Auth/SignUp/SignUpMain/SignUp";
import Login from "../Components/Containers/Auth/Login/LoginMain/Login";
import ForgetPassword from "../Components/Containers/Auth/ForgetPassword/ForgetPasswordMain/ForgetPassword";
import VerifyCode from "../Components/Containers/Auth/VerifyCode/VerifyCodeMain/VerifyCode";
import VerifyCodeStepOne from "../Components/Containers/Auth/VerifyCodeStepOne/VerifyCodeStepOneMain/VerifyCodeStepOne";
import Test from "../Test/Test";
import AppWrapper from "../Components/UI/AppWrapper/AppWrapperMain/AppWrapper";
import AllCourses from "../Components/Containers/Home/HomeAllCourses/AllCourses";
import AllCoaches from "../Components/Containers/Home/HomeAllCoaches/AllCoaches";
import Home from "../Components/Containers/Home/HomeMain/Home";
import AllBlogs from "../Components/Containers/Blog/BlogMain/AllBlogs";
import SingleBlog from "../Components/Containers/Blog/SingleBlog/SingleBlog";
import SingleCourseContainer from "../Components/Containers/Courses/SingleCourseMain/SingleCourseContainer";
import { Search } from "../Components/UI/SearchBar/Search/search";
const ApplicationRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeOnBoarding />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
          <Route path="/VerifyCode" element={<VerifyCode />} />
          <Route path="/verifyCodeStepOne" element={<VerifyCodeStepOne />} />
          <Route element={<AppWrapper />}>
            <Route path="/home" element={<Home />} />
            <Route path="/allCourses" element={<AllCourses />} />
            <Route path="/allCoaches" element={<AllCoaches />} />
            <Route path="/test" element={<Test />} />
            <Route path="/search" element={<Search />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/blogs/singleBlog" element={<SingleBlog />} />
            <Route path="/singleCourse" element={<SingleCourseContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ApplicationRoutes;
