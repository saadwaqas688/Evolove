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

const AllCourses = () => {
  return (
    <div>
      <BoxCom sx={{ marginTop: "60px" }}>
        <HomeTopCard />
        <MainContainer>
          <BoxCom sx={{ marginTop: "33px" }}>
            <PopularCourseHeading>Popular Courses</PopularCourseHeading>
          </BoxCom>
          <LinkContainer>13 Courses</LinkContainer>
        </MainContainer>
      </BoxCom>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <HomeCourseCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default AllCourses;
