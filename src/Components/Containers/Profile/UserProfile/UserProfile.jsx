import {
  getFormControlUtilityClasses,
  getToggleButtonGroupUtilityClass,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import productImage from "../../../../assets/images/homeOnBoarding/productImage1.png";
import {
  AvatarName,
  AvatarWrapper,
  ButtonForDesktop,
  ButtonForSmallScreen,
  Count,
  Filter,
  FilterWrapper,
  Heading,
  MainWrapper,
  NameAndIconWrapper,
  ProfileButton,
  SettingText,
} from "./UserProfile.style ";
import ProductCard from "../../Shop/ProductCard/ProductCard";
import { Colors } from "../../../../config/palette";
import HomeCourseCard from "../../Home/HomeCourseCard/HomeCourseCard";
import ProfileImage from "../../../../assets/images/homeOnBoarding/profileImg.png";
import SettingIcon from "../../../../assets/icons/SettingIcon";
import BlogCard from "../../Blog/BlogCard/BlogCard";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { getBasePath } from "../../../../Utils/utils";
import { getService, getServiceById } from "../../../../services/services";
import Loader from "../../../UI/Loader/Loader";
import Alert from "../../../UI/Alert/Alert";

const UserProfile = () => {
  const [filter, setFilter] = useState("courses");
  const [status, setStatus] = useState("Active");
  const [products, setProducts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  let { pathname } = useLocation();
  pathname = getBasePath(pathname);

  const size = { sm: "6", md: "6", lg: "3" };
  function selectFilter(selectedTab) {
    setFilter(selectedTab);
  }

  function handleNavigation(path) {
    navigate(path);
  }

  const getData = async () => {
    setLoading(true);
    let blogList = [];
    let productList = [];
    let courseList = [];
    const blogData = await getService("testWaqasBlogs");
    const productData = await getService("testWaqasProduct");
    const courseData = await getService("testWaqasCourse");
    const userDataResult=await getServiceById("Users","ydx9lsLnQGUDgCjh9IMxXSF3u8j1")

    blogData.forEach((doc) => {
      blogList.push({ id: doc.id, ...doc.data() });
    });
    // blogList = blogList.filter((item) => item.coachId === "1234567890");

    productData.forEach((doc) => {
      productList.push({ id: doc.id, ...doc.data() });
    });
    // productList = productList.filter((item) => item.coachId === "123456789");

    courseData.forEach((doc) => {
      courseList.push({ id: doc.id, ...doc.data() });
    });
    // courseList = courseList.filter((item) => item.coachId === "1234567890");
    setUserData(userDataResult.data())

    if(pathname === "profile"){
      let tempData=[]
      blogList.forEach((blog)=>{
        userDataResult.data().PurchasedBlogs.forEach((ele)=>{
          if(blog.id===ele){
            tempData.push(blog)
          }

        })
      })
      blogList=[...tempData]
      tempData=[]

      productList.forEach((product)=>{
        userDataResult.data().PurchasedProducts.forEach((ele)=>{
          if(product.id===ele){
            tempData.push(product)
          }

        })
      })
      productList=[...tempData]
      tempData=[]

      courseList.forEach((course)=>{
        userDataResult.data().PurchasedCourse.forEach((ele)=>{
          if(course.id===ele){
            tempData.push(course)
          }

        })
      })
      courseList=[...tempData]
 
    }
    setBlogs(blogList)
    setProducts(productList)
    setCourses(courseList)
    setLoading(false);
  };

  useEffect(() => {
  
    getData();

  }, [pathname]);

//  const handleFilter=(type)=>{
//   selectFilter(type)
//   let tempData=[]

//   if(type==="courses"){
//   courses.forEach((course)=>{
//     userData.PurchasedCourse.forEach((ele)=>{
//       if(course.id===ele){
//         tempData.push(course)
//       }

//     })
//   })
// setCourses(tempData)
//   }else if(type==="blogs"){

//     blogs.forEach((blog)=>{
//       userData.PurchasedBlogs.forEach((ele)=>{
//         if(blog.id===ele){
//           tempData.push(blog)
//         }
  
//       })
//     })
//   setBlogs(tempData)
//   }else{

//     products.forEach((product)=>{
//       userData.PurchasedProducts.forEach((ele)=>{
//         if(product.id===ele){
//           tempData.push(product)
//         }
  
//       })
//     })
//   setProducts(tempData)
//   }
//  }

  return (
    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "60px", md: "0px" } }}>
      <Heading>Profile</Heading>
      <MainWrapper>
        {pathname === "coachProfile" ? (
          <BoxCom
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AvatarWrapper alt="Remy Sharp" src={ProfileImage} />
            <ButtonForDesktop>
              <ProfileButton
                variant="contained"
                onClick={() => {
                  handleNavigation("/coachProfile/salesBoard");
                }}
                sx={{ width: "80%", marginLeft: "auto", marginRight: "0px" }}
              >
                Sales Board
              </ProfileButton>
              <ProfileButton
                variant="contained"
                onClick={() => {
                  handleNavigation("/coachProfile/newSubmission");
                }}
                sx={{ marginTop: "20px", width: "100%" }}
              >
                New Submission
              </ProfileButton>
            </ButtonForDesktop>
          </BoxCom>
        ) : (
          <AvatarWrapper alt="Remy Sharp" src={ProfileImage} />
        )}
        <NameAndIconWrapper>
          <AvatarName>Jerome Bell</AvatarName>
          <Link to={`/${pathname}/setting`} style={{ textDecoration: "none" }}>
            <BoxCom
              sx={{
                display: "flex",
                marginTop: { xs: "18px", sm: "0px" },
                marginBottom: { xs: "18px", sm: "0px" },
              }}
            >
              <SettingIcon />
              <SettingText>Profile Settings</SettingText>
            </BoxCom>
          </Link>
          {pathname === "coachProfile" && (
            <ButtonForSmallScreen>
              <ProfileButton
                variant="contained"
                href="/coachProfile/salesBoard"
                sx={{ width: "100%" }}
              >
                Sales Board
              </ProfileButton>
              <ProfileButton
                variant="contained"
                href="/coachProfile/newSubmission"
                sx={{ marginTop: "20px", width: "100%" }}
              >
                New Submission
              </ProfileButton>
            </ButtonForSmallScreen>
          )}
        </NameAndIconWrapper>
      </MainWrapper>
      {pathname === "coachProfile" ? (
        <FilterWrapper>
          <Filter
            onClick={() => {
              setStatus("Active");
            }}
            component="span"
            sx={{ color: status === "Active" && Colors.info }}
          >
            Active
          </Filter>
          <Filter
            onClick={() => {
              setStatus("Submited");
            }}
            component="span"
            sx={{ color: status === "Submited" && Colors.info }}
          >
            Submited
          </Filter>
        </FilterWrapper>
      ) : (
        <FilterWrapper>
          <Filter
            onClick={() => {
              selectFilter("courses");
            }}
            component="span"
            sx={{ color: filter === "courses" && Colors.info }}
          >
            My Courses
          </Filter>
          <Filter
            onClick={() => {
              selectFilter("blogs");

            }}
            component="span"
            sx={{ color: filter === "blogs" && Colors.info }}
          >
            My Blogs
          </Filter>
          <Filter
            onClick={() => {
              selectFilter("products");
            }}
            component="span"
            sx={{ color: filter === "products" && Colors.info }}
          >
            My Products
          </Filter>
        </FilterWrapper>
      )}

      <>
        { loading?<Loader/>:
        <>
      {(filter === "courses" || pathname === "coachProfile") && (
        <>
          <Count>
            {pathname === "coachProfile" ? `${status} 3 Courses` : "Courses 3"}
          </Count>
          { courses.length===0 ?
          
          <Alert severity="info" message="no course found!" />:
          
          <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
        
             { courses?.map((course,index)=>{
                
                return (<HomeCourseCard 
                    key={index}
                    size={size}
                    courseName={course.title}
                    courseImage={course.image} 
                    coursePrice={course.price} />)
              })
            }
          </Grid>
           }
        </>
      )}
      {(filter === "blogs" || pathname === "coachProfile") && (
        <>
          <Count>
            {pathname === "coachProfile" ? `${status} 3 Blogs` : "Blogs 3"}
          </Count>
          {blogs.length===0 ?
          
          <Alert severity="info" message="no blog found!" />:
          <Grid container spacing={8} sx={{ paddingTop: "20px" }}>
         
             { blogs?.map((blog,index)=>{
                
                return (<BlogCard 
                        key={index}   
                        tag={true}
                        title={blog.title}
                        description={blog.description}
                        image={blog.blogImage}
                        blogId={blog.id}
                  />)
              })
            }

          </Grid>
            }
        </>
      )}
      {(filter === "products" || pathname === "coachProfile") && (
        <>
          <Count>
            {pathname === "/coachProfile"
              ? `${status} 3 Products`
              : "Products 3"}
          </Count>
          {         products.length===0 ?
          
          <Alert severity="info" message="no product found!" />:
            <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
          {
              products?.map((product,index)=>{
                
                return (<ProductCard 
                        key={index}
                        size={size}
                        title={product.title}
                        description={product.description}
                        image={product.profuctImage}
                  />)
              })
          }

          </Grid>}
        </>
      )}
      </>
          }
      </>

    </BoxCom>
  );
};

export default UserProfile;
