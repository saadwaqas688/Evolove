import React, { useState } from "react";
import {
  Box,
  Divider,
  Stack,
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
import SearchBar from "../../SearchBar/SearchBarMain/SearchBar";
import PopularCoursesHome from "../../../Containers/Auth/HomeOnBoarding/PopularCoursesHome/PopularCoursesHomeMain/PopularCoursesHomeMain";
import TopCoachesHome from "../../../Containers/Auth/HomeOnBoarding/TopCoachesHome/TopCoachesHomeMain/TopCoachesHome";
import HomeExploreBlogs from "../../../Containers/Auth/HomeOnBoarding/ExploreBlogsHome/ExploreBlogsHomeMain/ExploreBlogsHomeMain";

const AppWrapper = () => {
  const [openDrawerLeft, setOpenDrawerLeft] = useState(false);
  const [openDrawerRight, setOpenDrawerRight] = useState(false);

  const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  return (
      <>
     {  !isMatch &&    <BoxCom>
        <Toolbar>
            <DrawerComp anchor="left" width="211px" type="temporary" isOpen={false} openDrawer={openDrawerLeft} setOpenDrawer={setOpenDrawerLeft}>
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
          <TopCoachesHome/>
          <PopularCoursesHome/>
          <HomeExploreBlogs/>

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
      {/* <Stack direction="row" justifyContent="space-between">
      <Box
        flex={1}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <SideBarLinks/>


        <Box position="fixed"></Box>
      </Box>
      <Box
        flex={4}
      >
           <BoxCom sx={{background:Colors.secondary,minHeight:"100vh"}}>
          <SearchBar/>
          </BoxCom>
      </Box>
      <Box
        flex={2}
        sx={{ display: { xs: "none", md: "block" }}}
      >
        <SideBarProfileAvatar/>
            <Divider sx={{background:"#464646",margin:"6px"}}/>
            <SideBarAccordion />
            <Divider sx={{background:"#464646",margin:"6px"}}/>
            <SideBarCategoriesAccordion/>
      </Box>
    </Stack> */}

        </>
  );
};

export default AppWrapper;
