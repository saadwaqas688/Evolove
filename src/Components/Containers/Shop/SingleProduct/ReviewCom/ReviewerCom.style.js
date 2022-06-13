import { Avatar,styled, Typography } from "@mui/material";
import { Colors } from "../../../../../config/palette";
import BoxCom from "../../../../UI/BoxCom/BoxCom";





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
  marginTop:"10px",
   fontWeight:"400px",
   [theme.breakpoints.down("lg")]: {
    marginTop:"20px",
    textAlign:"center"
    },
}));

export const ShopPublisherDescription = styled("div")(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color: Colors.darkGrey,
  marginTop: "20px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  },
}));