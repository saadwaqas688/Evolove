import React, { useEffect, useState } from "react";
import {
  Divider,
  getFormControlUtilityClasses,
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
import { useLocation } from "react-router";
import CoachProfileLink from "../CoachProfileLink/CoachProfileLink";
import { getBasePath } from "../../../../Utils/utils";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../../../redux/reducers/products";
import { getService, getServiceById } from "../../../../services/services";
import { coursesActions } from "../../../../redux/reducers/courses";
import { blogsActions } from "../../../../redux/reducers/blogs";
import { authActions } from "../../../../redux/reducers/auth";

const AppWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [openDrawerLeft, setOpenDrawerLeft] = useState(false);
  const [openDrawerRight, setOpenDrawerRight] = useState(false);
  const { pathname } = useLocation();
  const theme = useTheme();

  console.log("basePath", getBasePath(pathname));
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const session = JSON.parse(localStorage.getItem("authentication"));
      console.log("session", session);
      if (!session) navigate("/");
    }
  }, []);
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  console.log("basePath", getBasePath(pathname));

  const dispatch = useDispatch();

  const getProducts = async () => {
    let productsList = [];

    const courseData = await getService("testWaqasProduct");

    courseData.forEach((doc) => {
      productsList.push({ id: doc.id, ...doc.data() });
    });

    dispatch(productsActions.setProducts(productsList));
  };

  const getBlogs = async () => {
    let blogList = [];

    const blogData = await getService("testWaqasBlogs");

    blogData.forEach((doc) => {
      blogList.push({ id: doc.id, ...doc.data() });
    });

    dispatch(blogsActions.setBlogs(blogList));
  };

  const getCourses = async () => {
    let courseList = [];

    const courseData = await getService("testWaqasCourse");

    courseData.forEach((doc) => {
      courseList.push({ id: doc.id, ...doc.data() });
    });

    dispatch(coursesActions.setCourses(courseList));
  };

  const getUserData = async () => {
    let userData=localStorage.getItem("userData")

    if(userData){
      userData=JSON.parse(userData)
      const docSnap = await getServiceById("Users",userData.uid);

      if (docSnap.exists()) {
  
        dispatch(authActions.setUserData(docSnap.data()));

    
      } else {
    
      }
  

  
    }

  };

  useEffect(() => {
    getUserData()
    getProducts();
    getBlogs();
    getCourses();
  }, []);

  return (
    <>
      {!isMatch && (
        <BoxCom>
          <Toolbar>
            <DrawerComp
              anchor="left"
              width="211px"
              type="temporary"
              isOpen={false}
              openDrawer={openDrawerLeft}
              setOpenDrawer={setOpenDrawerLeft}
            >
              <SideBarLinks />
            </DrawerComp>
            <DrawerComp
              anchor="right"
              width="268px"
              type="temporary"
              isOpen={false}
              openDrawer={openDrawerRight}
              setOpenDrawer={setOpenDrawerRight}
            >
              <SideBarProfileAvatar />
              {(getBasePath(pathname) === "coachProfile" ||
                getBasePath(pathname) === "profile") && (
                <>
                  <Divider sx={{ background: "#464646", margin: "6px" }} />
                  <CoachProfileLink pathname={getBasePath(pathname)} />
                </>
              )}
              <Divider sx={{ background: "#464646", margin: "6px" }} />
              <SideBarAccordion />
              <Divider sx={{ background: "#464646", margin: "6px" }} />
              <SideBarCategoriesAccordion />
            </DrawerComp>
          </Toolbar>
        </BoxCom>
      )}

      <BoxCom
        sx={{
          background: Colors.secondary,
          minHeight: "100vh",
          marginRight: { xs: "10px", md: "290px" },
          marginLeft: { xs: "10px", md: "285px" },
        }}
      >
        <SearchBar />
        <Outlet />
      </BoxCom>
      {isMatch && (
        <>
          <DrawerComp
            anchor="left"
            width="211px"
            type="persistent"
            isOpen={true}
          >
            <SideBarLinks />
          </DrawerComp>
          <DrawerComp
            anchor="right"
            width="268px"
            type="persistent"
            isOpen={true}
          >
            <SideBarProfileAvatar />
            {(getBasePath(pathname) === "coachProfile" ||
              getBasePath(pathname) === "profile") && (
              <>
                <Divider sx={{ background: "#464646", margin: "6px" }} />
                <CoachProfileLink pathname={getBasePath(pathname)} />
              </>
            )}
            <Divider sx={{ background: "#464646", margin: "6px" }} />
            <SideBarAccordion />
            <Divider sx={{ background: "#464646", margin: "6px" }} />
            <SideBarCategoriesAccordion />
          </DrawerComp>
        </>
      )}
    </>
  );
};

export default AppWrapper;
