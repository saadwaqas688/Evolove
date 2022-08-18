import { Grid } from '@mui/material'
import React from 'react'
import BoxCom from '../../../../UI/BoxCom/BoxCom'
import TextfieldComp from '../../../../UI/TextFieldCom/Textfield'
import { CardText, FieldLabel, FieldWrapper, LeftSideGrid, ProfileButton, RightSideGrid, SubHeading } from './BlogSubmitForm.style'
import { Formik, Form} from "formik";
import * as Yup from "yup";


export const BlogSubmitForm = ({newSubmissionState,
  setNewSubmissionState,submitApiCall}) => {

  const FORM_VALIDATION = Yup.object().shape({
    price: Yup.string().required("price is required"),
   
  });


  const initialValues = {
    price: "",
  };

  function handleCategorySelector(priceCategory){

    setNewSubmissionState({...newSubmissionState,priceCategory})
  }

  
  function submitHandler({price}){

    const payload={price}
    submitApiCall(payload)
  }
  return (

         <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={4.5}>
            <SubHeading>Choose your pricing type</SubHeading>

            <FieldWrapper height={"56px"}  border={newSubmissionState.priceCategory==="Fixed Price"?true:false} onClick={()=>handleCategorySelector("Fixed Price")}>
                <CardText >
                Fixed Price
                </CardText>
                </FieldWrapper>

                <FieldWrapper height={"56px"} border={newSubmissionState.priceCategory==="Evolove Subscription"?true:false}  onClick={()=>handleCategorySelector("Evolove Subscription")}>
                <CardText >
                 Evolove Subscription
                </CardText>
                </FieldWrapper>
      
            </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="15%">
            <SubHeading>How much your course cost you</SubHeading>

            <Formik
      initialValues={initialValues}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        submitHandler(values)
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched,values,handleChange, } = formik;
        console.log("errors",errors)
        console.log("touched",touched)
        return (
                  <>
                  <Form>
            <BoxCom sx={{marginTop:"40px"}}>
          <FieldLabel>Course Price</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={handleChange}
                  name="price"
                  value={values.price}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  helperText={errors.price}
                  error={errors.price && touched.price ? true
                    : null}
                />
          </BoxCom>

          <ProfileButton variant="contained" type="submit" sx={{marginTop:"200px"}} disabled={newSubmissionState.loading?true:false} >{newSubmissionState.loading?"please wait....":"Submit"}</ProfileButton>
          </Form>
          </>
        );
      }}
    </Formik>
          </RightSideGrid>
            </Grid>
  )
}
