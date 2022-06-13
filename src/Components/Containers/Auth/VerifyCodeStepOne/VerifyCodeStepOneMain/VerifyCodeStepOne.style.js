import { Box,Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../../config/palette";
import GridWrapper from "../../../../UI/Grid/GridWrapper";
import PaperWrapper from "../../../../UI/Paper/PaperWrapper";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";

export const Heading = styled(Typography)(({ theme }) => ({
   background:Colors.secondary,
   fontFamily: '"Poppins", "sans-serif"',
   color:Colors.light,
 variant:"h5",
 display:"flex",
 alignItems:"center",
 justifyContent:"center",
fontWeight: "bold" ,
fontSize:"30px",
paddingTop:"60px",
[theme.breakpoints.down("sm")]: {
fontSize: "20px",
},
}));


export const FormContainer = styled(Box)(({ theme }) => ({
 paddingTop: "50px",
 paddingBottom:"50px",
  width: "50%",
 [theme.breakpoints.down("md")]: {
  width: "100%", 
 },
 }));



 export const GridItem = styled(GridWrapper)(({ theme }) => ({
  padding:"15px",
 [theme.breakpoints.down("sm")]: {
    size:"small"
 
 },
 }));


 export const PaperContainer = styled( PaperWrapper
  )(() => ({
     height:"100vh",
     background:Colors.secondary,
     margin:"0px",
     display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",

 }));

export const SubHeading = styled(Typography)(({ theme }) => ({
   fontFamily: '"Poppins", "sans-serif"',
   color:"#B7C6D9",
   fontSize:"18px",
   display:"flex",
   textAlign:"center",
   width:"40%",
   flexDirection:"column",
  [theme.breakpoints.down("sm")]: {
   width:"300px",
  },
  [theme.breakpoints.down("xs")]: {
   fontSize:"14px",
   width:"120px",
  },
  }));


  export const VerificationCodeField = styled(  TextfieldComp )(({ theme }) => ({
   height:"60px",
   width:"100%",
  [theme.breakpoints.down("md")]: {
   width:"100%",
  },
  [theme.breakpoints.down("xs")]: {
   // width: '20%',

  },
  }));

  export const LinkContainer = styled(Typography)(({theme}) => ({
   paddingBottom:"150px",
   color:Colors.darkGrey,
   fontSize:"20px",
   fontFamily: '"Poppins", "sans-serif"',
   fontWeight:"bold",
   width:"50%",
   textAlign:"center",
   [theme.breakpoints.down("sm")]: {
      width: '96%',

     },
 }));