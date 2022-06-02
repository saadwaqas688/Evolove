import React from "react";
import { Grid } from "@mui/material";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { LinkContainer, MainContainer, PopularCourseHeading } from "./AllCoaches.style";
import HomeTopCard from "../HomeTopCard/HomeTopCard";
import HomeCoachcom from "../HomeCoachCom/HomeCoachCom";
const AllCoaches = () => {
  return (
    <div>
    <BoxCom sx={{ marginTop: "60px" }}>
        <HomeTopCard />
        <MainContainer >
          <BoxCom sx={{ marginTop: "33px" }}>
            <PopularCourseHeading>Top Coaches</PopularCourseHeading>
          </BoxCom>
          <LinkContainer>13 Coaches</LinkContainer>
        </MainContainer>
      </BoxCom>
      <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
  </Grid>
  

    </div>
  );
};

export default AllCoaches;
