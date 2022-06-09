import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";

  export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"14px",
    marginBottom:"20px",
    // [theme.breakpoints.down("lg")]: {
    //   textAlign:"center"
    //   },
      
  }));

  
  export const SubHeading = styled(Typography)(({ theme }) => ({
    marginTop:"30px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"14px",
  // [theme.breakpoints.down("lg")]: {
  //   textAlign:"center"
  //   },
}));



export const Amount = styled(BoxCom)(({ theme }) => ({
  height:"52px",
  width:"60%",
  borderRadius:"8px",
  background:Colors.info,
  color:Colors.light,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
[theme.breakpoints.down("lg")]: {
  width:"80%"
  },
}));


export const AmountContainer = styled(BoxCom)(( ) => ({
  background:Colors.dark,
  borderRadius:"15px",
  width:"90%",
  height:"147px",
  marginTop:"40px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}));


export const AmountStatement = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  fontSize:"14px",
  color:"#CACACA",
  marginTop:"10px",
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