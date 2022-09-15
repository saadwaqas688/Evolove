import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
// import ExploreBlogImage from"../../../../assets/images/homeOnBoarding/HomeBlogImage.jpeg"

import BoxCom from "../../../UI/BoxCom/BoxCom";
import {
  BlogsHeading,
  BlogsImage,
  BlogsText,
  Tag,
  TagHeadingWrappper,
} from "./BlogCard.style";

const BlogCard = ({ tag, title, description, image, blogId }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Link to={`/blogs/${blogId}`} style={{ textDecoration: "none" }}>
        <BlogsImage src={image} alt="Paris" />
        <TagHeadingWrappper>
          <BlogsHeading>{title}</BlogsHeading>
          {tag && (
            <BoxCom>
              <Tag>Free</Tag>
            </BoxCom>
          )}
        </TagHeadingWrappper>

        <BlogsText>{description?.slice(0, 250)}</BlogsText>
      </Link>
    </Grid>
  );
};

export default BlogCard;
