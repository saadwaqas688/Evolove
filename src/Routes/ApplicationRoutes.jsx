import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../Components/Containers/Auth/AboutUs/AboutUsMain/AboutUsMain";
import HomeOnBoarding from "../Components/Containers/Auth/HomeOnBoarding/HomeOnBoardingMain/HomeOnBoarding";
import ContactUs from "../Components/Containers/Auth/ContactUs/ContactUsMain/ContactUsMain";
import SignUp from "../Components/Containers/Auth/SignUp/SignUpMain/SignUp";
import Login from "../Components/Containers/Auth/Login/LoginMain/Login";
import ForgetPassword from "../Components/Containers/Auth/ForgetPassword/ForgetPasswordMain/ForgetPassword";
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
import ShopMain from "../Components/Containers/Shop/ShopMain/ShopMain";
import AllTickets from "../Components/Containers/Shop/AllTickets/AllTickets";
import Favorite from "../Components/Containers/Favorite/FavoriteMain/Favorite";
import Wallet from "../Components/Containers/Wallet/WalletMain/Wallet";
import WalletWithDrawSuccess from "../Components/Containers/Wallet/WalletWithDrawSuccess/WalletWithDrawSuccess";
import WalletWithDraw from "../Components/Containers/Wallet/WalletWithDraw/WalletWithDraw";
import UserProfile from "../Components/Containers/Profile/UserProfile/UserProfile";
import EditProfile from "../Components/Containers/Profile/EditProfile/EditProfile";
import SalesBoard from "../Components/Containers/Profile/SalesBoard/SalesBoard";
import CheckEmail from "../Components/Containers/Auth/ChekEmail/CheckEmail";
import PasswordResetSuccess from "../Components/Containers/Auth/PasswordResetSuccess/PasswordResetSuccess";
import NewPassword from "../Components/Containers/Auth/NewPassword/NewPassword";
import Subscription from "../Components/Containers/Subscription/SubscriptionMain/Subscription";
import SubscriptionSuccess from "../Components/Containers/Subscription/SubscriptionSuccess/SubscriptionSuccess";
import SingleProduct from "../Components/Containers/Shop/SingleProduct/SingleProductMain/SingleProduct";
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
          <Route path="/VerifyCode" element={<CheckEmail />} />
          <Route path="/verifyCodeStepOne" element={<VerifyCodeStepOne />} />
          <Route path="/PasswordResetSuccess" element={<PasswordResetSuccess />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route element={<AppWrapper />}>
            <Route path="/home" element={<Home />} />
            <Route path="/allCourses" element={<AllCourses />} />
            <Route path="/allCoaches" element={<AllCoaches />} />
            <Route path="/search" element={<Search />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/blogs/singleBlog" element={<SingleBlog />} />
            <Route path="/singleCourse" element={<SingleCourseContainer />} />
            <Route path="/shop" element={<ShopMain />} />
            <Route path="/shop/tickets" element={<AllTickets />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/walletWithDrawSuccess" element={<WalletWithDrawSuccess />} />
            <Route path="/walletWithDraw" element={<WalletWithDraw />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/profile/setting" element={<EditProfile />} />
            <Route path="/coachProfile/setting" element={<EditProfile />} />
            <Route path="/coachProfile" element={<UserProfile />} />
            <Route path="/coachProfile/salesBoard" element={<SalesBoard />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/subscriptionSuccess" element={<SubscriptionSuccess />} />
            <Route path="/singleProduct" element={<SingleProduct />} />

            <Route path="/test" element={<Test />} />











          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ApplicationRoutes;
