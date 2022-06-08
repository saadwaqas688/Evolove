import { styled } from "@mui/material";
import { Colors } from "../../../../config/palette";
export const ExploreCourseVideo = styled("iframe")(({ iframe, theme }) => ({
    src: `url(${iframe})`,
    marginTop:"45px",
    width: "100%", 
    height:"14rem",
    borderRadius:"20px",
    [theme.breakpoints.down("lg")]: {
      width: "100%", 
      marginLeft:"0px",
      marginTop:"0px",
      height:'18rem',
    },
  }));

export const ExploreCourseHeading = styled('div')(({ theme }) => ({
fontFamily: '"Poppins", "sans-serif"',
color:Colors.light,
marginTop:"20px",
[theme.breakpoints.down("lg")]: {
textAlign:"center"
},
}));
export const ExploreCourseText = styled('div')(({ theme }) => ({
fontFamily: '"Poppins", "sans-serif"',
color:Colors.white,
justifyContent:"space-between",
alignItems:"center",
[theme.breakpoints.down("lg")]: {
textAlign:"center"
},
}));

// course price
export const ExploreCoursePriceHeading = styled("div")(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.darkGrey,
  marginTop:"20px",
  [theme.breakpoints.down("lg")]: {
  textAlign:"center"
  },
  }));
  export const ExploreCoursePriceText = styled('div')(({ theme }) => ({
  borderRadius:"5px",
  height:"65.54px",
  padding:"0 23px",
  marginTop:"20px",
  display: 'flex', background: Colors.pink,
  justifyContent:"space-between",alignItems:"center",
  [theme.breakpoints.down("lg")]: {
   textAlign:"center",
  marginLeft:"12%",
  height:"15%",
  width:"60%"
  },
  }));
  export const PriceButton = styled("button")(({ theme }) => ({
    
    marginTop:"20px",
    width: "183px",
    height:"54px" ,
    background:Colors.pink,
    color:Colors.white,
    borderRadius:"32.53px",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center",
      width: "70%",
      height:"15%",
      marginBottom:"10px",
      marginLeft:"12%",

      },
      
  }));

