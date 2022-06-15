import { Grid } from "@mui/material";
import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import { CardText, FieldLabel,  FieldWrapper,LeftSideGrid, ProfileButton, RightSideGrid, SubHeading } from "./NewSubmissionCategoryForm.style";


const NewSubmissionCategoryForm = ({selectedCategory,title,category,description,setSelectedCategory,setTitle,setCategory,setDescription,setStep,step}) => {
  return (
         <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={4.5}>
            <SubHeading>Select what type you want to submit</SubHeading>

            <FieldWrapper height={"60px"}  border={selectedCategory==="Course"?true:false} onClick={()=>setSelectedCategory("Course")}> 
                <CardText >
                Course
                </CardText>
                </FieldWrapper>

                <FieldWrapper height={"60px"} border={selectedCategory==="Product"?true:false} onClick={()=>setSelectedCategory("Product")}>
                <CardText >
                 Product
                </CardText>
                </FieldWrapper>

                <FieldWrapper height={"60px"} border={selectedCategory==="Blog"?true:false} onClick={()=>setSelectedCategory("Blog")}>
                <CardText >
                Blog
                </CardText>
                </FieldWrapper>
      
            </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="15%">
            <SubHeading>Fill the information for course information</SubHeading>
            <BoxCom sx={{marginTop:"30px"}}>
          <FieldLabel>{`${selectedCategory} title`}</FieldLabel>
          <TextfieldComp
                  height="60px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  value={title}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>

          <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>{`${selectedCategory} Category`}</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="60px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setCategory(e.target.value)}
                  name="category"
                  value={category}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>

       {  selectedCategory!=="Blog" && <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>{`${selectedCategory} Description`}</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  value={description}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  multiLine={true} 
                  height="150px"
                />
          </BoxCom>}
          <ProfileButton variant="contained" onClick={()=>setStep(step+1)} >Continue</ProfileButton>
          </RightSideGrid>
            </Grid>
    
  );
};

export default NewSubmissionCategoryForm;
