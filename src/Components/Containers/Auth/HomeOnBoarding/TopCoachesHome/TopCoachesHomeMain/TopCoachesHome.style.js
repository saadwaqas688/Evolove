import { Avatar, Grid, styled, Typography } from "@mui/material";
import { Colors } from "../../../../../../config/palette";


export const HomeAvatarOccupation = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.darkGrey,
  fontSize:"13px",
  [theme.breakpoints.down("md")]: {
    textAlign:"center"
    },
}));


export const HomeAvatarWrapper = styled(Grid)(({ theme }) => ({

[theme.breakpoints.down("md")]: {
  flexDirection:"column",
},
}));


export const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width:'50px',height:"50px",
  color:Colors.light,
  marginLeft:"30px",
}));


export const HomeAvatarName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"17px",
   fontWeight:"bold",
   [theme.breakpoints.down("md")]: {
    marginTop:"20px",
    textAlign:"center"
    },
}));