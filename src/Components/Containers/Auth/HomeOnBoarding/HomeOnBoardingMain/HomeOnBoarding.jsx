import { Box, Container } from "@mui/material";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import AboutUsHome from "../AboutUsHome/AboutUsHomeMain/AboutUsHomeMain";
import HomeExploreBlogs from "../ExploreBlogsHome/ExploreBlogsHomeMain/ExploreBlogsHomeMain";
import PopularCoursesHome from "../PopularCoursesHome/PopularCoursesHomeMain/PopularCoursesHomeMain";
import SliderHomeMain from "../SliderHome/SliderMain/SliderHomeMain";
// import Post from "../post";
import TopCoachesHome from "../TopCoachesHome/TopCoachesHomeMain/TopCoachesHome";


function HomeOnBoarding() {
  return (
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
    <SliderHomeMain/>
    <AboutUsHome/>
    <PopularCoursesHome/>
    <TopCoachesHome/>
    <HomeExploreBlogs/>
  </Container> 
  <Footer/>

  </Box>
  )
}

export default HomeOnBoarding;
