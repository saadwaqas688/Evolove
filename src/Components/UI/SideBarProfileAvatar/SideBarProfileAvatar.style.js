import { Avatar,styled, Typography } from "@mui/material";
import { Colors } from "../../../config/palette";
import BoxCom from "../BoxCom/BoxCom";


export const AvatarWrapper = styled(Avatar)(( ) => ({
  width:'60px',height:"60px"
}));


export const AvatarName = styled(Typography)(( ) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  marginTop:"20px",
  fontSize:"15px",
}));

export const MainWrapper = styled(BoxCom)(( ) => ({
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
    flexDirection:"column",  
    marginTop:"20px",
  }));