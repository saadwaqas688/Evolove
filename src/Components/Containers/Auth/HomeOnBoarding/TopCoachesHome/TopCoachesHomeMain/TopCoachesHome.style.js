import { Avatar, Grid, styled, Typography } from "@mui/material";
import { Colors } from "../../../../../../config/palette";


export const HomeAvatarOccupation = styled(Typography)(({ theme }) => ({
  color:Colors.light,
  [theme.breakpoints.down("md")]: {
    textAlign:"center"
    },

// [theme.breakpoints.down("sm")]: {
//   textAlign:"center",
//   paddingLeft:"10px",
//   paddingRight:"10px"
//  },
}));


export const HomeAvatarWrapper = styled(Grid)(({ theme }) => ({

[theme.breakpoints.down("md")]: {
  flexDirection:"column",
//  fontSize: "20px",
//  textAlign:"center",
//  paddingLeft:"10px",
//  paddingRight:"10px"
},
// [theme.breakpoints.down("sm")]: {
//   textAlign:"center",
//   paddingLeft:"10px",
//   paddingRight:"10px"
//  },
}));


export const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width:'120px',height:"120px",
  color:Colors.light,

// [theme.breakpoints.down("sm")]: {
//   textAlign:"center",
//   paddingLeft:"10px",
//   paddingRight:"10px"
//  },
}));


export const HomeAvatarName = styled(Typography)(({ theme }) => ({
  color:Colors.light,
   fontWeight:"bold",
   [theme.breakpoints.down("md")]: {
    marginTop:"20px",
    textAlign:"center"
    },

// [theme.breakpoints.down("md")]: {
//  fontSize: "20px",
//  textAlign:"center",
//  paddingLeft:"10px",
//  paddingRight:"10px"
// },
// [theme.breakpoints.down("sm")]: {
//   textAlign:"center",
//   paddingLeft:"10px",
//   paddingRight:"10px"
//  },
}));