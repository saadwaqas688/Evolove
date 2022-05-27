import { Box,Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../../config/palette";
import GridWrapper from "../../../../UI/Grid/GridWrapper";
import PaperWrapper from "../../../../UI/Paper/PaperWrapper";

export const Heading = styled(Typography)(({ theme }) => ({
   fontFamily: '"Poppins", "sans-serif"',
 color:Colors.secondary,
 variant:"h5",
 display:"flex",
 alignItems:"center",
 justifyContent:"center",
fontWeight: "bold" ,
fontSize:"36px",
paddingTop:"60px",

[theme.breakpoints.down("md")]: {
fontSize: "20px",
},
}));


export const FormContainer = styled(Box)(({ theme }) => ({
 paddingTop: "50px",
 paddingBottom:"50px",
  width: "60%",
  height:550, 
 [theme.breakpoints.down("md")]: {
  width: "80%", 
 },
 }));



 export const GridItem = styled(GridWrapper)(({ theme }) => ({
  padding:"15px",
 [theme.breakpoints.down("md")]: {
 
 },
 }));


 export const PaperContainer = styled( PaperWrapper
  )(() => ({
     background:"black",
     display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",

 }));