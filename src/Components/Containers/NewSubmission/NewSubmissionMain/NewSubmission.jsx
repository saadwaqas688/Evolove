import React from "react";
import { BlogSubmitForm } from "../BlogSubmission/BlogSubmiForm/BlogSubmitForm";
import UploadBlogForm from "../BlogSubmission/UploadBlogForm/UploadBlogForm";
import CourseVideoAndImageUpload from "../CourseSubmission/CourseVideoAndImageUpload/CourseVideoAndImageUpload";
import CreateCourseMoudle from "../CourseSubmission/CreateCourseModule/CreateCourseModule";
import NewSubmissionCategoryForm from "../NewSubmissionCategoryForm/NewSubmissionCategoryForm";
// import ProductSubmitForm from "../ProductSubmission /ProductSubmitForm";
import { Heading, MainContainer } from "./NewSubmission.style";

const NewSubmission = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Course");
  const [step, setStep] = React.useState(1);
  const [title, setTitle] = React.useState("");

  const [category, setCategory] = React.useState("");

  const [description, setDescription] = React.useState("");

  console.log(step);
  console.log(selectedCategory);

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
        <UploadBlogForm  step={step} setStep={setStep}/>
      ) : step === 2 && selectedCategory === "Product" ? (
        // <ProductSubmitForm />
        <></>
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
