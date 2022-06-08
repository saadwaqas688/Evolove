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
  borderRadius:"11.57px",
  height:"65.54px",
  padding:"0 23px",
  marginTop:"2.7rem",
  display: 'flex', background: Colors.pink,
  justifyContent:"space-between",alignItems:"center",
  [theme.breakpoints.down("lg")]: {
   textAlign:"center",
  marginLeft:"12%",
  height:"12%",
  width:"60%"
  },
  }));
  export const PriceButton = styled("button")(({ theme }) => ({
    fontWeight:"38rem",
    marginTop:"1.5rem",
    width: "11.5rem",
    height:"3.5rem" ,
    fontSize:"18.26px",
    background:Colors.pink,
    color:Colors.white,
    borderRadius:"2.5rem",
    border:"none",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center",
      width: "70%",
      height:"12%",
      marginBottom:"10rem",
      marginLeft:"12%",

      },
      
  }));

