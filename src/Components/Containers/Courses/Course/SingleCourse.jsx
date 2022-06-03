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
import { ExploreCourseVideo, ExploreCourseHeading, ExploreCourseText, ExploreCoursePriceText, ExploreCoursePriceHeading, PriceButton } from './SingleCourse.style';

const SingleCourse = () => {
    return (
        <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
            <Typography sx={{ color: Colors.white, paddingTop: "40px", fontSize: "20px", fontFamily: '"Poppins", "sans-serif"', paddingLeft: "20px" }}>
                Courses
            </Typography>
            <Grid container spacing={6} sx={{ paddingBottom: "50px", paddingLeft: { md: "20px", sm: "0px" } }}>
                <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: "column" }}>
                    <ExploreCourseVideo src="https://www.youtube.com/embed/cWDJoK8zw58"
                    />
                    <ExploreCourseHeading>
                        DR.John Kevin
                    </ExploreCourseHeading>

                    <ExploreCourseText style={{ display: 'flex' }} >
                        <Typography style={{ paddingTop: "20px"}}>
                            Mastery of Spirituality
                        </Typography>
                        <Typography style={{ float: "left", paddingTop: "15px" ,position: "absolute"}}>
                            <IconButton aria-label="add to favorites" style={{ color: Colors.white,background:"#2A2A3F",boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)",left: "550px"}}>
                                <ShareIcon />
                            </IconButton>
                            <IconButton aria-label="share" style={{ color: Colors.white ,background:"#2A2A3F",boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)",left: '550px'}}>
                                <FavoriteIcon />
                            </IconButton>

                        </Typography>
                    </ExploreCourseText>

                </Grid>
                <Grid item xs={12} md={5} >
                    <ExploreCoursePriceText  >
                        <Typography color="white">
                            Price
                        </Typography>
                        <Typography color="white">
                            $59.99
                        </Typography>
                    </ExploreCoursePriceText>
                    
                    <Typography sx={{ color: Colors.white, paddingTop: "20px", fontSize: "20px", fontFamily: '"Poppins", "sans-serif"' }}>
                        Description
                    </Typography>
                    <ExploreCoursePriceHeading>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras
                    </ExploreCoursePriceHeading>
                    <PriceButton variant="contained">Buy Now</PriceButton>

                </Grid>
            </Grid>
        </Paper>
    );
};
export default SingleCourse;
