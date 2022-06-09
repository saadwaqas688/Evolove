import React, { useState } from "react";
import {
  Divider,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "../../../UI/NavBar/NavBarDrawer/Drawer";
import SideBarAccordion from "../../SideBarAccordion/SideBarAccordion";
import SideBarLinks from "../../SideBarLinks/SideBarLinksMain/SideBarLinks";
import SideBarProfileAvatar from "../../SideBarProfileAvatar/SideBarProfileAvatar";
import { Colors } from "../../../../config/palette";
import SideBarCategoriesAccordion from "../../SideBarCategoriesAccordion/SideBarCategoriesAccordion";
import BoxCom from "../../BoxCom/BoxCom";
import SearchBar from "../../SearchBar/SearchBarMain/SearchContainer";
import { Outlet } from "react-router-dom";

const AppWrapper = ({children}) => {
  const [openDrawerLeft, setOpenDrawerLeft] = useState(false);
  const [openDrawerRight, setOpenDrawerRight] = useState(false);

  const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  return (
      <>
     {  !isMatch &&    <BoxCom>
        <Toolbar>
            <DrawerComp anchor="left"  width="211px" type="temporary" isOpen={false} openDrawer={openDrawerLeft} setOpenDrawer={setOpenDrawerLeft}>
            <SideBarLinks/>
            </DrawerComp>
            <DrawerComp anchor="right" width="268px"  type="temporary" isOpen={false} openDrawer={openDrawerRight} setOpenDrawer={setOpenDrawerRight}>
            <SideBarProfileAvatar/>
            <Divider sx={{background:"#464646",margin:"6px"}}/>
            <SideBarAccordion />
            <Divider sx={{background:"#464646",margin:"6px"}}/>
            <SideBarCategoriesAccordion/>
            </DrawerComp>
        </Toolbar>
        </BoxCom>
}

<BoxCom sx={{background:Colors.secondary,minHeight:"100vh",marginRight:{xs:"10px",md:"290px"},marginLeft:{xs:"10px",md:"285px"}}}>
          <SearchBar/>
          <Outlet />
          </BoxCom>
     {  isMatch  && <>
            <DrawerComp  anchor="left" width="211px" type="persistent" isOpen={true}>
            <SideBarLinks/>
            </DrawerComp>
            <DrawerComp anchor="right" width="268px" type="persistent" isOpen={true} >
            <SideBarProfileAvatar/>
            <Divider sx={{background:"#464646",margin:"6px"}}/>
            <SideBarAccordion />
            <Divider sx={{background:"#464646",margin:"6px"}}/>
            <SideBarCategoriesAccordion/>
            </DrawerComp>
            </>
}

        </>
  );
};

export default AppWrapper;
