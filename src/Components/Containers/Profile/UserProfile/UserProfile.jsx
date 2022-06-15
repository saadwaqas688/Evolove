import { Grid } from "@mui/material";
import React, { useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import productImage from "../../../../assets/images/homeOnBoarding/productImage1.png";
import {
  AvatarName,
  AvatarWrapper,
  ButtonForDesktop,
  ButtonForSmallScreen,
  Count,
  Filter,
  FilterWrapper,
  Heading,
  MainWrapper,
  NameAndIconWrapper,
  ProfileButton,
  SettingText,
} from "./UserProfile.style ";
import ProductCard from "../../Shop/ProductCard/ProductCard";
import { Colors } from "../../../../config/palette";
import HomeCourseCard from "../../Home/HomeCourseCard/HomeCourseCard";
import ProfileImage from "../../../../assets/images/homeOnBoarding/profileImg.png";
import SettingIcon from "../../../../assets/icons/SettingIcon";
import BlogCard from "../../Blog/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { getBasePath } from "../../../../Utils/utils";

const UserProfile = () => {
  const [filter, setFilter] = useState("products");
  const [status, setStatus] = useState("Active");

  let { pathname } = useLocation();
  pathname=getBasePath(pathname)  

  const size = { sm: "6", md: "6", lg: "3" };
  function selectFilter(selectedTab) {
    setFilter(selectedTab);
  }



  return (
    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "60px", md: "0px" } }}>
      <Heading>Profile</Heading>
      <MainWrapper>
        {pathname === "coachProfile" ? (
          <BoxCom
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AvatarWrapper alt="Remy Sharp" src={ProfileImage} />
            <ButtonForDesktop>
              <ProfileButton
                variant="contained"
                href="/coachProfile/salesBoard"
                sx={{ width: "80%", marginLeft: "auto", marginRight: "0px" }}
              >
                Sales Board
              </ProfileButton>
              <ProfileButton
                variant="contained"
                href="/newSubmission"
                sx={{ marginTop: "20px", width: "100%" }}
              >
                New Submission
              </ProfileButton>
            </ButtonForDesktop>
          </BoxCom>
        ) : (
          <AvatarWrapper alt="Remy Sharp" src={ProfileImage} />
        )}
        <NameAndIconWrapper>
          <AvatarName>Jerome Bell</AvatarName>
          <Link to={`/${pathname}/setting`} style={{ textDecoration: "none" }}>
            <BoxCom
              sx={{
                display: "flex",
                marginTop: { xs: "18px", sm: "0px" },
                marginBottom: { xs: "18px", sm: "0px" },
              }}
            >
              <SettingIcon />
              <SettingText>Profile Settings</SettingText>
            </BoxCom>
            </Link>
            {pathname === "coachProfile" && (
              <ButtonForSmallScreen>
                <ProfileButton variant="contained" href="/coachProfile/salesBoard" sx={{ width: "100%" }}>
                  Sales Board
                </ProfileButton>
                <ProfileButton
                  variant="contained"
                  sx={{ marginTop: "20px", width: "100%" }}
                >
                  New Submission
                </ProfileButton>
              </ButtonForSmallScreen>
            )}
        </NameAndIconWrapper>
      </MainWrapper>
      {pathname === "coachProfile" ? (
        <FilterWrapper>
          <Filter
            onClick={() => {
              setStatus("Active");
            }}
            component="span"
            sx={{ color: status === "Active" && Colors.info }}
          >
            Active
          </Filter>
          <Filter
            onClick={() => {
              setStatus("Submited");
            }}
            component="span"
            sx={{ color: status === "Submited" && Colors.info }}
          >
            Submited
          </Filter>
        </FilterWrapper>
      ) : (
        <FilterWrapper>
          <Filter
            onClick={() => {
              selectFilter("courses");
            }}
            component="span"
            sx={{ color: filter === "courses" && Colors.info }}
          >
            My Courses
          </Filter>
          <Filter
            onClick={() => {
              selectFilter("blogs");
            }}
            component="span"
            sx={{ color: filter === "blogs" && Colors.info }}
          >
            My Blogs
          </Filter>
          <Filter
            onClick={() => {
              selectFilter("products");
            }}
            component="span"
            sx={{ color: filter === "products" && Colors.info }}
          >
            My Products
          </Filter>
        </FilterWrapper>
      )}
      {(filter === "courses" || pathname === "coachProfile") && (
        <>
          <Count>
            {pathname === "coachProfile" ? `${status} 3 Courses` : "Courses 3"}
          </Count>
          <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
          </Grid>
        </>
      )}
      {(filter === "blogs" || pathname === "coachProfile") && (
        <>
          <Count>
            {pathname === "coachProfile" ? `${status} 3 Blogs` : "Blogs 3"}
          </Count>
          <Grid container spacing={8} sx={{ paddingTop: "20px" }}>
            <BlogCard tag={pathname === "coachProfile" ? true : false} />
            <BlogCard tag={pathname === "coachProfile" ? true : false} />
            <BlogCard tag={pathname === "coachProfile" ? true : false} />
          </Grid>
        </>
      )}
      {(filter === "products" || pathname === "coachProfile") && (
        <>
          <Count>
            {pathname === "/coachProfile"
              ? `${status} 3 Products`
              : "Products 3"}
          </Count>
          <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
            <ProductCard size={size} image={productImage} />
            <ProductCard size={size} image={productImage} />
            <ProductCard size={size} image={productImage} />
            <ProductCard size={size} image={productImage} />
          </Grid>
        </>
      )}
    </BoxCom>
  );
};

export default UserProfile;
