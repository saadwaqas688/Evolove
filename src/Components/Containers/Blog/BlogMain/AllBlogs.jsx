import { Grid, Paper} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BlogCard from "../BlogCard/BlogCard";
import { PageTitle } from "./AllBlogs.style";

const AllBlogs = () => {
  return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
      <PageTitle>Blogs</PageTitle>

      <Grid container spacing={6} sx={{ paddingRight: { lg: "35px" } }}>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
        <BlogCard tag={true}/>
     
      </Grid>
    </Paper>
  );
};

export default AllBlogs;
