import React from 'react'
import HomeTopCard from '../HomeTopCard/HomeTopCard'
import CoursesContainer from '../HomeCourseContainer/HomeCourseContainer';
import { HomeCoachesContainer } from '../HomeCoachesContainer/HomeCoachesContainer';
import BoxCom from '../../../UI/BoxCom/BoxCom';
import { LinkContainer, PopularCourseHeading } from '../HomeCoachesContainer/HomeCoachesContainer.style';

const Home = () => {
  return (
    <>
    <BoxCom sx={{marginTop:"60px"}}>
    <HomeTopCard/>
    </BoxCom>
    <BoxCom sx={{marginTop:"33px"}}>
      <BoxCom sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <PopularCourseHeading>
      Popular Courses
    </PopularCourseHeading>
    <LinkContainer >
            <a
              href="/signUp"
              style={{ color: "#9E8B91", textDecoration: "none" }}
            >
              See All
            </a>
          </LinkContainer>
      </BoxCom>


    <CoursesContainer/> 
     </BoxCom>
    <BoxCom sx={{marginTop:"60px"}}>
    <BoxCom sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <PopularCourseHeading>
      Popular Courses
    </PopularCourseHeading>
    <LinkContainer >
            <a
              href="/signUp"
              style={{ color: "#9E8B91", textDecoration: "none" }}
            >
              See All
            </a>
          </LinkContainer>
      </BoxCom>
    <HomeCoachesContainer/>
    </BoxCom>

 

    </>
  )
}

export default Home