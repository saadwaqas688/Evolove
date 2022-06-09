import { Grid } from "@mui/material";
import React, { useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import productImage from "../../../../assets/images/homeOnBoarding/productImage1.png";
import { AvatarName, AvatarWrapper, Count, Filter, FilterWrapper, Heading, MainWrapper,NameAndIconWrapper, SettingText } from "./UserProfile.style ";
import ProductCard from "../../Shop/ProductCard/ProductCard";
import { Colors } from "../../../../config/palette";
import HomeCourseCard from "../../Home/HomeCourseCard/HomeCourseCard";
import ProfileImage from"../../../../assets/images/homeOnBoarding/profileImg.png"
import SettingIcon from "../../../../assets/icons/SettingIcon";
import BlogCard from "../../Blog/BlogCard/BlogCard";

const UserProfile = () => {
  const [filter, setFilter] = useState("courses");
  const size = { sm: "6", md: "6", lg: "3" };
  function selectFilter(selectedTab) {
    setFilter(selectedTab);
  }

  function checkSpacing() {
    if (filter === "courses") {
      return 2;
    } else if(filter==="products") {
      return 2;
    }else{
      return 8
    }
  }
  return (
    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "60px", md: "0px" } }}>
      <Heading>Profile</Heading>
      <MainWrapper>
        <AvatarWrapper  alt="Remy Sharp" src={ProfileImage} />
        <NameAndIconWrapper >
        <AvatarName > 
         Jerome Bell
        </AvatarName >
        <BoxCom sx={{display:"flex",marginTop:{xs:"18px",sm:"0px"},marginBottom:{xs:"18px",sm:"0px"}}}>
        <SettingIcon/>
        <SettingText>
           Profile Settings
        </SettingText>
        </BoxCom>
        </NameAndIconWrapper>
        </MainWrapper>   
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
        My  Blogs
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
      <Count>
          3 Courses
          </Count>
      <Grid container spacing={checkSpacing()} sx={{ paddingTop: "20px" }}>
        {filter === "products" && (
          <>
            <ProductCard size={size} image={productImage} />
            <ProductCard size={size} image={productImage} />
            <ProductCard size={size} image={productImage} />
            <ProductCard size={size} image={productImage} />
          </>
        )}
        {filter === "courses" && (
          <>
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
          </>
        )}
        {filter === "blogs" && (
          <>
          <BlogCard />
          <BlogCard />

          <BlogCard/>
          </>
        )}
      </Grid>
    </BoxCom>
  );
};

export default UserProfile;
