import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Colors } from "../../../../config/palette";
import Button from '@mui/material/Button';
import { ExploreCourseVideo, ExploreCoursePriceText, ExploreCoursePriceHeading, PriceButton } from './SingleCourse.style';
import CourseAccordions from "../CourseVideos/CourseVideoAccordian";

const SingleCourse = () => {
    return (
        <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
            <Typography sx={{ color: Colors.white, paddingTop: "40px", fontSize: "20px", fontFamily: '"Poppins", "sans-serif"', paddingLeft: "20px" }}>
                Courses
            </Typography>
            <Grid container spacing={6} sx={{ paddingBottom: "50px", paddingLeft: { md: "20px", sm: "0px" } }}>
                <Grid item xs={12} lg={6} style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: "column" }}>
                    <ExploreCourseVideo src="https://www.youtube.com/embed/cWDJoK8zw58"
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography style={{ paddingTop: "20px", color: "#8D98AF" }}>
                                DR.John Kevin
                            </Typography>

                            <Typography style={{ paddingTop: "10px", color: "white" }}>
                                Mastery of Spirituality
                            </Typography>
                        </div>
                        <div>
                            <IconButton aria-label="add to favorites" style={{ color: Colors.darkGrey, background: "#2A2A3F", boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)", marginRight: "5px" }}>
                                <ShareIcon />
                            </IconButton>
                            <IconButton aria-label="share" style={{ color: Colors.darkGrey, background: "#2A2A3F", boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)" }}>
                                <FavoriteIcon />
                            </IconButton>

                        </div>

                    </div>
                    <div style={{marginTop:"30px"}}> <CourseAccordions/></div>
                   
                </Grid>
                <Grid item xs={12} lg={6} >
                    <ExploreCoursePriceText  >
                        <Typography sx={{ color: "white", fontSize: "15px", fontFamily: "Poppins", fontWeight: '600px' }}>
                            Price
                        </Typography>
                        <Typography sx={{ color: "white", fontSize: "15px", fontFamily: "Poppins", fontWeight: '600px' }}>
                            $59.99
                        </Typography>
                    </ExploreCoursePriceText>

                    <Typography sx={{ color: Colors.white, paddingTop: "20px", fontSize: "20px", fontFamily: '"Poppins", "sans-serif"' }}>
                        Description
                    </Typography>
                    <ExploreCoursePriceHeading>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras
                    </ExploreCoursePriceHeading>
                    <PriceButton >Buy Now</PriceButton>

                </Grid>
            </Grid>
        </Paper>
    );
};
export default SingleCourse;

