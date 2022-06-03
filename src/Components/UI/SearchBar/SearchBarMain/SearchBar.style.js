import { styled } from "@mui/material/styles";
import BoxCom from "../../BoxCom/BoxCom";
import TextfieldComp from "../../TextFieldCom/Textfield";

export const SearchField = styled(  TextfieldComp )(({ width }) => ({
    height:"50px",
    width:width,
   }));

   export const SearchBarWrapper = styled(  BoxCom )(({ theme}) => ({
       marginTop:"20px",
    width:"65%",
    [theme.breakpoints.down("lg")]: {
        marginTop:"0px",
        width:"100%",
       },
   }));