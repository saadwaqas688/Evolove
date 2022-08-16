import { useSnackbar } from "notistack";
import React from "react";
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
  const [selectedCategory, setSelectedCategory] = React.useState("Course");
  const [step, setStep] = React.useState(1);
  const [title, setTitle] = React.useState("");
  
  const [category, setCategory] = React.useState("");

  const [description, setDescription] = React.useState("");

  const [image, setImage] = React.useState("");

  const [previewImage, setPreviewImage] = React.useState("");

  const [featureImage, setFeatureImage] = React.useState("");

  const [previewFeatureImage, setPreviewFeatureImage] = React.useState("");

  const [video, setVideo] = React.useState("");

  const [previewVideo, setPreviewVideo] = React.useState("");



  const [price, setPrice] = React.useState("");

  const [priceCategory, setPriceCategory] = React.useState("Fixed Price");

  const [loading, setLoading] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

  let navigate = useNavigate();



  console.log("video",video)

  console.log("image",image)




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


async function submitApiCall(payload){
  setLoading(true)

  if(selectedCategory==="Course"){

    const imageUrl= await imagePostService(image) 
    const videoUrl= await imagePostService(video)  
 

    const data={
      image:imageUrl,
      video:videoUrl,
      price:payload.price,
      title:title,
      description:description,
      pricetype:priceCategory,
      category:category
    }
    
      const result=await postService("testWaqasCourse",data)

  }else if(selectedCategory==="Product"){
    const imageUrl= await imagePostService(payload.image)  

  const data={
    profuctImage:imageUrl,
    price:payload.price,
    title:title,
    description:description,
    pricetype:priceCategory,
    category:category
  }
  
    const result=await postService("testWaqasProduct",data)


  }else{

  const imageUrl= await imagePostService(image)
  const featureImageUrl=await imagePostService(featureImage)

const data={
  featureImage:featureImageUrl,
  blogImage:imageUrl,
  price:payload.price,
  title:title,
  description:description,
  pricetype:priceCategory,
  category:category

}

  const result=await postService("testWaqasBlogs",data)

  }
  setLoading(false)
  enqueueSnackbar(
    "successfully created",
    {
      variant: "success",
      autoHideDuration: 4000,
    }
  );
  
    navigate("/newSubmissionSuccess");

}


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
        <ProductSubmitForm   submitApiCall={submitApiCall}
        loading={loading}
        setPreviewImage={setPreviewImage}
        previewImage={previewImage}

        />
      ) : step === 2 && selectedCategory === "Course" ? (
        <CourseVideoAndImageUpload setStep={setStep} step={step} setImage={setImage} setPreviewVideo={setPreviewVideo} setVideo={setVideo} video={video} previewVideo={previewVideo} previewImage={previewImage} setPreviewImage={setPreviewImage}/>
      ) : step === 3 && selectedCategory === "Blog" ? (
        <BlogSubmitForm setStep={setStep} step={step}loading={loading} submitApiCall={submitApiCall} price={price} setPrice={setPrice} priceCategory={priceCategory} setPriceCategory={setPriceCategory}/>
      ) : step === 3 && selectedCategory === "Blog" ? (
        <BlogSubmitForm  price={price} setPrice={setPrice} priceCategory={priceCategory} setPriceCategory={setPriceCategory}/>
      ) : step === 3 && selectedCategory === "Course" ? (
        <CreateCourseMoudle setStep={setStep} step={step} />
      ) : step === 4 && selectedCategory === "Course" ? (
        <BlogSubmitForm setStep={setStep} step={step}loading={loading} submitApiCall={submitApiCall} price={price} setPrice={setPrice} priceCategory={priceCategory} setPriceCategory={setPriceCategory}/>
      ) : (
        <></>
      )}
    </MainContainer>
  );
};

export default NewSubmission;
