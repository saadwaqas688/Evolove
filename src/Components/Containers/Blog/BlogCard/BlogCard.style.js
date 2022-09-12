import { styled, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";

export const BlogsImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%", 
    height:"125px",
    borderRadius:"20px",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      // height:'auto',
    },
  }));
  
  
  
  export const BlogsHeading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    fontSize:"14px",
    color:Colors.light,
    marginTop:"3px",
    [theme.breakpoints.down("lg")]: {
      fontSize:"12px",

      },
  }));
  
  export const BlogsText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.darkGrey,
    fontSize:"12px",
    [theme.breakpoints.down("lg")]: {
      fontSize:"10px",
      },
  }));
  

  export const Tag = styled(BoxCom)(({ theme }) => ({
    paddingRight:"10px",
    paddingLeft:"10px",
    marginTop:"8px",
    borderRadius:"16px",
    background:"#259F46",
    color:Colors.light,
    fontSize:"10px",
    [theme.breakpoints.down("lg")]: {
      fontSize:"8px",
      },
  }));


  export const TagHeadingWrappper = styled(BoxCom)(({ theme }) => ({
    display:"flex",
    justifyContent:"space-between",
    marginBottom:"5px",
    [theme.breakpoints.down("lg")]: {
      justifyContent:"space-around",
      },
  }));
  