import {
  Grid,
} from "@mui/material";
import BlogCameraIcon from "../../../../../assets/icons/BlogCameraIcon";
import { UploadHereIcon } from "../../../../../assets/icons/UploadHereIcon";
import ShopImage from '../../../../../assets/images/homeOnBoarding/unsplash_Z3whZQGUPAE.png';
import { AddBlogImage, AddBlogImageBox, AddBlogTypography, AddImageTypography,BlogBox, BlogDiv, BlogTypography,FeatureImageTypography, LeftSideGrid, MainTypography, ProfileButton, RightSideGrid, SubHeading} from "./UploadBlogForm.style";

const UploadBlogForm = ({setStep,step}) => {
  return (
         <Grid container  spacing={4} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={6.5}>
            <SubHeading>Write your blog here</SubHeading>
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
</BlogBox>
   
      
            </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={5.5} >
            <SubHeading>Fill the information for course information</SubHeading>
            <FeatureImageTypography >
                      Feature Image
                  </FeatureImageTypography>

                  <AddBlogImageBox >
                      <UploadHereIcon/>

                  </AddBlogImageBox>
          <ProfileButton variant="contained" onClick={()=>setStep(step+1)} >Continue</ProfileButton>
          </RightSideGrid>
            </Grid>
  );
};
export default UploadBlogForm;
