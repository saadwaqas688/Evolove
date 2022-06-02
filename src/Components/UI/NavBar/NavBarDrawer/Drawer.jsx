import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../BoxCom/BoxCom";
import { BellIcon } from "../../../../assets/icons/BellIcon";
const DrawerComp = ({anchor,type,isOpen,openDrawer,setOpenDrawer,children,width}) => {

  return (
    <React.Fragment>
      <Drawer
            
            
        PaperProps={{style: {border: 'none'}}}
        anchor={anchor}
        open={isOpen?isOpen:openDrawer}
        variant={type}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{bgcolor:Colors.dark,height:'100%',width:width }}>
          {children}
        </Box>
      </Drawer >
      
{ type==="temporary" ?
(
anchor==="left"?
      (
      <IconButton
        sx={{ color: Colors.light,marginLeft:"10px"}}
        onClick={() => setOpenDrawer(!openDrawer)}
        >
        <MenuIcon color={Colors.light} />
      </IconButton>
      )
      :
        ( 
        <BoxCom onClick={() => setOpenDrawer(!openDrawer)} sx={{display:'flex',alignItems:"center",justifyContent:"center",marginLeft:"20px"}}>
        <BellIcon/>
        <Typography   sx={{color:Colors.light,fontSize:"12px",fontFamily: '"Poppins", "sans-serif"',marginLeft:"5px"}}>
         Notifications
        </Typography>
        </BoxCom>
        )
):
<></>
}
      
    </React.Fragment>
  );
};

export default DrawerComp;



