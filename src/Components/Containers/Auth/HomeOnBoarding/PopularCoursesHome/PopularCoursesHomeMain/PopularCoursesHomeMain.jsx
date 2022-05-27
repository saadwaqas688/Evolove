import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import { PopularCoursesHeading, PopularCoursesImage, PopularCoursesText } from "./PopularCoursesHomeMain.style";
import PopularImage from"../../../../../../assets/images/homeOnBoarding/mackbok.png"

const PopularCoursesHome = () => {
  return (
    <Paper elevation={0} square={true} style={{background:Colors.secondary}}>
        <Typography sx={{color:Colors.light,textAlign:"center" ,paddingTop:"50px", fontSize: "32.69px",fontWeight:'bold'}}>
       Popular Courses
      </Typography>
    <Grid container spacing={1} sx={{ paddingTop: "50px",paddingBottom:"50px"}}>
    <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <PopularCoursesImage src={PopularImage} alt="Paris" />
    <PopularCoursesHeading>
    Benefits of Meditation
    </PopularCoursesHeading>
    <PopularCoursesText>
    Lorem ipsum dolor sit amet, consectetur
    
     </PopularCoursesText>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
      <PopularCoursesImage src={PopularImage} alt="Paris" />
    <PopularCoursesHeading>
    Benefits of Meditation
    </PopularCoursesHeading>
    <PopularCoursesText>
    Lorem ipsum dolor sit amet, consectetur
 
     </PopularCoursesText>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
      <PopularCoursesImage src={PopularImage} alt="Paris" />
    <PopularCoursesHeading>
    Benefits of Meditation
    </PopularCoursesHeading>
    <PopularCoursesText>
    Lorem ipsum dolor sit amet, consectetur

     </PopularCoursesText>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
      <PopularCoursesImage src={PopularImage} alt="Paris" />
    <PopularCoursesHeading>
    Benefits of Meditation
    </PopularCoursesHeading>
    <PopularCoursesText>
    Lorem ipsum dolor sit amet, consectetur
 
     </PopularCoursesText>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
      <PopularCoursesImage src={PopularImage} alt="Paris" />
    <PopularCoursesHeading>
    Benefits of Meditation
    </PopularCoursesHeading>
    <PopularCoursesText>
    Lorem ipsum dolor sit amet, consectetur

     </PopularCoursesText>
      </Grid>
    </Grid>
  </Paper>

  );
};

export default PopularCoursesHome;


