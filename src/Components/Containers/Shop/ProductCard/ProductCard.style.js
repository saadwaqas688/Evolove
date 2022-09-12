import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";

  
  export const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%", 
    height:"125px",
    // borderTopRightRadius:"16px",
    // borderTopLeftRadius:"16px",
    borderRadius:"16px",
    objectFit: "cover",
    [theme.breakpoints.down("lg")]: {
      width: "100%", 
      // height:"auto"
    },
  }));

  export const NameContainer = styled(Typography)(() => ({
    color:Colors.light,
    marginLeft:"12px",
    marginTop:"6px",
    fontSize:"18px",  
    fontFamily: '"Poppins", "sans-serif"',
  
  }));


  export const FooterText = styled(Typography)(() => ({
    color:Colors.darkGrey,
    marginLeft:"12px",
    fontSize:"15px",
    fontFamily: '"Poppins", "sans-serif"',
  
  }));

  export const CardFooter = styled(BoxCom)(() => ({
    marginTop:"6px",
    paddingBottom:"15px",
    paddingRight:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  
  }));