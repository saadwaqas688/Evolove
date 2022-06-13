import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../BoxCom/BoxCom";


  export const TextWrapper = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontSize:"15px",
    marginBottom:"10px",
    paddingRight:"8px",
  }));


  export const MainWrapper = styled(BoxCom)(( ) => ({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"18px",
  }));
 