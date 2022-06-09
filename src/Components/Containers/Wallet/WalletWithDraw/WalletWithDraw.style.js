import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";

  export const Heading = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"14px",
    marginBottom:"20px",
      
  }));

  
  export const SubHeading = styled(Typography)(( ) => ({
    marginTop:"30px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"14px",
}));



export const FieldLabel = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
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
    margin:"auto",
    marginTop:"30px",
      },
      [theme.breakpoints.down("sm")]: {
        width:"100%"
          },
}));