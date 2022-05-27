import { Avatar, Grid, styled, Typography } from "@mui/material";
import { Colors } from "../../../../../../config/palette";


export const HomeAvatarOccupation = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.darkGrey,
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
  width:'80px',height:"80px",
  color:Colors.light,
}));


export const HomeAvatarName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
   fontWeight:"bold",
   [theme.breakpoints.down("md")]: {
    marginTop:"20px",
    textAlign:"center"
    },
}));