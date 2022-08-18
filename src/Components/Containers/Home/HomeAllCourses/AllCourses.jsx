import React, { useEffect, useState } from "react";
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
import { getService } from "../../../../services/services";
import Loader from "../../../UI/Loader/Loader";



const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [coursesCategoryWise, setCoursesCategoryWise] = useState([]);

  const [loading, setLoading] = useState(false);
  const size={xs:"12", sm:"6" ,md:"6", lg:"3"}

   const { category } = useParams();

   const getData = async () => {
    setLoading(true);

    let courseList = [];

    const courseData = await getService("testWaqasCourse");


    courseData.forEach((doc) => {
      courseList.push({ id: doc.id, ...doc.data() });
    });


    setCourses(courseList)
    setLoading(false);
  };

  useEffect(() => {
  
    getData();

  }, []);

  useEffect(()=>{
    let tempData=[...courses]

    tempData=tempData.filter((course)=>course.category===category)

    setCoursesCategoryWise(tempData)

  },[category,courses])
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
          ( loading?<Loader/>:

          <Grid container spacing={2}>
         { coursesCategoryWise?.map((course)=>{
                
                return (<HomeCourseCard 
                    size={size}
                    courseName={course.title}
                    courseImage={course.image} 
                    coursePrice={course.price} />)
              })
            }
                 
      </Grid>)
      :
              ( loading?<Loader/>:

          <Grid container spacing={2}>
         { courses?.map((course)=>{
                
                return (<HomeCourseCard 
                    size={size}
                    courseName={course.title}
                    courseImage={course.image} 
                    coursePrice={course.price} />)
              })
            }
                 
      </Grid>)
      }
    </div>
  );
};

export default AllCourses;
