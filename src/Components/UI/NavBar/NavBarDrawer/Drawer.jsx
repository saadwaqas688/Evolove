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
import {useLocation} from 'react-router';
import { Colors } from "../../../../config/palette";
const DrawerComp = () => {

  const { pathname } = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{bgcolor:'#1A1A1C',minHeight:'100vh',width:'200px'}}>
        <List sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"20px"}}>
              <ListItemButton  component="a" href="/"   >
                <ListItemIcon sx={{ color:pathname==='/'?'#E63369':"#DADAF7",fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }} primary="Home" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/aboutUs"   >
                <ListItemIcon sx={{ color:pathname==='/aboutUs'?'#E63369':"#DADAF7",fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }} primary="ABout Us" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/contactUs"   >
                <ListItemIcon sx={{ color:pathname==='/contactUs'?'#E63369':"#DADAF7",fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }} primary="Contact Us" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/login"   >
                <ListItemIcon sx={{ color:pathname==='/login'?'#E63369':"#DADAF7",fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold" , fontFamily: '"Poppins", "sans-serif"'}} primary="LogIn" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/signUp"   >
                <ListItemIcon sx={{ color:pathname==='/signUp'?'#E63369':"#DADAF7",fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }} primary="SignUp" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              
          </List>
        </Box>
      </Drawer>
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
