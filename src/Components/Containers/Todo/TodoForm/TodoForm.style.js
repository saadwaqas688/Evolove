import {styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import Button from "../../../UI/Button/Button";

  export const SubHeading = styled(Typography)(( ) => ({
    marginTop:"40px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"16px",
  fontWeight:"bold",
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
