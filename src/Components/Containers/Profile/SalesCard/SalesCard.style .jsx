import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";


export const TextContainer = styled(BoxCom)(({ theme }) => ({
background:Colors.dark,
borderRadius:"10px",
height:"57px",
width:"186px",
display:"flex",
justifyContent:"center",
alignItems:"center",
[theme.breakpoints.down("sm")]: {
  fontSize:"12px",
  width:"120px",
    },
}));

export const SalesCategory = styled(Typography)(( {theme}) => ({
fontFamily: '"Poppins", "sans-serif"',
color:Colors.light,
fontSize:"16px",
fontWeight:"bold",
[theme.breakpoints.down("sm")]: {
  fontSize:"12px",
    },
}));


export const SalesCount = styled(Typography)(({theme} ) => ({
  marginTop:"10px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"38px",
  fontWeight:"bold",
  [theme.breakpoints.down("sm")]: {
    fontSize:"18px",
      },
  }));



  export const MainContainer = styled(BoxCom)(({ theme }) => ({
    width:"450px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"50px",
    [theme.breakpoints.down("lg")]: {
      width:"400px",  
        },
    [theme.breakpoints.down("sm")]: {
    width:"100%",
    justifyContent:"space-evenly",

      },
    }));
    