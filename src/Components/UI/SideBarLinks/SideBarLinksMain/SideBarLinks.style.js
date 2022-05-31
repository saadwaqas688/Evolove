import { ListItemText,ListItemIcon} from "@mui/material";
import { styled } from "@mui/material/styles";

 export const ListItemTextContainer = styled( ListItemText
   )(() => ({
   marginLeft:"10px",
   fontSize: "11px",
   fontWeight:"bold", 
   fontFamily: '"Poppins", "sans-serif"',
  }));

  export const ListItemIconContainer = styled( ListItemIcon
   )(() => ({
      marginTop:"20px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
  }));