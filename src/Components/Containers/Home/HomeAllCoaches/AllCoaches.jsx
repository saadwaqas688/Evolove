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
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />
      <HomeCoachcom />  
      <HomeCoachcom />
  </Grid>
  

    </div>
  );
};

export default AllCoaches;
