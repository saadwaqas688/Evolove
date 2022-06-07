
import { styled } from "@mui/material/styles";
import BoxCom from "../../../UI/BoxCom/BoxCom";

   export const Wrapper = styled(  BoxCom )(({ theme}) => ({
    width:"73%",
    [theme.breakpoints.down("lg")]: {
        marginTop:"0px",
        width:"100%",
       },
   }));