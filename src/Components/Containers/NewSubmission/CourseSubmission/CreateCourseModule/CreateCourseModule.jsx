import { Grid } from "@mui/material";
import React from "react";
import AddIcon from "../../../../../assets/icons/AddIcon";
import { CreateIcon } from "../../../../../assets/icons/CreateIcon";
import DeleteIconSmall from "../../../../../assets/icons/DeleteIconSmall";
import BoxCom from "../../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import { CricullumIntroWrapper, SubHeading2, SubHeading3, SubHeading4, TimeTypography } from "./CreateCourseModule.style";
import { Count } from "./CreateCourseModule.style";
import { CardText, FieldLabel,  FieldWrapper,LeftSideGrid, ProfileButton, RightSideGrid, SubHeading } from "./CreateCourseModule.style";


const CreateCourseModule = ({    newSubmissionState,setNewSubmissionState,selectedCategory,title,category,description,setSelectedCategory,setTitle,setCategory,setDescription,setStep,step}) => {
  return (
         <Grid container  spacing={8} sx={{width:{md:"80%",lg:"100%"}}} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={6}>
            <SubHeading>Create modules and complete the course curriculum</SubHeading>

            <BoxCom sx={{marginTop:"30px"}}>
          <FieldLabel>Create Module</FieldLabel>
          <BoxCom sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <TextfieldComp
                  height="45px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  value={title}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
                <BoxCom sx={{paddingTop:"25px",marginLeft:"10px"}}>
                <CreateIcon/>
                </BoxCom>
          </BoxCom>
          </BoxCom>
          <BoxCom sx={{marginTop:"60px"}}>
            <BoxCom sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
          <FieldLabel>Modules </FieldLabel>
          <Count>1</Count>
            </BoxCom>
                <FieldWrapper height={"50px"}  border={true} onClick={()=>setSelectedCategory("Product")}>
                <CardText >
                 Product
                </CardText>
                <DeleteIconSmall/>
                </FieldWrapper>
          </BoxCom>
          <BoxCom sx={{borderBottom:"1px solid #464646",marginTop:"45px"}}>
          </BoxCom>
          <BoxCom sx={{marginTop:"30px"}}>
          <FieldLabel>Create Module</FieldLabel>
          <BoxCom sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <TextfieldComp
                  height="45px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  value={title}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
                <BoxCom sx={{paddingTop:"25px",marginLeft:"10px"}}>
                <AddIcon/>
                </BoxCom>
          </BoxCom>
          </BoxCom>
            </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={6} >
            <SubHeading2>Curriculum</SubHeading2>
            <BoxCom sx={{marginTop:"30px"}}>
            <CricullumIntroWrapper height={"190px"} sx={{borderRadius:"30px"}}  >
           
            <SubHeading3> Intro to the course</SubHeading3>
              <BoxCom sx={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid grey",marginTop:"6px"}}>
            <SubHeading4 sx={{marginBottom:"10px"}}> Welcome Video</SubHeading4>
            <TimeTypography>1:45</TimeTypography>
              </BoxCom>
              <BoxCom sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <SubHeading4 sx={{marginTop:"3px"}}> Coach Introduction</SubHeading4>
            <TimeTypography>2:15</TimeTypography>
              </BoxCom>
              <BoxCom sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <SubHeading4> Talk about course curriculum</SubHeading4>
            <TimeTypography>2:15</TimeTypography>
              </BoxCom>
              <BoxCom sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <SubHeading4>How you can get more from this course</SubHeading4>
            <TimeTypography>1:15</TimeTypography>
              </BoxCom>
              <BoxCom sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <SubHeading4>Let's get started</SubHeading4>
            <TimeTypography>1:15</TimeTypography>
              </BoxCom>

                </CricullumIntroWrapper>
          </BoxCom>
          <ProfileButton variant="contained" onClick={()=>setNewSubmissionState({...newSubmissionState,step:newSubmissionState.step+1})} >Continue</ProfileButton>
          </RightSideGrid>
            </Grid>
    
  );
};

export default CreateCourseModule;

