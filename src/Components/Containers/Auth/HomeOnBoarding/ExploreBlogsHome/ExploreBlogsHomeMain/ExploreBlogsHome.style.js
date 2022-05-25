import { styled, Typography } from "@mui/material";
import { Colors } from "../../../../../../config/palette";

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
    color:Colors.light,
    marginTop:"20px",
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
      },
  
  // [theme.breakpoints.down("sm")]: {
  //   textAlign:"center",
  //   paddingLeft:"10px",
  //   paddingRight:"10px"
  //  },
  }));
  
  export const ExploreBlogsText = styled(Typography)(({ theme }) => ({
    color:Colors.light,
    textAlign:"flexstart",
    paddingLeft:"30px",
    paddingRight:"30px",
  
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
      },
  
  // [theme.breakpoints.down("sm")]: {
  //   textAlign:"center",
  //   paddingLeft:"10px",
  //   paddingRight:"10px"
  //  },
  }));
  