import React from "react";
import {
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors } from "../../../../config/palette";
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
        <Box sx={{bgcolor:Colors.dark,height:'100vh',width:width ,overflow:"hidden"}}>
          {children}
        </Box>
      </Drawer >
      <IconButton
        sx={{ color: Colors.light, marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        >
        <MenuIcon color={Colors.light} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;



