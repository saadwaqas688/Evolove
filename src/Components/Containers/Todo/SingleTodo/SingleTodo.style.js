import {styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Button from "../../../UI/Button/Button";

  export const SubHeading = styled(Typography)(( ) => ({
    marginTop:"40px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"16px",
  fontWeight:"bold",
}));



export const ProfileButton = styled(Button)(() => ({
width:"100%",
textTransform:"none",
fontSize:"16px",
marginLeft:"2px",
background: "#259F46",
'&:hover': {
  backgroundColor: 'lightGreen',
  color:'white'},

}));


export const TaskIconAndTextWrapper = styled(BoxCom)(() => ({
   display:"flex",
   alignItems:"center",
   marginTop:"50px"
  }));


  export const TaskTypography = styled(Typography)(() => ({
    marginLeft:"10px",
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontSize:"16px",
  }));

  export const TaskDetailTypography = styled(Typography)(() => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.dimGrey,
    fontSize:"14px",
    marginTop:"20px"
  }));


  export const TaskTimerDetailsWrapper = styled(BoxCom)(() => ({
    marginTop:"50px",
    width:"280px",
    height:"70px",
    background:"#2A2A3F",
    borderRadius:"9px",
    display:"flex"
   }));

   export const TaskTimerDetailsWrapperStartColor = styled(BoxCom)(() => ({
background:"yellow",
width:"10px",
height:"100%",
borderRadius: "9px  0px 0px  9px ",

   }));


  export const TaskTime = styled(Typography)(() => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:"#FDFDFF",
    fontSize:"14px",
  }));

  export const TaskEstimatedTime = styled(Typography)(() => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:"#FDFDFF",
    fontSize:"12px",
  }));


  export const TaskDateAndTimeWrapper = styled(BoxCom)(() => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:"#FDFDFF",
    display:"flex",
    marginTop:"10px",
  }));

  

  export const TaskClockIconAndTimeWrapper = styled(BoxCom)(() => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:"#FDFDFF",
    display:"flex",
    marginTop:"10px",
    alignItems:"center",
    marginLeft:"10px"

  }));
  