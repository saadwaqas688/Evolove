import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Home", "ABoutUs", "ContactUs","Login","Sign Up"];
const DrawerComp = () => {
  const [value, setValue] = useState(0);
  console.log('valuesaad',value)

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{bgcolor:'#1A1A1C',minHeight:'100vh',width:'200px'}}>
        <List >
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={()=>setValue(index)}>
              <ListItemIcon sx={{ color:value===index?'#E63369':"#DADAF7"}}>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
