import { Button, Popover } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../config/palette";

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