import { styled, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";

export const BlogsImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "95%", 
    height:"auto",
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      height:'auto',
    },
  }));
  
  
  
  export const BlogsHeading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    fontSize:"18px",
    color:Colors.light,
    marginTop:"20px",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center",
      fontSize:"12px",

      },
  }));
  
  export const BlogsText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontSize:"14px",
    [theme.breakpoints.down("lg")]: {
      fontSize:"10px",
      },
  }));
  

export const BlogContainer = styled(BoxCom)(({ theme }) => ({
display:'flex',
justifyContent:'flex-start',
flexDirection:"column",
width:"452px",
 [theme.breakpoints.down("lg")]: {
      width:"100%"
      
      },
  }));


  export const PageTitle = styled(Typography)(({ theme }) => ({
    color:Colors.light,
    paddingTop:"50px",
    paddingBottom:"40px",
     fontSize: "16px",
     fontWeight:'bold',  
     fontFamily: '"Poppins", "sans-serif"',
    [theme.breakpoints.down("lg")]: {
      textAlign:"center",
      },
  }));