import React from "react";
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
import MainLogo from "../NavBarLogo/mainLogo";
import {useLocation} from 'react-router';
import { Colors } from "../../../../config/palette";

const NavBar = () => {
  const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const { pathname } = useLocation();
console.log("pathname",pathname)
  return (
      <AppBar sx={{ background: "#1A1A1C",position:'sticky',boxShadow:"none"}}>
        <Box >

        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{ml:"100px"}}>
          <MainLogo/>
          </Box>
          {isMatch ? (
            <>
              <DrawerComp/>
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
