import { styled, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";

export const ExploreBlogsImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    marginTop:"45px",
    width: "80%", 
    height:"auto",
    borderRadius:"20px",
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      marginLeft:"0px",
      marginTop:"0px",
      height:'auto',
    },
  }));
  
  
  
  export const ExploreBlogsHeading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    fontSize:"15px",
    color:Colors.light,
    marginTop:"20px",
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
      },
  }));
  
  export const ExploreBlogsText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.darkGrey,
    fontSize:"12px",
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
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