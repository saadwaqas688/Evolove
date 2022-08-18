import { Grid } from "@mui/material";
import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import { Formik, Form} from "formik";
import * as Yup from "yup";

import { CardText, FieldLabel,  FieldWrapper,LeftSideGrid, ProfileButton, RightSideGrid, SubHeading } from "./NewSubmissionCategoryForm.style";


const NewSubmissionCategoryForm = ({newSubmissionState,setNewSubmissionState}) => {
  const {selectedCategory}=newSubmissionState

  let FORM_VALIDATION=""
  let initialValues=""

  if(selectedCategory==="Blog"){
   FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required("title is required"),
  
    category: Yup.string().required("category is required"),
   
  });
  initialValues = {
    title: "",
    category:"",
  };
}else{
  FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required("title is required"),
  
    category: Yup.string().required("category is required"),

      description: Yup.string().required("description is required")
   
  });
  initialValues = {
    title: "",
    description:"",
    category:"",
  };


}

function handleCategorySelector(category){

  setNewSubmissionState({...newSubmissionState,selectedCategory:category})
}

  function submitHandler({title,category,description}){
    setNewSubmissionState({...newSubmissionState,title,category,description,step:newSubmissionState.step+1})
  }
  return (
         <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={4.5}>
            <SubHeading>Select what type you want to submit</SubHeading>

            <FieldWrapper height={"60px"}  border={selectedCategory==="Course"?true:false} onClick={()=>handleCategorySelector("Course")}> 
                <CardText >
                Course
                </CardText>
                </FieldWrapper>

                <FieldWrapper height={"60px"} border={selectedCategory==="Product"?true:false} onClick={()=>handleCategorySelector("Product")}>
                <CardText >
                 Product
                </CardText>
                </FieldWrapper>

                <FieldWrapper height={"60px"} border={selectedCategory==="Blog"?true:false} onClick={()=>handleCategorySelector("Blog")}>
                <CardText >
                Blog
                </CardText>
                </FieldWrapper>
      
            </LeftSideGrid>
            <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="15%">
            <SubHeading>Fill the information for course information</SubHeading>
            <Formik
      initialValues={initialValues}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        submitHandler(values)
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched,values,  handleChange, } = formik;
        console.log("errors",errors)
        console.log("touched",touched)
        return (
                  <>
                  <Form>

       
            <BoxCom sx={{marginTop:"30px"}}>
          <FieldLabel>{`${selectedCategory} title`}</FieldLabel>
          <TextfieldComp
                  height="60px"
                  width="100%"
                  autoComplete="false"
                  // onChange={(e) => setTitle(e.target.value)}
                  onChange={handleChange}
                  name="title"
                  value={values.title}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  helperText={(touched.title && errors.title)?errors.title:""}
                  error={errors.title && touched.title ? true
                    : null}
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
                  // onChange={(e) => setCategory(e.target.value)}
                  onChange={handleChange}
                  name="category"
                  value={values.category}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  helperText={(touched.category && errors.category)?errors.category:""}
                  error={errors.category && touched.category ? true
                    : null}

                />
          </BoxCom>

       {  selectedCategory!=="Blog" && <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>{`${selectedCategory} Description`}</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  width="100%"
                  autoComplete="false"
                  onChange={handleChange}
                  name="description"
                  value={values.description}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  multiLine={true} 
                  height="150px"
                  helperText={(touched.description && errors.description)?errors.description:""}
                  error={errors.description && touched.description ? true
                    : null}
                />
          </BoxCom>}
          <ProfileButton type="submit" variant="contained" >Continue</ProfileButton>
          </Form>
          </>
        );
      }}
    </Formik>
              </RightSideGrid>

            </Grid>
    
  );
};

export default NewSubmissionCategoryForm;
