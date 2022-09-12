import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Colors } from "../../../../config/palette";
import BlogCard from "../../../Containers/Blog/BlogCard/BlogCard";
import HomeCourseCard from "../../../Containers/Home/HomeCourseCard/HomeCourseCard";
import ProductCard from "../../../Containers/Shop/ProductCard/ProductCard";
import BoxCom from "../../BoxCom/BoxCom";
import {
  Count,
} from "./search.style ";

export const Search = () => {
  const size = { xs: "12", sm: "6", md: "6", lg: "3" };

  const products = useSelector((state) => state.products.filteredProducts);
  const courses = useSelector((state) => state.courses.filteredCourses);
  const blogs = useSelector((state) => state.blogs.filteredBlogs);

  return (<>
  {(courses.length>0 || products.length>0 || blogs.length>0) &&
    <Typography variant='body1' color={Colors.light} sx={{fontSize:"18px",marginTop:"30px"}}>
    Search Results
   </Typography>
  }

    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "60px", md: "0px" } }}>
      {courses.length > 0 && <Count>{courses.length} courses found</Count>}

      <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
        {courses?.map((course, index) => {
          return (
            <HomeCourseCard
              key={index}
              size={size}
              courseName={course.title}
              courseImage={course.image}
              coursePrice={course.price}
            />
          );
        })}
      </Grid>

      {blogs.length > 0 && <Count>{blogs.length} blogs found</Count>}

      <Grid container spacing={8} sx={{ paddingTop: "20px" }}>
        {blogs?.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              tag={true}
              title={blog.title}
              description={blog.description}
              image={blog.blogImage}
              blogId={blog.id}
            />
          );
        })}
      </Grid>

      {products.length > 0 && <Count>{products.length} products found</Count>}

      <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              size={size}
              title={product.title}
              description={product.description}
              image={product.profuctImage}
            />
          );
        })}
      </Grid>
    </BoxCom>
    </>

  );
};
