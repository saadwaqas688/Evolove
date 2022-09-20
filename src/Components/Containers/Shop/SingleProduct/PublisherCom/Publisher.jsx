import BoxCom from "../../../../UI/BoxCom/BoxCom";
import { AvatarWrapper, ShopAvatarName, ShopAvatarOccupation, ShopAvatarWrapper } from "./Publisher.style.js";
import TopCoachesImage from "../../../../../assets/images/homeOnBoarding/homeAvatarImg.png"
  const Publisher = ({image, name, title}) => {
    return (
      <BoxCom>
        <ShopAvatarWrapper style={{display:'flex',justifyContent:"flex-start"}}>
        <AvatarWrapper  alt="Remy Sharp" src={image} />
        <BoxCom sx={{marginLeft:'10px'}}>
        <ShopAvatarName variant="body2"> 
        {name}
        </ShopAvatarName >
        <ShopAvatarOccupation variant="body1">
        {title}
        </ShopAvatarOccupation>
        </BoxCom>
        </ShopAvatarWrapper>   
      </BoxCom>
  
    );
  };
  
  export default Publisher;
  
  