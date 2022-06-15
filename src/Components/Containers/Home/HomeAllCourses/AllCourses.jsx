import React from "react";
import HomeCourseCard from "../HomeCourseCard/HomeCourseCard";

import { Grid } from "@mui/material";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import {
  LinkContainer,
  MainContainer,
  PopularCourseHeading,
} from "./AllCourses.style";
import HomeTopCard from "../HomeTopCard/HomeTopCard";
import { useParams } from "react-router-dom";



const AllCourses = () => {
  const size={xs:"12", sm:"6" ,md:"6", lg:"3"}

   const { category } = useParams();
  return (
    <div>
      <BoxCom sx={{ marginTop: "60px" }}>
        <HomeTopCard />
        <MainContainer>
          <BoxCom sx={{ marginTop: "33px" }}>
            <PopularCourseHeading>{category?`${category} courses` :"Popular Courses"}</PopularCourseHeading>
          </BoxCom>
          <LinkContainer>{category?"3 Courses" :"13 Courses"}</LinkContainer>
        </MainContainer>
      </BoxCom>

  {    
          category   ?
         <Grid container spacing={2}>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>

                 
      </Grid>  :
          <Grid container spacing={2}>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
          <HomeCourseCard size={size}/>
                 
      </Grid>}
    </div>
  );
};

export default AllCourses;
