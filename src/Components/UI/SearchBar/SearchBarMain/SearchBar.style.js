import { Button, Popover } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../BoxCom/BoxCom";
import TextfieldComp from "../../TextFieldCom/Textfield";

export const SearchField = styled(  TextfieldComp )(({ width }) => ({
    height:"50px",
    width:width,
   }));

   export const SearchBarWrapper = styled(  BoxCom )(({ theme}) => ({
       marginTop:"20px",
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
    width:"65%",
    [theme.breakpoints.down("lg")]: {
        marginTop:"0px",
        width:"100%",
       },
   }));

   export const PopupButtons = styled(Button)(() => ({
    fontFamily: '"Poppins", "sans-serif"',
    width:"100%",
    height:"30px",
    fontSize:"9px",
    borderRadius:"10px",
    borderColor:"#6978A0",
    textTransform: 'none',
}));


export const PopoverWrappwer = styled(Popover)(({ theme}) => ({
    "& .MuiPopover-paper":{
  background:Colors.dark,
  borderRadius:"14px",
    }

}));