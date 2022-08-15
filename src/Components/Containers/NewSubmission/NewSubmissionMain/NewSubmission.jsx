import React from "react";
import { BlogSubmitForm } from "../BlogSubmission/BlogSubmiForm/BlogSubmitForm";
import UploadBlogForm from "../BlogSubmission/UploadBlogForm/UploadBlogForm";
import CourseVideoAndImageUpload from "../CourseSubmission/CourseVideoAndImageUpload/CourseVideoAndImageUpload";
import CreateCourseMoudle from "../CourseSubmission/CreateCourseModule/CreateCourseModule";
import NewSubmissionCategoryForm from "../NewSubmissionCategoryForm/NewSubmissionCategoryForm";
import ProductSubmitForm from "../ProductSubmission/ProductSubmitForm";
import { Heading, MainContainer } from "./NewSubmission.style";

const NewSubmission = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Course");
  const [step, setStep] = React.useState(1);
  const [title, setTitle] = React.useState("");

  const [category, setCategory] = React.useState("");

  const [description, setDescription] = React.useState("");

  const [image, setImage] = React.useState("");

  const [previewImage, setPreviewImage] = React.useState("");

  const [featureImage, setFeatureImage] = React.useState("");

  const [previewFeatureImage, setPreviewFeatureImage] = React.useState("");

  console.log("title", title);
  console.log("category", category);
  console.log("description", description);

  const propsForUploadBlogForm = {
    step,
    setStep,
    setPreviewImage,
    previewImage,
    image,
    setImage,
    description,
    setDescription,
    featureImage,
    previewFeatureImage,
    setFeatureImage,
    setPreviewFeatureImage,
  };

  return (
    <MainContainer>
      <Heading>New Submission</Heading>
      {/* <CreateCourseMoudle/> */}
      {/* <CourseVideoAndImageUpload/> */}
      {step === 1 && (
        <NewSubmissionCategoryForm
          setStep={setStep}
          step={step}
          selectedCategory={selectedCategory}
          title={title}
          category={category}
          description={description}
          setSelectedCategory={setSelectedCategory}
          setTitle={setTitle}
          setCategory={setCategory}
          setDescription={setDescription}
        />
      )}
      {step === 2 && selectedCategory === "Blog" ? (
        <UploadBlogForm {...propsForUploadBlogForm} />
      ) : step === 2 && selectedCategory === "Product" ? (
        <ProductSubmitForm />
      ) : step === 2 && selectedCategory === "Course" ? (
        <CourseVideoAndImageUpload setStep={setStep} step={step} />
      ) : step === 3 && selectedCategory === "Blog" ? (
        <BlogSubmitForm setStep={setStep} step={step} />
      ) : step === 3 && selectedCategory === "Blog" ? (
        <BlogSubmitForm />
      ) : step === 3 && selectedCategory === "Course" ? (
        <CreateCourseMoudle setStep={setStep} step={step} />
      ) : step === 4 && selectedCategory === "Course" ? (
        <BlogSubmitForm />
      ) : (
        <></>
      )}
    </MainContainer>
  );
};

export default NewSubmission;
