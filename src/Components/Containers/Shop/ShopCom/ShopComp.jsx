import BoxCom from "../../../UI/BoxCom/BoxCom";
import TopCoachesImage from '../../../../assets/images/homeOnBoarding/homeAvatarImg.png';
import { HomeAvatarWrapper, AvatarWrapper, HomeAvatarName, HomeAvatarOccupation,   } from "./ShopComp.style";
  const Shopcom = () => {
    return (
      <BoxCom>
        <HomeAvatarWrapper style={{display:'flex',justifyContent:"flex-start"}}>
        <AvatarWrapper  alt="Remy Sharp" src={TopCoachesImage} />
        <BoxCom sx={{marginLeft:'10px'}}>
        <HomeAvatarName variant="body2"> 
        Esther Howard
        </HomeAvatarName >
        <HomeAvatarOccupation variant="body1">
        Meditation Speacialist
        </HomeAvatarOccupation>
        </BoxCom>
        </HomeAvatarWrapper>   
      </BoxCom>
  
    );
  };
  
  export default Shopcom;
  
  