import { Button, styled, Typography } from "@mui/material";
import { Colors } from "../../../../../../config/palette";

export const HomeAboutUsHeading = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  variant:"h6",
  mt: "20px",fontSize:"25px",paddingRight:"10px",

[theme.breakpoints.down("md")]: {
 fontSize: "25px",
 paddingTop:'16px',
 textAlign:"center",
 paddingLeft:"10px",
 paddingRight:"10px"

},
}));


export const HomeAboutUs = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  variant:"h6",
  mt: "20px",fontSize:"18px",paddingRight:"10px",marginBottom:"50px",

[theme.breakpoints.down("md")]: {
 fontSize: "20px",
 textAlign:"center",
 paddingLeft:"10px",
 paddingRight:"10px"


},
[theme.breakpoints.down("sm")]: {
  textAlign:"center",
  paddingLeft:"10px",
  paddingRight:"10px",
 
 },
}));

export const ProductAddToCart = styled(Button)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  margin: theme.spacing(0.5),
  color:Colors.light,
  width:"237px",
  height:"62px",
  fontWeight:"bold",
  borderRadius:'32.36px',
  backgroundColor:Colors.info,
 '&:hover': {
backgroundColor: '#ffb3b3',
color:'white'},

  [theme.breakpoints.down("md")]: {
    width: "300px",
    padding: "10px 5px",
    display:"none"
  },

}));

export const ProductAddToCartSecond = styled(Button)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
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
  marginLeft:"40px",
  marginTop:"45px",
  width: "80%", 
  height:"auto",
  boxShadow: "-70px -40px 0px 0px rgba(218, 218, 247, 1)",
  '-webkit-box-shadow': "-70px -40px 0px 0px rgba(218, 218, 247, 1)",
  "-moz-box-shadow": "-70px -40px 0px 0px rrgba(218, 218, 247, 1)",
  [theme.breakpoints.down("md")]: {
    width: "100%", 
    boxShadow:"none",
    marginLeft:"0px",
    marginTop:"0px",
    height:'auto',
  },
}));