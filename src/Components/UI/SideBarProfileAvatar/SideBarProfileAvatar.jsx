import BoxCom from "../BoxCom/BoxCom";
import {
  AvatarName,
  AvatarWrapper,
  MainWrapper,
} from "./SideBarProfileAvatar.style";
import defaultImage from"../../../assets/images/homeOnBoarding/defaultProfileImage.jpg"

import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Colors } from "../../../config/palette";
import { useSelector } from "react-redux";
const SideBarProfileAvatar = () => {
const { pathname } = useLocation();
const userData = useSelector((state) => state.auth.userData);

  return (
    <MainWrapper>
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <AvatarWrapper alt="Remy Sharp" src={userData.ProfileImage?userData.ProfileImage:defaultImage} />
        <BoxCom sx={{ marginLeft: "10px" }}>
          <AvatarName variant="body2" sx={{color:pathname==="/profile" && Colors.info}}>Profile</AvatarName>
        </BoxCom>
      </Link>
    </MainWrapper>
  );
};

export default SideBarProfileAvatar;
