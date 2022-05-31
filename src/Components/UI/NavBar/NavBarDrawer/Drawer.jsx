import React from "react";
import {
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors } from "../../../../config/palette";
const DrawerComp = ({anchor,type,isOpen,openDrawer,setOpenDrawer,children}) => {

  return (
    <React.Fragment>
      <Drawer
        anchor={anchor}
        open={isOpen?isOpen:openDrawer}
        variant={type}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{bgcolor:'#1A1A1C',minHeight:'100vh',width:'211px'}}>
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



