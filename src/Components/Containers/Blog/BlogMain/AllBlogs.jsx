import { Grid, Paper} from "@mui/material";
import { useEffect, useState } from "react";
import { Colors } from "../../../../config/palette";
import { getService } from "../../../../services/services";
import Loader from "../../../UI/Loader/Loader";
import BlogCard from "../BlogCard/BlogCard";
import { PageTitle } from "./AllBlogs.style";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    let blogList = [];

    const blogData = await getService("testWaqasBlogs");


    blogData.forEach((doc) => {
      blogList.push({ id: doc.id, ...doc.data() });
    });


    setBlogs(blogList)
    setLoading(false);
  };

  useEffect(() => {
  
    getData();

  }, []);
  return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
      <PageTitle>Blogs</PageTitle>

      <Grid container spacing={6} sx={{ paddingRight: { lg: "35px" } }}>

                      {loading?<Loader/>:

blogs?.map((blog,index)=>{
      
      return (<BlogCard 
        key={index}
        tag={true}
        title={blog.title}
        description={blog.description}
        image={blog.blogImage}
        blogId={blog.id}
          />)
    })
  }
       
     
      </Grid>
    </Paper>
  );
};

export default AllBlogs;
