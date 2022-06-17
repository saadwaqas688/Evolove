import {Button, Grid, styled, Typography} from "@mui/material";
import { Colors } from "../../../config/palette";
import BoxCom from "../../UI/BoxCom/BoxCom";

  export const Heading = styled(Typography)(( ) => ({
    marginTop:"40px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"16px",
  fontWeight:"bold",
}));

export const SubHeading = styled(Typography)(( ) => ({
  marginTop:"40px",
fontFamily: '"Poppins", "sans-serif"',
color:Colors.light,
fontSize:"16px",
fontWeight:"bold",
// borderBottom:"6px solid green",
// lineLength:"5px"
}));



export const FieldLabel = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.dimGrey,
  fontWeight:"bold",
  fontSize:"16px",
}));


export const ProfileButton = styled(Button)(() => ({
width:"100%",
marginTop:"100px",
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
    cursor:"pointer",
    border:border && ` 1px solid ${Colors.info}  `,
    }));


    export const CardText = styled(Typography)(( {theme}) => ({
        fontFamily: '"Poppins", "sans-serif"',
        color:Colors.light,
        fontSize:"16px",
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


                export const ImageContainer = styled("img")(({ src, theme }) => ({
                  src: `url(${src})`,
                  width: "90%", 
                  height:"auto",
                  marginTop:"20px",
                  borderRadius:"5px",
                  [theme.breakpoints.down("md")]: {
                    width: "100%", 
                    height:'auto',
                  },
                }));

                export const TextContainer = styled(Typography)(({ theme }) => ({
                  fontFamily: '"Poppins", "sans-serif"',
                  color:Colors.light,
                  fontSize:"11px",
                }));


                export const TaskIconAndTextWrapper = styled(BoxCom)(() => ({
                  display:"flex",
                  alignItems:"center",
                  marginTop:"20px",
                  cursor:"pointer"
                 }));


                 export const TaskTypography = styled(Typography)(() => ({
                  marginLeft:"10px",
                  fontFamily: '"Poppins", "sans-serif"',
                  color:Colors.light,
                  fontSize:"16px",
                }));
                

                export const MoonImageContainer = styled("img")(({ src, theme }) => ({
                  src: `url(${src})`,
                  width: "30px", 
                  height:"30px",
                  borderRadius:"5px",
                  // [theme.breakpoints.down("md")]: {
                  //   width: "100%", 
                  //   height:'auto',
                  // },
                }));