import React, { useState } from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "../NavBarDrawer/Drawer";
import MainLogo from "../NavBarLogo/mainLogo";
const NavBar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
console.log('value',value)
  return (
      <AppBar sx={{ background: "#1A1A1C",position:'sticky' }}>
        <Box >

        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)", ml:"100px"}} /> */}
          <Box sx={{ml:"100px"}}>
          <MainLogo/>
          </Box>
          {isMatch ? (
            <>
              {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography> */}
              <DrawerComp/>
            </>
          ) : (
              <Tabs
              sx={{paddingRight:"130px" }}
                // indicatorColor="secondary"
                textColor="pink"
              
                value={value}
                onChange={(e, value) => setValue(value)}
              >
             
                <Tab sx={{color:value===0?'#E63369':"#DADAF7",fontWeight:"bold"}} label="Home" />
                <Tab sx={{color:value===1?'#E63369':"#DADAF7",fontWeight:"bold"}} label="About Us" />
                <Tab sx={{color:value===2?'#E63369':"#DADAF7",fontWeight:"bold"}} label="Contact Us" />
                <Tab sx={{color:value===3?'#E63369':"#DADAF7",fontWeight:"bold"}} label="Login In" />
                <Tab sx={{color:value===4?'#E63369':"#DADAF7",fontWeight:"bold"}} label="Sign Up" />
              </Tabs>
              
          
          )}
        </Toolbar>
        </Box>

      </AppBar>
  );
};

export default NavBar;
