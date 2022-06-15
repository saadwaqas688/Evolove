import { Grid } from '@mui/material';
import React from 'react'
import { UploadHereIcon } from '../../../../../assets/icons/UploadHereIcon';
import { UploadVideoIcon } from '../../../../../assets/icons/UploadVideoIcon';
import { FieldLabel, FieldWrapper, LeftSideGrid, ProfileButton, SubHeading } from './CourseVideoAndImageUpload.style';

 const CourseVideoAndImageUpload = ({setStep,step}) => {
  return (
     <Grid container  spacing={8} sx={{width:{md:"80%",lg:"100%"}}} >
    <LeftSideGrid item xs={12} sm={6} md={12} lg={6}>
    <SubHeading>Upload cover image and Introduction Video</SubHeading>
    <FieldLabel sx={{marginTop:"50px"}}>Cover Image</FieldLabel>
    <FieldWrapper height={"177px"} sx={{borderRadius:"8px"}}>
        <UploadHereIcon/>
        </FieldWrapper>
        <FieldLabel sx={{marginTop:"20px", borderRadius:"8px"}}>Introduction Video</FieldLabel>
        <FieldWrapper  height={"177px"} >
        <UploadVideoIcon/>
        </FieldWrapper>


        <ProfileButton variant="contained" onClick={()=>setStep(step+1)} >Continue</ProfileButton>

    </LeftSideGrid>

    
    </Grid>
  )
}

export default CourseVideoAndImageUpload;



