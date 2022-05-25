import { Button, styled, Typography } from "@mui/material";
import { Colors } from "../../../../../../config/palette";

export const HomeAboutUsHeading = styled(Typography)(({ theme }) => ({
  // fontFamily: '"Montez", "cursive"',
  color:Colors.light,
  variant:"h6",
  mt: "20px",fontSize:"25px",paddingRight:"10px",

[theme.breakpoints.down("md")]: {
 fontSize: "25px",
 paddingTop:'16px',
//  display: "flex",
//  justifyContent: "space-evenly",
//  alignItems: "center",
 textAlign:"center",
 paddingLeft:"10px",
 paddingRight:"10px"

//  padding: "0px",
//  margin:"auto"


},
}));


export const HomeAboutUs = styled(Typography)(({ theme }) => ({
  // fontFamily: '"Montez", "cursive"',
  color:Colors.light,
  variant:"h6",
  mt: "20px",fontSize:"18px",paddingRight:"10px",marginBottom:"50px",

[theme.breakpoints.down("md")]: {
 fontSize: "20px",
//  display: "flex",
//  justifyContent: "space-evenly",
//  alignItems: "center",
 textAlign:"center",
 paddingLeft:"10px",
 paddingRight:"10px"

//  padding: "0px",
//  margin:"auto"


},
[theme.breakpoints.down("sm")]: {
 //  display: "flex",
 //  justifyContent: "space-evenly",
 //  alignItems: "center",
  textAlign:"center",
  paddingLeft:"10px",
  paddingRight:"10px"
 
 //  padding: "0px",
 //  margin:"auto"
 
 
 },
}));

export const ProductAddToCart = styled(Button)(({ theme }) => ({
  color:Colors.light,
  width: "200px",
  fontSize: "20px",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    padding: "10px 5px",
    display:"none"
  },
  background: "#E63369",
  borderRadius:'30px',
  padding:"10px 5px",

}));

export const ProductAddToCartSecond = styled(Button)(({ theme }) => ({
  color:Colors.light,
  width: "200px",
  fontSize: "20px",
  display:'none',
  [theme.breakpoints.down("md")]: {
    width: "300px",
    padding: "10px 5px",
    display:'inline',
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height:"70px",
    padding: "10px 5px",
    display:'inline',
  },
  background: "#E63369",
  borderRadius:'30px',
  padding:"10px 5px",

}));


export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  marginTop:"45px",
  width: "80%", 
  height:"auto",
  boxShadow: "-50px -32px 0px 0px rgba(218, 218, 247, 1)",
  '-webkit-box-shadow': "-50px -32px 0px 0px rgba(218, 218, 247, 1)",
  "-moz-box-shadow": "-50px -32px 0px 0px rrgba(218, 218, 247, 1)",
  [theme.breakpoints.down("md")]: {
    width: "100%", 
    boxShadow:"none",
    marginLeft:"0px",
    marginTop:"0px",
    height:'auto',
  },
}));