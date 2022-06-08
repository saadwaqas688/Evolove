import React from "react";
import HomeCourseCard from "../HomeCourseCard/HomeCourseCard";

import { Grid } from "@mui/material";

const CoursesContainer = () => {
  const size={xs:"12", sm:"6" ,md:"6", lg:"3"}
  return (
      <Grid container spacing={2}>
       <HomeCourseCard size={size}/>
       <HomeCourseCard size={size}/>
       <HomeCourseCard size={size}/>
       <HomeCourseCard size={size}/>
      </Grid>
  );
};

export default CoursesContainer;
