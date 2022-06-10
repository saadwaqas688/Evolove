import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";

  export const Heading = styled(Typography)(({theme} ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"14px",
    marginBottom:"20px",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center",
        },
      
  }));

  
  export const SubHeading = styled(Typography)(({theme} ) => ({
    marginTop:"20px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"14px",
  [theme.breakpoints.down("lg")]: {
    textAlign:"center",
      },
}));


export const MainContainer = styled(BoxCom)(({ theme }) => ({
  marginTop: "36px",
  width:"450px",
[theme.breakpoints.down("lg")]: {
width:"80%"
  },
  [theme.breakpoints.down("md")]: {
    margin:"auto",
    marginTop:"30px",
      },
      [theme.breakpoints.down("sm")]: {
        width:"100%"
          },
}));


  export const SalesCardContainer = styled(BoxCom)(({ theme }) => ({
    marginTop:"30px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"column",
    }));
    