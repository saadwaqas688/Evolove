import { Button, styled, Avatar, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";
import IconButton from '@mui/material/IconButton';
import BoxCom from '../../../UI/BoxCom/BoxCom';

export const ExploreCourseImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  marginTop: "45px",
  width: "100%",
  height: "14rem",
  borderRadius: "20px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    marginLeft: "0px",
    marginTop: "0px",
    height: '18rem',
  },
}));
export const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: '40px', height: "40px",
  color: Colors.light,
}));
export const ExploreCourseHeading = styled('div')(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color: Colors.light,
  marginTop: "20px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  },
}));
export const ExploreCourseText = styled('div')(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color: Colors.white,
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  },
}));

// course price
export const ExploreShopPriceHeading = styled("div")(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color: Colors.darkGrey,
  marginTop: "20px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  },
}));
export const ExploreShopPriceText = styled('div')(({ theme }) => ({
  borderRadius: "11.57px",
  height: "65.54px",
  padding: "0 23px",
  marginTop: "2.7rem",
  display: 'flex', background: Colors.info,
  justifyContent: "space-between", alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
    marginLeft: "12%",
    height: "12%",
    width: "60%"
  },
}));
export const PriceButton = styled("button")(({ theme }) => ({
  fontWeight: "38rem",
  marginTop: "1.5rem",
  width: "11.5rem",
  height: "3.5rem",
  fontSize: "18.26px",
  background: Colors.info,
  color: Colors.white,
  borderRadius: "2.5rem",
  lineHeight: "27px",
  border: "none",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
    width: "70%",
    height: "12%",
    marginBottom: "10rem",
    marginLeft: "12%",

  },

}));
export const EbookButton = styled("button")(({ theme }) => ({
  fontWeight: "300px",
  marginTop: "1.5rem",
  width: "4.5rem",
  height: "2rem",
  fontSize: "18.26px",
  background: Colors.info,
  color: Colors.white,
  borderRadius: "2.5rem",
  lineHeight: "19px",
  border: "none",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",

  },

}));

export const MainDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  }
}));

export const MainInnerDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column"
}));

export const ShareButton = styled(IconButton)(({ theme }) => ({
  color: Colors.darkGrey,
  background: "#2A2A3F",
  boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)",
  marginRight: "5px"
}));

export const FavoriteButton = styled(IconButton)(({ theme }) => ({
  color: Colors.darkGrey,
  background: "#2A2A3F",
  boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)"
}));

export const TypographyPrice = styled(IconButton)(({ theme }) => ({
  color: "white",
  fontSize: "15px",
  fontFamily: "Poppins",
  fontWeight: '600px'
}));

export const TypographyDescription = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  paddingTop: "20px",
  fontSize: "20px",
  fontFamily: '"Poppins", "sans-serif"',
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
  },
}));
export const TypographyName = styled(Typography)(({ theme }) => ({
  display: "flex",
  paddingTop: "20px",
  color: "#8D98AF",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
  }
}));

export const TypographyPublisherName = styled(Typography)(({ theme }) => ({
  color: '#ffff',
  paddingRight: "5px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
  }
}));
export const TypographyToicName = styled(Typography)(({ theme }) => ({
  paddingTop: "10px",
  color: "white",
  [theme.breakpoints.down("lg")]: {
    textAlign: "left",

  },
}));
export const TypographyPublisher = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  paddingTop: "20px",
  fontWeight: "400px",
  fontSize: "18px",
  marginBottom: "10px",
  lineHeight: "27px",
  fontFamily: '"Poppins", "sans-serif"',
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",

  },
}));
export const ShopPublisherDescription = styled("div")(({ theme }) => ({
  fontFamily: "Poppins",
  color: Colors.darkGrey,
  marginTop: "20px",
  fontWeight: "400px",
  fontSize: "14px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  },
}));
export const ShopReviewerDescription = styled("div")(({ theme }) => ({
  fontFamily: "Poppins",
  color: Colors.darkGrey,
  marginTop: "20px",
  fontWeight: "300px",
  fontSize: "14px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  },
}));

export const TypographyPublisherReview = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  paddingTop: "20px",
  fontWeight: "400px",
  fontSize: "18px",
  marginBottom: "10px",
  lineHeight: "27.36px",
  fontFamily: "Poppins",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",

  },
}));

// box
export const BlogBox = styled(BoxCom)(({ theme }) => ({
  background: "#1A1A1C",
  height: "32rem",
  paddingLeft: "10px",
  // width:"50%",
  paddingBottom: "1.5rem",
  borderRadius: "8px",
  border: "0.25px solid #676F85",
  [theme.breakpoints.down("lg")]: {
    width: "auto",
    padding: '5px',
    height: "auto"
  },
}));

// image
export const AddBlogImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "95%",
  height: "215px",
  marginTop: "10px",
  borderRadius: "5px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: '18rem',
  },
}));

//AddBlogTypography

export const AddBlogTypography = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  fontSize: "14.8px",
  width: "95%",
  fontFamily: "Poppins",
  paddingTop: "20px",
  lineHeight: "20px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "left",
    width: "auto",

  },
}));

// add Image AddBlogImageBox
export const AddBlogImageBox = styled(BoxCom)(({ theme }) => ({
  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  flexDirection: 'column',
  background: "#1A1A1C",
  height: "11rem",
  width: "23rem",
  borderRadius: "8px",
  border: "0.25px solid #676F85",
  [theme.breakpoints.down("lg")]: {
    width: "auto",
    padding: '5px',
    height: "10rem"
  },
}));
// UplaodBloag Image
export const UploadBlogImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "2rem",
  height: "2rem",

}));

//ImageUplad Buttom

export const AddImageUploadButton = styled(Button)(() => ({
  background: Colors.dark,
  color: "#6978A0"
}));



// Add image text
export const AddImageTypography = styled(Typography)(() => ({
  marginLeft: "5px",
  fontSize: "14.8px",
  fontFamily: "Poppins",
  color: Colors.info
}))

//Write your blog here
export const WriteTypography = styled(Typography)(() => ({
  color: Colors.white,
  marginTop: "50px",
  fontSize: "14.8px",
  fontFamily: "Poppins"
}))
//New Submission
export const NewSubmissionTypography = styled(Typography)(() => ({
  color: Colors.white,
  marginTop: "10px",
  fontSize: "14.8px",
  fontFamily: "Poppins"
}))

//  Write your blog Main 
export const BlogDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "40px"
}));

//Write your blog here
export const BlogTypography = styled(Typography)(() => ({
  color: "#B7C6D9",
  fontSize: "14.8px",
  fontFamily: "Poppins",
}))

//add image MainTypography
export const MainTypography = styled(Typography)(() => ({
  display: 'flex',
  marginBottom: "0.5rem",


}))

// UploadTypography
export const UploadTypography = styled(Typography)(() => ({
  color: Colors.white,
  marginTop: "50px",
  fontSize: "14.8px",
  fontFamily: "Poppins"

}))
// FeatureImageTypography
export const FeatureImageTypography = styled(Typography)(({ theme }) => ({
  color: "#B7C6D9",
  fontSize: "14.8px",
  fontFamily: "Poppins",
  marginTop: "40px",
  paddingBottom: "8px",
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "5px"
  }

}))
// ContinueButton
export const ContinueButton = styled(Typography)(({ theme }) => ({
  width: "95%",
  background: Colors.info,
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: Colors.light,
  height: "59px",
  border: "none",
  borderRadius: "36.5227px",
  [theme.breakpoints.down("lg")]: {
    height: "40px",
    marginLeft: "5px",
    marginBottom: "10px"
  }

}))