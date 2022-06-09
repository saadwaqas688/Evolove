import { Avatar,styled, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";


export const ShopAvatarOccupation = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.darkGrey,
  fontSize:"10px",
  [theme.breakpoints.down("lg")]: {
    textAlign:"center"
    },
}));


export const ShopAvatarWrapper = styled(BoxCom)(({ theme }) => ({
  marginBottom:"20px",
  [theme.breakpoints.down("lg")]: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
  },
}));


export const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width:'40px',height:"40px",
  color:Colors.light,
}));


export const ShopAvatarName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"12px",
   fontWeight:"bold",
   [theme.breakpoints.down("lg")]: {
    marginTop:"20px",
    textAlign:"center"
    },
}));