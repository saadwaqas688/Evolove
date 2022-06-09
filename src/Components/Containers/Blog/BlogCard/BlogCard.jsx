import {
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExploreBlogImage from"../../../../assets/images/homeOnBoarding/HomeBlogImage.jpeg"
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { BlogsHeading, BlogsImage, BlogsText,Tag, TagHeadingWrappper } from "./BlogCard.style";

const BlogCard = ({tag}) => {
  return (
    <Grid item  xs={12} sm={6}   lg={4} style={{display:'flex',justifyContent:'flex-start',flexDirection:"column"}}>
          <Link to="/blogs/singleBlog" style={{textDecoration:"none"}}>

    <BlogsImage src={ExploreBlogImage} alt="Paris" />
    <TagHeadingWrappper >
    <BlogsHeading>
    Benefits of Meditation
    </BlogsHeading>
    {
    tag &&
    <BoxCom>
    <Tag >
      Free
    </Tag>
    </BoxCom>
    }
    </TagHeadingWrappper>

    <BlogsText>
    Lorem ipsum dolor sit ametihyedoih consect adipiscing elit.
     Duis neque molestie elementum, id ut condimentum quis. 
     Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam 
     nunc cras 01-01-2022
     </BlogsText>
      </Link>
      </Grid>

  );
};

export default BlogCard;

