import React from "react";
import HomeCourseCard from "../HomeCourseCard/HomeCourseCard";

import { Grid } from "@mui/material";

const CoursesContainer = () => {
  return (
    <div>
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
      </Grid>
    </div>
  );
};

export default CoursesContainer;
