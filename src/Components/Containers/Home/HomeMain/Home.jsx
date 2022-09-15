import React, { useEffect, useState } from "react";
import HomeTopCard from "../HomeTopCard/HomeTopCard";
import CoursesContainer from "../HomeCourseContainer/HomeCourseContainer";
import { HomeCoachesContainer } from "../HomeCoachesContainer/HomeCoachesContainer";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import {
  LinkContainer,
  MainContainer,
  PopularCourseHeading,
} from "../HomeCoachesContainer/HomeCoachesContainer.style";
import { getService } from "../../../../services/services";
import HomeCourseCard from "../HomeCourseCard/HomeCourseCard";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeCoachcom from "../HomeCoachCom/HomeCoachCom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [coaches, setCoaches] = useState([]);

  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const size = { xs: "12", sm: "6", md: "6", lg: "3" };

  const getCourses = async () => {
    setLoading(true);

    let courseList = [];

    const courseData = await getService("testWaqasCourse");

    courseData.forEach((doc) => {
      courseList.push({ id: doc.id, ...doc.data() });
    });

    setCourses(courseList);
    setLoading(false);
  };

  const getCoaches = async () => {
    setLoading(true);

    let tempData = [];

    const usersData = await getService("Users");

    usersData.forEach((doc) => {
      if (doc.data().Coach === true)
        tempData.push({ id: doc.id, ...doc.data() });
    });

    setCoaches(tempData);
    setLoading(false);
  };

  useEffect(() => {
    getCourses();
    getCoaches();
  }, []);

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <>
      <BoxCom sx={{ marginTop: "60px" }}>
        <HomeTopCard />
      </BoxCom>
      <BoxCom sx={{ marginTop: "33px" }}>
        <MainContainer>
          <PopularCourseHeading>Popular Courses</PopularCourseHeading>
          <LinkContainer onClick={() => handleNavigation("/home/allCourses")}>
            See All
          </LinkContainer>
        </MainContainer>
        {/* <CoursesContainer/>  */}
        <Grid container spacing={2}>
          {courses?.map((course) => {
            return (
              <HomeCourseCard
                size={size}
                courseName={course.title}
                courseImage={course.image}
                coursePrice={course.price}
              />
            );
          })}
        </Grid>
      </BoxCom>
      <BoxCom sx={{ marginTop: "60px" }}>
        <MainContainer>
          <PopularCourseHeading>Top Coaches</PopularCourseHeading>
          <LinkContainer onClick={() => handleNavigation("/home/allCoaches")}>
            See All
          </LinkContainer>
        </MainContainer>
        <Grid container spacing={2}>
          {coaches?.map((coach) => {
            return (
              <HomeCoachcom
                name={coach.FullName}
                image={coach.ProfileImage}
                // coursePrice={course.price}
              />
            );
          })}
        </Grid>
        {/* <HomeCoachesContainer/> */}
      </BoxCom>
    </>
  );
};

export default Home;
