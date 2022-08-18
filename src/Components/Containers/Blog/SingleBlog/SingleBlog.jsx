import ExploreBlogImage from "../../../../assets/images/homeOnBoarding/HomeBlogImage.jpeg";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import HomeCoachcom from "../../Home/HomeCoachCom/HomeCoachCom";
import {
  BlogContainer,
  BlogsHeading,
  BlogsImage,
  BlogsText,
  PageTitle,
} from "./SingleBlog.style";
import BlogImage from "../../../../assets/images/homeOnBoarding/meditation2.jpg";
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
  
      console.log("No such document!");
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
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae
            a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis
            nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor
            morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit
            leo tellus nullam neque , aliquet neque libero vestibulum. Accumsan
            egestas sed ut ele mentum vulputate praesent et interdum. Praesent
            est, tortor congu e justo, nibh ipsum in lorem ut. Euismod molestie
            dictum nulla eg estas pulvinar. Vel tincidunt eget lacus,
            pellentesque ac tellus varius. Ullamcorper sit tincidunt enim
            sagittis sit. Gravida erat neque id blandit faucibus scelerisque.
            Facilisi nunc quis at ves tibulum facilisis sed in ac nunc. */}
          </p>
          <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae
            a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis
            nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor
            morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit
            leo tellus nullam neque , aliquet neque libero vestibulum. Accumsan
            egestas sed ut ele mentum vulputate praesent et interdum. Praesent
            est, tortor congu e justo, nibh ipsum in lorem ut. Euismod molestie
            dictum nulla eg estas pulvinar. Vel tincidunt eget lacus,
            pellentesque ac tellus varius. Ullamcorper sit tincidunt enim
            sagittis sit. Gravida erat neque id blandit faucibus scelerisque.
            Facilisi nunc quis at ves tibulum facilisis sed in ac nunc. */}
          </p>
          <BlogsImage
            src={blog.featureImage}
            alt="Paris"
            sx={{ borderRadius: "6px" }}
          />
          <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae
            a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis
            nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor
            morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit
            leo tellus nullam neque , aliquet neque libero vestibulum. Accumsan
            egestas sed ut ele mentum vulputate praesent et interdum. Praesent
            est, tortor congu e justo, nibh ipsum in lorem ut. Euismod molestie
            dictum nulla eg estas pulvinar. Vel tincidunt eget lacus,
            pellentesque ac tellus varius. Ullamcorper sit tincidunt enim
            sagittis sit. Gravida erat neque id blandit faucibus scelerisque.
            Facilisi nunc quis at ves tibulum facilisis sed in ac nunc. */}
          </p>
        </BlogsText>
      </BlogContainer>
    </>
  );
};

export default SingleBlog;
