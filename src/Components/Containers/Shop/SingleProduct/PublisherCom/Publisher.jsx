import BoxCom from "../../../../UI/BoxCom/BoxCom";
import { AvatarWrapper, ShopAvatarName, ShopAvatarOccupation, ShopAvatarWrapper } from "./Publisher.style.js";
import TopCoachesImage from "../../../../../assets/images/homeOnBoarding/homeAvatarImg.png"
  const Publisher = () => {
    return (
      <BoxCom>
        <ShopAvatarWrapper style={{display:'flex',justifyContent:"flex-start"}}>
        <AvatarWrapper  alt="Remy Sharp" src={TopCoachesImage} />
        <BoxCom sx={{marginLeft:'10px'}}>
        <ShopAvatarName variant="body2"> 
        Esther Howard
        </ShopAvatarName >
        <ShopAvatarOccupation variant="body1">
        Meditation Speacialist
        </ShopAvatarOccupation>
        </BoxCom>
        </ShopAvatarWrapper>   
      </BoxCom>
  
    );
  };
  
  export default Publisher;
  
  