import {
  CardFooter,
  CourseImage,
  CourseNameContainer,
  HeartIconContainer,
  IconContainer,
  NameContainer,
  ShareIconContainer,
} from "./HomeCourseCard.style";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { Grid, Typography } from "@mui/material";
import Button from "../../../UI/Button/Button";
import { Colors } from "../../../../config/palette";
import { ShareIcon } from "../../../../assets/icons/ShareIcon";
import { HeartIcon } from "../../../../assets/icons/HeartIcon";

const HomeCourseCard = ({ size, courseName, courseImage, coursePrice }) => {
  return (
    <Grid item xs={12} sm={size?.sm} md={size?.md} lg={size?.lg}>
      <BoxCom sx={{ background: Colors.dark, borderRadius: "16px" }}>
        <CourseImage src={courseImage} alt="Paris" />
        <IconContainer>
          <ShareIconContainer>
            <ShareIcon />
          </ShareIconContainer>
          <HeartIconContainer>
            <HeartIcon />
          </HeartIconContainer>
        </IconContainer>
        <BoxCom>
          <NameContainer variant="body1">Dr.John Kevin</NameContainer>
          <CourseNameContainer variant="body1">
            {courseName}
          </CourseNameContainer>
          <CardFooter>
            <Typography
              variant="body1"
              sx={{ color: "#0AB27D", marginLeft: "12px" }}
            >
              {coursePrice}
            </Typography>
            <Button
              variant="contained"
              size="small"
              href="/subscription"
              sx={{ width: "80px", height: "25px", fontSize: "10px" }}
            >
              Subscribe
            </Button>
          </CardFooter>
        </BoxCom>
      </BoxCom>
    </Grid>
  );
};

export default HomeCourseCard;
