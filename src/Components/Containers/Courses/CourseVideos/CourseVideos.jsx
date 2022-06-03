import {
    Box,
    Divider,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Colors } from "../../../../config/palette";
import Button from '@mui/material/Button';
// import {  ExploreCourseHeading } from './SingleCourse.style';
import { CourseVideoHeading } from './CourseVideos.style';

const CourseVideo = () => {
    return (
        <Box  style={{ background:"red" ,border:"1px solid white",height:"100px"}}>
            
            <Grid container  >
                
                    <CourseVideoHeading>
                    Curriculum
                 </CourseVideoHeading>
              

                
                
            </Grid>
            {/* <Divider sx={{background:"white",paddingLeft:"20px"}}/> */}
        </Box>
    );
};
export default CourseVideo;

