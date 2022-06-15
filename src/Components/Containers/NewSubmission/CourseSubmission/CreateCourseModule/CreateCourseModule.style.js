import {Grid, styled, Typography} from "@mui/material";
import { Colors } from "../../../../../config/palette";
import BoxCom from "../../../../UI/BoxCom/BoxCom";
import Button from "../../../../UI/Button/Button";

  export const SubHeading = styled(Typography)(( ) => ({
    marginTop:"40px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"13px",
}));

export const SubHeading2 = styled(Typography)(( ) => ({
  marginTop:"40px",
fontFamily: '"Poppins", "sans-serif"',
color:Colors.light,
fontSize:"16px",
}));




export const FieldLabel = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.dimGrey,
  fontWeight:"bold",
  fontSize:"16px",
}));


export const ProfileButton = styled(Button)(() => ({
width:"100%",
marginTop:"50px",
textTransform:"none",
fontSize:"16px",
marginLeft:"2px"

}));


export const FieldWrapper = styled(BoxCom)(({ theme ,height ,border}) => ({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    background:Colors.dark,
    borderRadius:"10px",
    height:height,
    marginTop:"10px",
    cursor:"pointer",
    paddingLeft:"20px",
    paddingRight:"20px",
    border:border && ` 1px solid ${Colors.info}  `,
    }));


    export const CardText = styled(Typography)(( {theme}) => ({
        fontFamily: '"Poppins", "sans-serif"',
        color:Colors.light,
        fontSize:"16px",
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


                export const Count = styled(BoxCom)(() => ({
                  color:Colors.light,
                  display:"flex",
                  justifyContent:"center",
                  background:"#2A2A3F",
                  borderRadius:"50px",
                  height:"17px",
                  width:"18px",
                  marginLeft:"10px",
                  padding:"2px",
                  paddingBottom:"4px"
                  }));