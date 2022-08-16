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
  setStep,
  step,
  setPreviewVideo,
  setPreviewImage,
  previewImage,
  setImage,
  setVideo,
  video,
  previewVideo,
}) => {
  const FORM_VALIDATION = Yup.object().shape({
    image: Yup.string().required("price is required"),
    video: Yup.string().required("price is required"),
  });

  const initialValues = {
    image: "",
    video: "",
  };

  function submitHandler({video, image}) {
    setImage(image);
    setVideo(video);
    setStep(step + 1)

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
        console.log("errors", errors);
        console.log("touched", touched);
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
                    setPreviewImage={setPreviewImage}
                  >
                    <label htmlFor="file">
                      <FieldWrapper
                        height={"177px"}
                        sx={{ borderRadius: "8px" }}
                      >
                            {errors.image?
                   <Alert severity="error" message="image is not added" />:
                   previewImage?

                    <AddBlogImage src={previewImage} />:
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
                    setPreviewImage={setPreviewVideo}
                    id="video"
                  >
                    <label htmlFor="video">
                      <FieldWrapper height={"177px"}>
                      {errors.video?
                   <Alert severity="error" message="image is not added" />:
                   previewVideo?

                   <video
                   src={previewVideo}
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
