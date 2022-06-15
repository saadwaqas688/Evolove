import {styled,Typography } from "@mui/material";
import { Colors } from "../../../../../config/palette";
import BoxCom from "../../../../UI/BoxCom/BoxCom";
import Button from "../../../../UI/Button/Button";

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
  color: Colors.light,
  fontSize: "12px",
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
  marginTop: "20px"
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
  alignItems:"center",
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

export const ProfileButton = styled(Button)(() => ({
  width:"100%",
  marginTop:"100px",
  textTransform:"none",
  fontSize:"16px",
  marginLeft:"2px"
  
  }));