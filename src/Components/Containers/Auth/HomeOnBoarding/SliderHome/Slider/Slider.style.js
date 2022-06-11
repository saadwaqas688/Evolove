import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { Colors } from "../../../../../../config/palette";

  export const PromotionsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
  }));

  export const SliderContainer = styled(Box)(() => ({
    display:"flex",
     justifyContent:"center", 
     alignItems:"center" ,
     background:Colors.grey,
     borderRadius: "0px  183.169px 0px  30.2915px ",
  }));


  export const IconContainer = styled(Box)(({theme}) => ({
    marginTop:"-60px",
    height:"387px",
    width:"495px",
    paddingBottom:"30px",
    paddingRight:"20px",
    paddingLeft:"20px",
    [theme.breakpoints.down("lg")]: {
      width: "400px", 
      height:"auto",
      },
    [theme.breakpoints.down("sm")]: {
      width: "100%", 
      height:"auto",
      marginTop:"-30px",
      paddingLeft:"10px",
      paddingRight:"10px",
      paddingBottom:"10px",

      },
 
  }));
