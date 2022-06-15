import { Grid } from "@mui/material";
import React from "react";
import AddIcon from "../../../../../assets/icons/AddIcon";
import { CreateIcon } from "../../../../../assets/icons/CreateIcon";
import DeleteIconSmall from "../../../../../assets/icons/DeleteIconSmall";
import BoxCom from "../../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import { SubHeading2 } from "./CreateCourseModule.style";
import { Count } from "./CreateCourseModule.style";
import { CardText, FieldLabel,  FieldWrapper,LeftSideGrid, ProfileButton, RightSideGrid, SubHeading } from "./CreateCourseModule.style";


const CreateCourseModule = ({selectedCategory,title,category,description,setSelectedCategory,setTitle,setCategory,setDescription,setStep,step}) => {
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
            <FieldWrapper height={"200px"} sx={{borderRadius:"30px"}}  >
                </FieldWrapper>
          </BoxCom>
          <ProfileButton variant="contained" onClick={()=>setStep(step+1)} >Continue</ProfileButton>
          </RightSideGrid>
            </Grid>
    
  );
};

export default CreateCourseModule;

