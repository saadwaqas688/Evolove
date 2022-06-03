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
import { CourseBox, CourseVideoHeading } from './CourseVideos.style';
import ControlledAccordions from "./CourseVideoAccordian";

const CourseVideo = () => {
    return (
        <CourseBox >
            
            <Grid container  >
            <Grid item xs={12} sm={6} md={6} lg={12}>
                 <CourseVideoHeading>
                    Curriculum
                 </CourseVideoHeading>
               
             </Grid>
                    
            <ControlledAccordions/>          
       
            </Grid>

        </CourseBox>
    );
};
export default CourseVideo;

