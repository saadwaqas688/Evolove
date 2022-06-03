import React from 'react'
import TextField from '@mui/material/TextField';
import AppWrapper from '../Components/UI/AppWrapper/AppWrapperMain/AppWrapper'
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchIcon from '../assets/icons/SearchIcon';
import {  Container } from "@mui/material";

import TextFieldWrapper from '../Components/UI/TextField/TextFieldWrapper';
import SingleCourse from '../Components/Containers/Courses/Course/SingleCourse';
import CourseVideo from '../Components/Containers/Courses/CourseVideos/CourseVideos';
// import SingleCourse from '../Components/Containers/Courses/SingleCourse';
const Test = () => {
  return (
    // <div style={{height:"100vh",background:"white"}}>
    <div>
      {/* <TextFieldWrapper/> */}
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
       <CourseVideo/>
           {/* <CoursePrice/> */}

  {/* </Container>  */}
          
    </div>
  )
}

export default Test
