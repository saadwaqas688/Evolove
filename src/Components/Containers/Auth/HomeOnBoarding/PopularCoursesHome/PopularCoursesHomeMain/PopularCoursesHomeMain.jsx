import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import HomeCourseCard from "../../../../Home/HomeCourseCard/HomeCourseCard";

const PopularCoursesHome = () => {
 const size={sm:"12",md:"2.4",lg:"2.4"}
  return (
    <Paper elevation={0} square={true} style={{background:Colors.secondary}}>
        <Typography sx={{color:Colors.light,textAlign:"center" ,paddingTop:"50px", fontSize: "32.69px",fontWeight:'bold',  fontFamily: '"Poppins", "sans-serif"',}}>
       Popular Courses
      </Typography>
    <Grid container spacing={2} sx={{ paddingTop: "50px",paddingBottom:"50px"}}>
    <HomeCourseCard size={size}/>
    <HomeCourseCard size={size}/>
    <HomeCourseCard size={size}/>
    <HomeCourseCard size={size}/>
    <HomeCourseCard size={size}/>

      </Grid>
  </Paper>

  );
};

export default PopularCoursesHome;


