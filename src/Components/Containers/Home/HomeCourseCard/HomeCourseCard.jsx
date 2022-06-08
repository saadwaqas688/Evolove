import { CardFooter, CourseImage, CourseNameContainer, HeartIconContainer, IconContainer, NameContainer, ShareIconContainer } from "./HomeCourseCard.style";
 import cardImage from "../../../../assets/images/homeOnBoarding/courseCard.png";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { Grid, Typography } from "@mui/material";
import Button from "../../../UI/Button/Button";
import { Colors } from "../../../../config/palette";
import { ShareIcon } from "../../../../assets/icons/ShareIcon";
import { HeartIcon } from "../../../../assets/icons/HeartIcon";
  
  const HomeCourseCard = () => {
    return (
      <Grid item xs={12} sm={6} md={6} lg={3}>

  <BoxCom sx={{background:Colors.dark,borderRadius:"16px"}}>
    <CourseImage src={cardImage} alt="Paris" />
    <IconContainer >
    <ShareIconContainer>
   <ShareIcon />
    </ShareIconContainer>
   <HeartIconContainer >
    <HeartIcon/>
   </HeartIconContainer>
    </IconContainer>
    <BoxCom >
    <NameContainer variant="body1" >
     Dr.John Kevin
    </NameContainer>
    <CourseNameContainer variant="body1">
     Master of Spirituality
    </CourseNameContainer>
    <CardFooter >
    <Typography variant="body1" sx={{color:"#0AB27D",marginLeft:"12px"}}>
     $59.99
    </Typography>
    <Button variant="contained" size="small" sx={{width:"80px",height:"25px",fontSize:"10px"}} >Buy Now</Button>
    </CardFooter>
    </BoxCom>

  </BoxCom>
  </Grid>


  );
  };
  
  export default HomeCourseCard;
  
  