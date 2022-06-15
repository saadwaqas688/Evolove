import {
    Grid,
    Paper,
} from "@mui/material";

import { Colors } from "../../../../config/palette";
import ShopImage from '../../../../assets/images/homeOnBoarding/unsplash_Z3whZQGUPAE.png';
import UploadBlogdImage from '../../../../assets/images/homeOnBoarding/camera.png';


import { BlogBox, AddBlogImage, AddBlogTypography, AddBlogImageBox, UploadBlogImage, AddImageUploadButton, AddImageTypography, UploadTypography, NewSubmissionTypography, BlogDiv, BlogTypography, MainTypography, WriteTypography, FeatureImageTypography, ContinueButton } from "./AddBlog.style.js";
import CameraIcon from "../../../../assets/icons/cameraIcon";
const AddBlog = () => {
    return (
        <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
            <NewSubmissionTypography >
                New Submission
            </NewSubmissionTypography>
            <Grid container spacing={6}>
                <Grid item xs={12} lg={6} >
                    <WriteTypography >
                        Write your blog here
                    </WriteTypography>
                    <BlogDiv>
                        <BlogTypography >
                            Write  blog here
                        </BlogTypography>
                        <MainTypography >
                            <CameraIcon />
                            <AddImageTypography >Add Image</AddImageTypography>
                        </MainTypography>
                    </BlogDiv>
                    <BlogBox >

                        <div>
                            <AddBlogTypography >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc,
                                aliquam nunc cras Lorem ipsum dolor sit amet,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc,
                                aliquam nunc cras Lorem ipsum dolor sit amet,
                            </AddBlogTypography>
                            <AddBlogImage src={ShopImage} />

                        </div>

                    </BlogBox>

                </Grid>
                <Grid item xs={12} lg={6} >
                    <UploadTypography >
                        Upload feature image of the blog
                    </UploadTypography>
                    <FeatureImageTypography >
                        Feature Image
                    </FeatureImageTypography>

                    <AddBlogImageBox >
                        <UploadBlogImage src={UploadBlogdImage} />
                        <AddImageUploadButton >
                            Upload Image
                        </AddImageUploadButton>

                    </AddBlogImageBox>

                    <ContinueButton >continue</ContinueButton>
                </Grid>
            </Grid>
        </Paper>
    );
};
export default AddBlog;