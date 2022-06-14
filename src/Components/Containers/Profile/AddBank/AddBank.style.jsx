import {styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Button from "../../../UI/Button/Button";


  export const Heading = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    marginBottom:"20px",
      
  }));

  
  export const SubHeading = styled(Typography)(( ) => ({
    marginTop:"40px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"14px",
}));



export const FieldLabel = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.dimGrey,
  fontWeight:"bold",
  fontSize:"14px",
}));

export const Details = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.grey,
  fontSize:"14px",
}));



export const MainContainer = styled(BoxCom)(({ theme }) => ({
  marginTop: "36px",
  width:"368px",
[theme.breakpoints.down("lg")]: {
width:"80%"
  },
  [theme.breakpoints.down("md")]: {
    width:"368px",
    marginTop:"30px",
      },
      [theme.breakpoints.down("sm")]: {
        width:"100%"
          },
}));


export const ProfileButton = styled(Button)(() => ({
width:"100%",
marginTop:"60px",
textTransform:"none",
fontSize:"16px",
marginLeft:"2px"

}));
