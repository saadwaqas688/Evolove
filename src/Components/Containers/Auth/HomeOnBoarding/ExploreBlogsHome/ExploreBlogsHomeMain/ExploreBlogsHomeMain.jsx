import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import { ExploreBlogsHeading, ExploreBlogsImage, ExploreBlogsText } from "./ExploreBlogsHome.style";
import ExploreBlogImage from"../../../../../../assets/images/homeOnBoarding/HomeBlogImage.jpeg"


const HomeExploreBlogs = () => {
  return (
    <Paper elevation={0} square={true} style={{background:Colors.secondary}}>
        <Typography sx={{color:Colors.light,textAlign:"center" ,paddingTop:"50px", fontSize: "36px",fontWeight:'bold',  fontFamily: '"Poppins", "sans-serif"',}}>
         Explore Blogs
      </Typography>
    <Grid container spacing={1} sx={{ paddingTop: "50px",paddingBottom:"50px"}}>
    <Grid item xs={12}  md={4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <ExploreBlogsImage src={ExploreBlogImage} alt="Paris" />
    <ExploreBlogsHeading>
    Benefits of Meditation
    </ExploreBlogsHeading>
    <ExploreBlogsText>
    Lorem ipsum dolor sit amet, consectetur
     adipiscing elit. Duis neque molestie elementum, 
     id ut condimentum quis. Vitae nisi, sem facilisis sed f
     ringilla. Nunc, aliquam nunc cras 01-01-2022
     </ExploreBlogsText>
      </Grid>
      <Grid item xs={12}  md={4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <ExploreBlogsImage src={ExploreBlogImage}  alt="Paris" />
    <ExploreBlogsHeading>
    Benefits of Meditation
    </ExploreBlogsHeading>
    <ExploreBlogsText>
    Lorem ipsum dolor sit amet, consectetur
     adipiscing elit. Duis neque molestie elementum, 
     id ut condimentum quis. Vitae nisi, sem facilisis sed f
     ringilla. Nunc, aliquam nunc cras 01-01-2022
     </ExploreBlogsText>
      </Grid>
      <Grid item xs={12}  md={4} style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column"}}>
    <ExploreBlogsImage src={ExploreBlogImage}  alt="Paris" />
    <ExploreBlogsHeading>
    Benefits of Meditation
    </ExploreBlogsHeading>
    <ExploreBlogsText>
    Lorem ipsum dolor sit amet, consectetur
     adipiscing elit. Duis neque molestie elementum, 
     id ut condimentum quis. Vitae nisi, sem facilisis sed f
     ringilla. Nunc, aliquam nunc cras 01-01-2022
     </ExploreBlogsText>
      </Grid>
    </Grid>
  </Paper>

  );
};

export default HomeExploreBlogs;

