import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";


  export const Heading = styled(Typography)(({theme,small} ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"15px",
    marginTop:"40px",
    [theme.breakpoints.down("sm")]: {
      textAlign:small && "center"
        },
      
  }));

  
  export const SubHeading = styled(Typography)(({theme,small} ) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"24px",
  marginTop:"60px",
  [theme.breakpoints.down("lg")]: {
    fontSize:"18px",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign:small && "center",
        fontSize:"16px",

          },
}));


    export const MainContainer = styled(BoxCom)(({ theme,small }) => ({
      width:"454px",
      marginTop:"50px",
      [theme.breakpoints.down("sm")]: {
        width:small?"100%": "350px",
        alignText:small && "center"
      },
      
    }));


    export const SubHeadingParagraphContainer = styled(BoxCom)(({ theme,small}) => ({
      marginTop: "16px",
      width:"440px",
    [theme.breakpoints.down("lg")]: {
        width:"360px",
      },
      [theme.breakpoints.down("sm")]: {
            width:small && "100%",
            alignText:small && "center"

          },
    }));


    export const SubHeadingParagraph = styled(Typography)(({theme,small} ) => ({
      fontFamily: '"Poppins", "sans-serif"',
      color:Colors.light,
      fontSize:"15px",
      [theme.breakpoints.down("sm")]: {
        alignText:small && "center",
        fontSize:"12px",
          },
    }));