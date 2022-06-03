import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import HomeCourseCard from "../../../../Home/HomeCourseCard/HomeCourseCard";

const PopularCoursesHome = () => {
  return (
    <Paper elevation={0} square={true} style={{background:Colors.secondary}}>
        <Typography sx={{color:Colors.light,textAlign:"center" ,paddingTop:"50px", fontSize: "32.69px",fontWeight:'bold',  fontFamily: '"Poppins", "sans-serif"',}}>
       Popular Courses
      </Typography>
    <Grid container spacing={2} sx={{ paddingTop: "50px",paddingBottom:"50px"}}>
    <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <HomeCourseCard/>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <HomeCourseCard/>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <HomeCourseCard/>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <HomeCourseCard/>
      </Grid>
      <Grid item xs={12}  md={2.4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <HomeCourseCard/>
      </Grid>
    
    </Grid>
  </Paper>

  );
};

export default PopularCoursesHome;


