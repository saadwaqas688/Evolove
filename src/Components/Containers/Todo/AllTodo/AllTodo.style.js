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
marginTop:"60px",
textTransform:"none",
fontSize:"16px",
marginLeft:"2px"

}));


export const TaskIconAndTextWrapper = styled(BoxCom)(() => ({
   display:"flex",
   alignItems:"center",
   marginTop:"50px",
   cursor:"pointer"
  }));


  export const TaskTypography = styled(Typography)(() => ({
    marginLeft:"10px",
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontSize:"16px",
  }));