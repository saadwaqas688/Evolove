import React from 'react'
import HomeTopCard from '../HomeTopCard/HomeTopCard'
import CoursesContainer from '../HomeCourseContainer/HomeCourseContainer';
import { HomeCoachesContainer } from '../HomeCoachesContainer/HomeCoachesContainer';
import BoxCom from '../../../UI/BoxCom/BoxCom';
import { LinkContainer, MainContainer, PopularCourseHeading } from '../HomeCoachesContainer/HomeCoachesContainer.style';

const Home = () => {
  return (
    <>
    <BoxCom sx={{marginTop:"60px"}}>
    <HomeTopCard/>
    </BoxCom>
    < BoxCom sx={{marginTop:"33px"}}>
      <MainContainer>
    <PopularCourseHeading>
      Popular Courses
    </PopularCourseHeading>
    <LinkContainer >
            <a
              href="/allCourses"
              style={{ color: "#9E8B91", textDecoration: "none" }}
            >
              See All
            </a>
          </LinkContainer>
      </MainContainer>
    <CoursesContainer/> 
     </BoxCom>
    <BoxCom sx={{marginTop:"60px"}}>
    <MainContainer >
    <PopularCourseHeading>
      Top Coaches
    </PopularCourseHeading>
    <LinkContainer >
            <a
              href="/allCoaches"
              style={{ color: "#9E8B91", textDecoration: "none" }}
            >
              See All
            </a>
          </LinkContainer>
      </MainContainer>
    <HomeCoachesContainer/>
    </BoxCom>

 

    </>
  )
}

export default Home