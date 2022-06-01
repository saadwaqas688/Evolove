
import BoxCom from "../BoxCom/BoxCom";
import { AvatarName, AvatarWrapper,MainWrapper} from "./SideBarProfileAvatar.style";
import ProfileImage from"../../../assets/images/homeOnBoarding/homeAvatarImg.png"
  const SideBarProfileAvatar = () => {
    return (
        <MainWrapper>
        <AvatarWrapper  alt="Remy Sharp" src={ProfileImage} />
        <BoxCom sx={{marginLeft:'10px'}}>
        <AvatarName variant="body2"> 
         Profile
        </AvatarName >
        </BoxCom>
        </MainWrapper>   
    );
  };
  
  export default SideBarProfileAvatar;
  