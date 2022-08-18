import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { imagePostService, postService } from "../../../../services/services";
import { BlogSubmitForm } from "../BlogSubmission/BlogSubmiForm/BlogSubmitForm";
import UploadBlogForm from "../BlogSubmission/UploadBlogForm/UploadBlogForm";
import CourseVideoAndImageUpload from "../CourseSubmission/CourseVideoAndImageUpload/CourseVideoAndImageUpload";
import CreateCourseMoudle from "../CourseSubmission/CreateCourseModule/CreateCourseModule";
import NewSubmissionCategoryForm from "../NewSubmissionCategoryForm/NewSubmissionCategoryForm";
import ProductSubmitForm from "../ProductSubmission/ProductSubmitForm";
import { Heading, MainContainer } from "./NewSubmission.style";

const NewSubmission = () => {
  const [newSubmissionState, setNewSubmissionState] = useState({
    selectedCategory: "Course",
    step: 1,
    title: "",
    category: "",
    description: "",
    image: "",
    previewImage: "",
    featureImage: "",
    previewFeatureImage: "",
    video: "",
    previewVideo: "",
    price: "",
    priceCategory: "Fixed Price",
    loading: false,
  });

  const { enqueueSnackbar } = useSnackbar();

  let navigate = useNavigate();

  const {
    selectedCategory,
    step,
    title,
    category,
    description,
    image,
    featureImage,
    video,
    priceCategory,
  } = newSubmissionState;

  async function submitApiCall(payload) {
    setNewSubmissionState({ ...newSubmissionState, loading: true });

    if (selectedCategory === "Course") {
      const imageUrl = await imagePostService(image);
      const videoUrl = await imagePostService(video);

      const data = {
        image: imageUrl,
        video: videoUrl,
        price: payload.price,
        title: title,
        description: description,
        pricetype: priceCategory,
        category: category,
        coachId:"1234567890"
      };

      await postService("testWaqasCourse", data);
    } else if (selectedCategory === "Product") {
      const imageUrl = await imagePostService(payload.image);

      const data = {
        profuctImage: imageUrl,
        price: payload.price,
        title: title,
        description: description,
        pricetype: priceCategory,
        category: category,
        coachId:"1234567890"
      };

      await postService("testWaqasProduct", data);
    } else {
      const imageUrl = await imagePostService(image);
      const featureImageUrl = await imagePostService(featureImage);

      const data = {
        featureImage: featureImageUrl,
        blogImage: imageUrl,
        price: payload.price,
        title: title,
        description: description,
        pricetype: priceCategory,
        category: category,
        coachId:"1234567890"
      };

      await postService("testWaqasBlogs", data);
    }
    setNewSubmissionState({ ...newSubmissionState, loading: false });
    enqueueSnackbar("successfully created", {
      variant: "success",
      autoHideDuration: 4000,
    });

    navigate("/newSubmissionSuccess");
  }

  const propsForAll = {
    newSubmissionState,
    setNewSubmissionState,
    submitApiCall,
  };

  function renderComponents() {
    if (step === 1) {
      return <NewSubmissionCategoryForm {...propsForAll} />;
    } else if (step === 2 && selectedCategory === "Product") {
      return <ProductSubmitForm {...propsForAll} />;
    } else if (step === 2 && selectedCategory === "Course") {
      return <CourseVideoAndImageUpload {...propsForAll} />;
    } else if (step === 2 && selectedCategory === "Blog") {
      return <UploadBlogForm {...propsForAll} />;
    } else if (step === 3 && selectedCategory === "Blog") {
      return <BlogSubmitForm {...propsForAll} />;
    } else if (step === 3 && selectedCategory === "Course") {
      return <CreateCourseMoudle {...propsForAll} />;
    } else if (step === 4 && selectedCategory === "Course") {
      return <BlogSubmitForm {...propsForAll} />;
    } else {
      return <></>;
    }
  }

  return (
    <MainContainer>
      <Heading>New Submission</Heading>
      {renderComponents()}
    </MainContainer>
  );
};

export default NewSubmission;
