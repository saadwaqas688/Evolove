import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MainLogo from "../../../UI/NavBar/NavBarLogo/mainLogo";
import DrawerComp from "../../../UI/NavBar/NavBarDrawer/Drawer";
import SideBarAccordion from "../../SideBarAccordion/SideBarAccordion";
import SideBarLinks from "../../SideBarLinks/SideBarLinksMain/SideBarLinks";

const AppWrapper = () => {
  const [openDrawerLeft, setOpenDrawerLeft] = useState(false);
  const [openDrawerRight, setOpenDrawerRight] = useState(false);

  const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  return (
      <AppBar sx={{ background: "#1A1A1C",position:'sticky',boxShadow:"none"}}>
        <Box >

        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{ml:"100px"}}>
          <MainLogo/>
          </Box>
          {isMatch ? (
            <>
            <DrawerComp anchor="left" type="persistent" isOpen={true}>
            <SideBarLinks/>
            </DrawerComp>
            <DrawerComp anchor="right" type="persistent" isOpen={true} >
            <SideBarAccordion/>
            </DrawerComp>
            </>
          ) :(
            <>
            <DrawerComp anchor="left"  type="temporary" isOpen={false} openDrawer={openDrawerLeft} setOpenDrawer={setOpenDrawerLeft}>
            <SideBarLinks/>
            </DrawerComp>
            <DrawerComp anchor="right"  type="temporary" isOpen={false} openDrawer={openDrawerRight} setOpenDrawer={setOpenDrawerRight}>
            <SideBarAccordion/>
            </DrawerComp>
            </>
          )
          }
        </Toolbar>
        </Box>

     </AppBar>
  );
};

export default AppWrapper;
