import React from "react";
import HomeCourseCard from "../HomeCourseCard/HomeCourseCard";

import { Grid } from "@mui/material";

const CoursesContainer = () => {
  return (
      <Grid container spacing={2}>
       <HomeCourseCard />
       <HomeCourseCard />
       <HomeCourseCard />
       <HomeCourseCard />
      </Grid>
  );
};

export default CoursesContainer;
