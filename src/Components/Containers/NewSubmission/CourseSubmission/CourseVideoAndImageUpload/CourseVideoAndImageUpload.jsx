import { Grid } from "@mui/material";
import React from "react";
import { UploadHereIcon } from "../../../../../assets/icons/UploadHereIcon";
import { UploadVideoIcon } from "../../../../../assets/icons/UploadVideoIcon";
import {
  AddBlogImage,
  FieldLabel,
  FieldWrapper,
  LeftSideGrid,
  ProfileButton,
  SubHeading,
} from "./CourseVideoAndImageUpload.style";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ImageUploadField from "../../../../UI/ImageUpload/ImageUploadField";
import Alert from "../../../../UI/Alert/Alert";

const CourseVideoAndImageUpload = ({
  newSubmissionState,
  setNewSubmissionState,
}) => {
  const FORM_VALIDATION = Yup.object().shape({
    image: Yup.string().required("price is required"),
    video: Yup.string().required("price is required"),
  });

  const initialValues = {
    image: "",
    video: "",
  };

  function handleSetPreviewImage(previewImage){

    setNewSubmissionState({...newSubmissionState,previewImage})
  }

  function handleSetPreviewVideo(previewVideo){

    setNewSubmissionState({...newSubmissionState,previewVideo})
  }

  function submitHandler({ image,video}) {
    setNewSubmissionState({...newSubmissionState,video,image,step:newSubmissionState.step+1})

  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        submitHandler(values);
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched} = formik;
        return (
          <>
            <Form>
              <Grid
                container
                spacing={8}
                sx={{ width: { md: "80%", lg: "100%" } }}
              >
                <LeftSideGrid item xs={12} sm={6} md={12} lg={6}>
                  <SubHeading>
                    Upload cover image and Introduction Video
                  </SubHeading>
                  <FieldLabel sx={{ marginTop: "50px" }}>
                    Cover Image
                  </FieldLabel>

                  <ImageUploadField
                    name="image"
                    setPreviewImage={handleSetPreviewImage}
                  >
                    <label htmlFor="file">
                      <FieldWrapper
                        height={"177px"}
                        sx={{ borderRadius: "8px" }}
                      >
                            {(touched.image && errors.image)?
                   <Alert severity="error" message="image is not added" />:
                   newSubmissionState.previewImage?

                    <AddBlogImage src={newSubmissionState.previewImage} />:
                    <UploadHereIcon />

                    }
                      </FieldWrapper>
                    </label>
                  </ImageUploadField>

                  <FieldLabel sx={{ marginTop: "20px", borderRadius: "8px" }}>
                    Introduction Video
                  </FieldLabel>

                  <ImageUploadField
                    name="video"
                    setPreviewImage={handleSetPreviewVideo}
                    id="video"
                  >
                    <label htmlFor="video">
                      <FieldWrapper height={"177px"}>
                      {(touched.video && errors.video)?
                   <Alert severity="error" message="video is not added! please click here to add video" />:
                   newSubmissionState.previewVideo?

                   <video
                   src={newSubmissionState.previewVideo}
                   controls
                  style={{ width: "100%", height: "100%" }}
                />:
                <UploadVideoIcon />

                    }
          
                      </FieldWrapper>
                    </label>
                  </ImageUploadField>

                  <ProfileButton
                   type="submit"
                    variant="contained"
                  >
                    Continue
                  </ProfileButton>
                </LeftSideGrid>
              </Grid>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default CourseVideoAndImageUpload;
