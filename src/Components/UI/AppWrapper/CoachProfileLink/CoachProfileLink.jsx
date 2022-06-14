import React from "react";
import ProfileSwitchIcon from '../../../../assets/icons/ProfileSwitchIcon.jsx'
import { Link } from "react-router-dom";
import {MainWrapper, TextWrapper} from "./CoachProfileLink.style";

const CoachProfileLink = ( {pathname}) => {

  return (
      
    <MainWrapper >
        <TextWrapper>
        CoachProfile
         </TextWrapper>
         <Link to={pathname==="coachProfile"?"/profile":"/coachProfile"} style={{ textDecoration: "none" }}>
      <ProfileSwitchIcon position={pathname==="coachProfile"?"right":"left"}/>
      </Link>
      </MainWrapper>
  );
};

export default CoachProfileLink;
