import BoxCom from "../../../UI/BoxCom/BoxCom";
import HomeCoachcom from "../../Home/HomeCoachCom/HomeCoachCom";
import {
  BlogContainer,
  BlogsHeading,
  BlogsImage,
  BlogsText,
  PageTitle,
} from "./SingleBlog.style";
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../../services/services";
import { useEffect, useState } from "react";


const SingleBlog = () => {
  const [blog, setBlog] = useState([]);

  const [loading, setLoading] = useState(false);

  let { blogId } = useParams();

  async function getData(){
    setLoading(true)
    const docSnap= await getServiceById("testWaqasBlogs",blogId)
      
    if (docSnap.exists()) {
  
      setBlog(docSnap.data())
  
  
      setLoading(false)
  
    } else {
      setLoading(false)

    }
  }

  useEffect(() => {
  
    getData();

  }, []);

  return (
    <>
      <PageTitle>Blog</PageTitle>
      <BlogContainer>
        <BlogsImage src={blog.blogImage} alt="Paris" />
        <BlogsHeading>Benefits of Meditation</BlogsHeading>
        <BoxCom sx={{ marginTop: "10px" }}>
          <HomeCoachcom />
        </BoxCom>
        <BlogsText>
          <p>
            {blog.description}
          </p>
          <p>
          </p>
          <BlogsImage
            src={blog.featureImage}
            alt="Paris"
            sx={{ borderRadius: "6px" }}
          />
          <p>
          </p>
        </BlogsText>
      </BlogContainer>
    </>
  );
};

export default SingleBlog;
