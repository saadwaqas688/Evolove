import { Grid } from "@mui/material";
import React from "react";
import { UploadHereIcon } from "../../../../assets/icons/UploadHereIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import {
  AddBlogImage,
  FieldLabel,
  FieldWrapper,
  LeftSideGrid,
  ProfileButton,
  RightSideGrid,
  SubHeading,
} from "./ProductSubmitForm.style";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ImageUploadField from "../../../UI/ImageUpload/ImageUploadField";
import Alert from "../../../UI/Alert/Alert";

const ProductSubmitForm = ({
  newSubmissionState,
  setNewSubmissionState,
  submitApiCall
}) => {
  const FORM_VALIDATION = Yup.object().shape({
    price: Yup.string().required("price is required"),
    image:Yup.mixed()
    .required("You need to provide a file"),
  });

  const initialValues = {
    price: "",
    image:""
  };

  function handleSetPreviewImage(previewImage){

    setNewSubmissionState({...newSubmissionState,previewImage})
  }

  function submitHandler({ price,image }) {
    const payload={
      image,
      price
    }
    submitApiCall(payload);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      {(formik) => {
        const { errors, touched, values, handleChange } = formik;
        return (
          <>
            <Form>
              <Grid
                container
                spacing={2}
                sx={{ width: { md: "80%", lg: "100%" } }}
              >
                <LeftSideGrid item xs={12} sm={6} md={12} lg={5}>
                  <SubHeading>Choose your pricing type</SubHeading>

                  <FieldLabel sx={{ marginTop: "50px" }}>
                    Product Image
                  </FieldLabel>
                  <ImageUploadField name="image" setPreviewImage={handleSetPreviewImage}>
                      <label htmlFor="file">
                  <FieldWrapper height={"190px"} sx={{ borderRadius: "8px"}}>
                    {errors.image?
                      <Alert severity="error" message="image is not added! please click here to add image" />:
                      !newSubmissionState.previewImage?
                    <UploadHereIcon />:
                    <AddBlogImage src={newSubmissionState.previewImage} />
                    }

                  </FieldWrapper>
                      </label>
                    </ImageUploadField>
                </LeftSideGrid>

                <RightSideGrid
                  item
                  xs={12}
                  sm={6}
                  md={12}
                  lg={5}
                  marginLeft="10%"
                >
                  <SubHeading>How much your course cost you</SubHeading>
                  <BoxCom sx={{ marginTop: "40px" }}>
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

                  <ProfileButton
                    variant="contained"
                    type="submit"
                    sx={{ marginTop: "200px" }}
                    disabled={newSubmissionState.loading ? true : false}
                  >
                    {newSubmissionState.loading ? "please wait...." : "Submit"}
                  </ProfileButton>
                </RightSideGrid>
              </Grid>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default ProductSubmitForm;
