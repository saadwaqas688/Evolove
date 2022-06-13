import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";

  export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"14px",
    marginBottom:"20px",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center"
      },
      
  }));

  
  export const SubHeading = styled(Typography)(({ theme }) => ({
    marginTop:"28px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"18px",
  [theme.breakpoints.down("lg")]: {
    textAlign:"center"
    },
}));

export const RightContainer = styled(BoxCom)(({ theme }) => ({
  height:"300px",
  width:"30%",
  marginRight:"80px",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",

[theme.breakpoints.down("lg")]: {
  width:"40%",
  marginRight:"0px",
  marginLeft:"15px",
  },
  [theme.breakpoints.down("md")]: {
    width:"30%",
    marginRight:"80px",
    marginLeft:"0px",
    },
  [theme.breakpoints.down("sm")]: {
    width:"100%",
    marginRight:"0px",
    marginLeft:"0px",

    },
}));


export const LeftContainer = styled(BoxCom)(({ theme }) => ({
  width:"45%",
[theme.breakpoints.down("lg")]: {
  width:"60%"
  },
  [theme.breakpoints.down("md")]: {
    width:"45%",
    },
  [theme.breakpoints.down("sm")]: {
    width:"100%"
    },
}));

export const MainContainer = styled(BoxCom)(({ theme }) => ({
  display:'flex',
  justifyContent:"space-between",
[theme.breakpoints.down("sm")]: {
  flexDirection:"column",
  alignItems:"center",
  },
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
