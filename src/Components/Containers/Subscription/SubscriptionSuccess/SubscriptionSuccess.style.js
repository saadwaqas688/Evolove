import { styled, Typography} from "@mui/material";
import SuccessIcon from "../../../../assets/icons/SuccessIcon";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";

  export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    marginTop:"40px",
    [theme.breakpoints.down("md")]: {
      textAlign:"center"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize:"12px",
        },
      
  }));




export const MainContainer = styled(BoxCom)(({ theme }) => ({
  marginTop:"100px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
      [theme.breakpoints.down("xs")]: {
        marginTop:"60px",
          },
}));


export const SuccessIconWrapper = styled(SuccessIcon)(( ) => ({
  height:"10px",
  width:"10px",
}));


export const RequestsubmitedText = styled(Typography)(({ theme }) => ({
  marginTop:"30px",
fontFamily: '"Poppins", "sans-serif"',
color:Colors.light,
fontSize:"23px",
fontWeight:"bold",
[theme.breakpoints.down("sm")]: {
  fontSize:"16px",
  },
}));

export const Heading2 = styled(Typography)(( {theme}) => ({
  marginTop:"20px",
fontFamily: '"Poppins", "sans-serif"',
color:Colors.grey,
fontSize:"23px",
lineHeight:"40px",
[theme.breakpoints.down("sm")]: {
  fontSize:"14px",
  },
}));
