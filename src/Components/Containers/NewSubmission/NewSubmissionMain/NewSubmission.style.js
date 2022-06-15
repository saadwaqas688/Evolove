import {styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";


  export const Heading = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    marginBottom:"20px",
      
  }));

  
export const MainContainer = styled(BoxCom)(( ) => ({
  marginTop: "36px",
  width:"100%",
}));
