import BoxCom from "../BoxCom/BoxCom";
import {
  AvatarName,
  AvatarWrapper,
  MainWrapper,
} from "./SideBarProfileAvatar.style";
import ProfileImage from "../../../assets/images/homeOnBoarding/profileImg.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Colors } from "../../../config/palette";
const SideBarProfileAvatar = () => {
const { pathname } = useLocation();
  return (
    <MainWrapper>
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <AvatarWrapper alt="Remy Sharp" src={ProfileImage} />
        <BoxCom sx={{ marginLeft: "10px" }}>
          <AvatarName variant="body2" sx={{color:pathname==="/profile" && Colors.info}}>Profile</AvatarName>
        </BoxCom>
      </Link>
    </MainWrapper>
  );
};

export default SideBarProfileAvatar;
