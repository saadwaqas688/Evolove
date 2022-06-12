import {styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Button from "../../../UI/Button/Button";

export const SalesCategory = styled(Typography)(( {theme}) => ({
fontFamily: '"Poppins", "sans-serif"',
color:Colors.light,
fontSize:"18px",
fontWeight:"bold",
[theme.breakpoints.down("sm")]: {
  fontSize:"12px",
    },
}));


export const FieldLabel = styled(Typography)(({theme}) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontWeight:"bold",
  fontSize:"16px",
  [theme.breakpoints.down("sm")]: {
    fontSize:"10px",
      },
}));
    

export const Details = styled(Typography)(({theme}) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:"#E7AFC0",
  fontSize:"16px",
  [theme.breakpoints.down("sm")]: {
    fontSize:"10px",
      },
}));


export const FieldWrapper = styled(BoxCom)(({ theme ,height ,border}) => ({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  background:Colors.dark,
  borderRadius:"15px",
  height:height,
  marginTop:"10px",
  border:border && ` 1px solid ${Colors.info}  `,
  paddingLeft:"20px",
  paddingRight:"20px",
  }));


  export const ProfileButton = styled(Button)(() => ({
    width:"100%",
    textTransform:"none",
    fontSize:"16px",
    marginLeft:"2px"
    
    }));