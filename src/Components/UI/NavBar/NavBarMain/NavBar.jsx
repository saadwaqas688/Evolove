import React, { useState } from "react";
import {
  AppBar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "../NavBarDrawer/Drawer";
import {useLocation} from 'react-router';
import { Colors } from "../../../../config/palette";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import { EvoloveIcon } from "../../../../assets/icons/EvoloveIcon";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const { pathname } = useLocation();
  return (
      <AppBar sx={{ background: "#1A1A1C",position:'sticky',boxShadow:"none"}}>
        <Box >

        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{ml:"100px",mt:"10px"}}>
          <EvoloveIcon/>
          </Box>
          {isMatch ? (
            <>
            <DrawerComp anchor="left" type="temporary" openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
              <NavBarLinks/>
            </DrawerComp>
            </>
          ) : (                
            <List sx={{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"100px"}}>
              <ListItemButton  component="a" href="/"   >
                <ListItemIcon sx={{ color:pathname==='/'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "18px",fontWeight:"bold" , fontFamily: '"Poppins", "sans-serif"',}} primary="Home" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/aboutUs"   >
                <ListItemIcon sx={{ color:pathname==='/aboutUs'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "18px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"', }} primary="About Us" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/contactUs"   >
                <ListItemIcon sx={{ color:pathname==='/contactUs'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "18px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"', }} primary="Contact Us" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/login"   >
                <ListItemIcon sx={{ color:pathname==='/login'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "18px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"', }} primary="LogIn" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/signUp"   >
                <ListItemIcon sx={{ color:pathname==='/signUp'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <ListItemText sx={{ fontSize: "18px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"', }} primary="SignUp" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              
          </List>)}
        </Toolbar>
        </Box>

      </AppBar>
  );
};

export default NavBar;
