import { styled } from "@mui/material/styles";
import BoxCom from "../../BoxCom/BoxCom";
import TextfieldComp from "../../TextFieldCom/Textfield";

export const SearchField = styled(  TextfieldComp )(({ theme,width }) => ({
    height:"50px",
    width:width,
//    [theme.breakpoints.down("md")]: {
//     width:"100%",
//    },
//    [theme.breakpoints.down("xs")]: {

//    },
   }));

   export const SearchBarWrapper = styled(  BoxCom )(({ theme}) => ({
    width:"65%",
   [theme.breakpoints.down("md")]: {
    width:"100%",
   },
   }));