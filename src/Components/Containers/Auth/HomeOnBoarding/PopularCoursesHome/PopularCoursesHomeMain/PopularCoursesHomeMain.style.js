import { styled, Typography } from "@mui/material";
import { Colors } from "../../../../../../config/palette";

export const PopularCoursesImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    marginTop:"45px",
    width: "100%", 
    height:"auto",
    borderRadius:"20px",
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      marginLeft:"0px",
      marginTop:"0px",
      height:'auto',
    },
  }));
  
  
  
  export const PopularCoursesHeading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    marginTop:"20px",
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
      },
  }));
  
  export const PopularCoursesText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.darkGrey,
    textAlign:"flexstart",
    paddingLeft:"30px",
    paddingRight:"30px",
  
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
      },

  }));
  