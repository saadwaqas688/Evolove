import {Grid, styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Button from "../../../UI/Button/Button";


  export const Heading = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    marginBottom:"20px",
      
  }));

  
  export const SubHeading = styled(Typography)(( ) => ({
    marginTop:"40px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"14px",
  fontWeight:"bold",
}));



export const FieldLabel = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.dimGrey,
  fontWeight:"bold",
  fontSize:"14px",
}));

export const MainContainer = styled(BoxCom)(({ theme }) => ({
  marginTop: "36px",
  width:"100%",
// [theme.breakpoints.down("lg")]: {
// width:"80%"
//   },
//   [theme.breakpoints.down("md")]: {
//     width:"368px",
//     marginTop:"30px",
//       },
//       [theme.breakpoints.down("sm")]: {
//         width:"100%"
//           },
}));


export const ProfileButton = styled(Button)(() => ({
width:"100%",
marginTop:"40px",
textTransform:"none",
fontSize:"16px",
marginLeft:"2px"

}));


export const FieldWrapper = styled(BoxCom)(({ theme ,height ,border}) => ({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:Colors.dark,
    borderRadius:"15px",
    height:height,
    marginTop:"20px",
    border:border && ` 1px solid ${Colors.info}  `,
    }));


    export const CardText = styled(Typography)(( {theme}) => ({
        fontFamily: '"Poppins", "sans-serif"',
        color:Colors.light,
        fontSize:"12px",
        fontWeight:"bold",
        [theme.breakpoints.down("sm")]: {
          fontSize:"7px",
            },
        }));
        

        export const LeftSideGrid = styled(Grid)(( {theme}) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize:"12px",
                },
            }));

            export const RightSideGrid = styled(Grid)(( {theme,marginLeft}) => ({
                marginLeft:marginLeft ,
                [theme.breakpoints.down("lg")]: {
                    marginLeft:"0px" ,
                    },
                }));