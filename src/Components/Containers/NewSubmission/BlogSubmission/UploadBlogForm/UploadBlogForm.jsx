import { Grid } from "@mui/material";
import BlogCameraIcon from "../../../../../assets/icons/BlogCameraIcon";
import { UploadHereIcon } from "../../../../../assets/icons/UploadHereIcon";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import { Formik, Form,useFormikContext } from "formik";
import * as Yup from "yup";
import {
  AddBlogImage,
  AddBlogImageBox,
  AddBlogTypography,
  AddImageTypography,
  BlogBox,
  BlogDiv,
  BlogTypography,
  FeatureImageTypography,
  LeftSideGrid,
  MainTypography,
  ProfileButton,
  RightSideGrid,
  SubHeading,
} from "./UploadBlogForm.style";
import ImageUploadField from "../../../../UI/ImageUpload/ImageUploadField";
import Alert from "../../../../UI/Alert/Alert";

const UploadBlogForm = ({
  newSubmissionState,
  setNewSubmissionState,
}) => {
  const setFieldValue = useFormikContext();
  console.log("setFieldValue", setFieldValue);

  const FORM_VALIDATION = Yup.object().shape({
    image:Yup.mixed()
    .required("You need to provide a file"),

    featureImage:Yup.mixed()
    .required("You need to provide a file"),

    description: Yup.string().required("description is required"),
  });

  const initialValues = {
    image: "",
    description: "",
    featureImage:""
  };

  function handleSetPreviewImage(previewImage){

    setNewSubmissionState({...newSubmissionState,previewImage})
  }

  function handleSetPreviewFeatureImage(previewFeatureImage){

    setNewSubmissionState({...newSubmissionState,previewFeatureImage})
  }

  function submitHandler({ image,featureImage, description }) {
    setNewSubmissionState({...newSubmissionState,featureImage,image,description,step:newSubmissionState.step+1})

  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        submitHandler(values)
      }}
    >
      {(formik) => {
        const { errors, touched,values, handleChange } =
          formik;
        return (
          <>
            <Form>
              <Grid container spacing={4}>
                <LeftSideGrid item xs={12} sm={6} md={12} lg={6.5}>
                  <SubHeading>Write your blog here</SubHeading>
                  <BlogDiv>
                    <BlogTypography>Write blog here</BlogTypography>

                    <ImageUploadField name="image" setPreviewImage={handleSetPreviewImage}>
                      <label htmlFor="file">
                        <MainTypography>
                          <BlogCameraIcon />
                          <AddImageTypography>Add Image</AddImageTypography>
                        </MainTypography>
                      </label>
                    </ImageUploadField>
                  </BlogDiv>
                  <BlogBox >
                    <AddBlogTypography>
                      <TextfieldComp
                        width="100%"
                        autoComplete="false"
                        onChange={handleChange}
                        name="description"
                        value={values.description}
                        justifyproperty="flex-start"
                        alignproperty="null"
                        multiLine={true}
                        height="250px"
                        color="transparent"
                        placeholder={(touched.description && errors.description)?"Please add description!":"enter description"}
                        placeholderColor={errors.description?"red":"#4d4d4d"}
                      />
                    </AddBlogTypography>
                    {(touched.image && errors.image)?
                   <Alert severity="error" message="image is not added" />:
                   newSubmissionState.previewImage?

                    <AddBlogImage src={newSubmissionState.previewImage} />:
                    <></>
                    }
                  </BlogBox>
                </LeftSideGrid>

                <RightSideGrid item xs={12} sm={6} md={12} lg={5.5}>
                  <SubHeading>
                    Fill the information for course information
                  </SubHeading>
                  <FeatureImageTypography>Feature Image</FeatureImageTypography>

                    <ImageUploadField name="featureImage" id="featureImage" setPreviewImage={handleSetPreviewFeatureImage}>
                    <label htmlFor="featureImage">

                    {
                      (touched.featureImage && errors.featureImage)?
                      <Alert severity="error" message="feature image is not added! please click here to add feature image" />:
                      !newSubmissionState.previewFeatureImage?
                                      <AddBlogImageBox>


                    <UploadHereIcon />
                    </AddBlogImageBox>

                    :
                  <AddBlogImage src={newSubmissionState.previewFeatureImage} />
                    }
                  </label>


                  </ImageUploadField>




                  <ProfileButton variant="contained" type="submit" >

                    Continue
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
export default UploadBlogForm;
