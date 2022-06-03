import { Card, CardMedia, styled} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";
  // export const CourseCard = styled(BoxCom)(({ theme,src }) => ({
  //   fontFamily: '"Poppins", "sans-serif"',
  //   color:Colors.darkGrey,
  //   borderRadius:"16px",
  //   border:"1px solid",
  //   height:"218px",
  //   width:"100%",
  //   [theme.breakpoints.down("lg")]: {
  //       width:"100%",
  //       height:"200px",
  //     },

  // }));

  export const CourseCard = styled(Card)(({ theme }) => ({

    // minWidth: "3%",
    minHeight:"100px",
    borderRadius:"16px",
    [theme.breakpoints.down("md")]: {
      minHeight:"300px",
      // borderRadius:"30px",


        // width:"100%",
        // height:"200px",
      },
      [theme.breakpoints.down("sm")]: {
        // borderRadius:"40px",
  
  
          // width:"100%",
          // height:"200px",
        },

  }));

  export const CourseCardMedia = styled(CardMedia)(({ theme }) => ({
    objectFit:"fill",
    // height:"115px",


  }));
  
  
  export const CourseImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%", 
    height:"auto",
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      marginLeft:"0px",
      marginTop:"0px",
      height:'auto',
    },
  }));