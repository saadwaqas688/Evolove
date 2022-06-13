import BoxCom from "../../../../UI/BoxCom/BoxCom";
import TopCoachesImage from '../../../../../assets/images/homeOnBoarding/homeAvatarImg.png';
import { ShopAvatarWrapper, AvatarWrapper, ShopAvatarName } from "./ReviewerCom.style";
const ReviewerCom = () => {
  return (
    <BoxCom>
      <ShopAvatarWrapper style={{ display: 'flex', justifyContent: "flex-start" }}>
        <AvatarWrapper alt="Remy Sharp" src={TopCoachesImage} />
        <BoxCom sx={{ marginLeft: '10px' }}>
          <ShopAvatarName >
            Guy Hawkins
          </ShopAvatarName >

        </BoxCom>

      </ShopAvatarWrapper>
    </BoxCom>

  );
};

export default ReviewerCom;

