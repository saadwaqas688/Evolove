import React from 'react'
import PopularCoursesHome from '../Components/Containers/Auth/HomeOnBoarding/PopularCoursesHome/PopularCoursesHomeMain/PopularCoursesHomeMain'
import HomeCourseCard from '../Components/Containers/Home/HomeCourseCard/HomeCourseCard'
import HomeTopCard from '../Components/Containers/Home/HomeTopCard/HomeTopCard'
import AppWrapper from '../Components/UI/AppWrapper/AppWrapperMain/AppWrapper'
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchIcon from '../assets/icons/SearchIcon';
import {  Container } from "@mui/material";


import TextFieldWrapper from '../Components/UI/TextField/TextFieldWrapper';
import SingleCourse from '../Components/Containers/Courses/Course/SingleCourse';
import CourseAccordions from '../Components/Containers/Courses/CourseVideos/CourseVideoAccordian'
// import SingleCourse from '../Components/Containers/Courses/SingleCourse';
const Test = () => {
  return (
    <div>
      {/* <AppWrapper/> */}
      {/* <TextField id="outlined-basic" 
      label="Outlined"
       variant="outlined" 
       InputProps={{
        startAdornment:(
          <InputAdornment position='start'>
            <SearchIcon/>
          </InputAdornment>
        )
       }}
       
       /> */}
       {/* <Container style={{display:"flex",padding:'0px'}}> */}
       <SingleCourse/>
       {/* <CourseVideo/> */}
       {/* <CourseAccordions/>   */}
           {/* <CoursePrice/> */}

  {/* </Container>  */}
          
 
    </div>
  )
}

export default Test
