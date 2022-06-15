import {
  Grid,
} from "@mui/material";
import BlogCameraIcon from "../../../../../assets/icons/BlogCameraIcon";
import { UploadHereIcon } from "../../../../../assets/icons/UploadHereIcon";
import ShopImage from '../../../../../assets/images/homeOnBoarding/unsplash_Z3whZQGUPAE.png';
import { AddBlogImage, AddBlogImageBox, AddBlogTypography, AddImageTypography,BlogBox, BlogDiv, BlogTypography,FeatureImageTypography, MainTypography, ProfileButton, UploadTypography, WriteTypography } from "./UploadBlogForm.style";
const UploadBlogForm = ({step,setStep}) => {
  return (
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
                      <BlogCameraIcon/>
                          <AddImageTypography >Add Image</AddImageTypography>
                      </MainTypography>
                  </BlogDiv>
                  <BlogBox >

                      <div>
                          <AddBlogTypography >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Placerat eleifend odio duis faucibus tempor facilisi amet.
                            In in lectus vitae a sit rhoncus aliquet dolor vestibulum.
                             Nisl et dignissim duis nulla. Arcu et, aliquet aliquet
                              ornare porttitor. Ultricies auctor morbi pellentesque
                               dui bibendum at sollicitudin volutpat. Varius sit leo
                                tellus nullam neque, aliquet neque libero vestibulum.
                                 Accumsan egestas sed ut elementum vulputate praesent
                                  et interdum. Praesent est, tortor congue justo, 
                                  nibh ipsum in lorem ut. Euismod molestie 
                                  dictum nulla egestas pulvinar. Vel tincidunt eget 
                                  lacus, pellentesque ac tellus varius. Ullamcorp
                                  er sit tincidunt enim sagittis sit. Gravida erat n
                                  eque id blandit faucibus scelerisque. Facilisi n
                                  unc quis at vestibulum facilisis sed in ac nunc.m
                                   ipsum dolor sit amet,
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
                      <UploadHereIcon/>

                  </AddBlogImageBox>
                  <ProfileButton variant="contained" onClick={()=>setStep(step+1)} >Continue</ProfileButton>

              </Grid>
          </Grid>
  );
};
export default UploadBlogForm;
