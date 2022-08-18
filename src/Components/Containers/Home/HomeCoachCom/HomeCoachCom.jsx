import BoxCom from "../../../UI/BoxCom/BoxCom";
import { AvatarWrapper, HomeAvatarName, HomeAvatarOccupation, HomeAvatarWrapper } from "./HomeCoachCom.style";
import TopCoachesImage from "../../../../assets/images/homeOnBoarding/homeAvatarImg.png"
import { Grid } from "@mui/material";
  const HomeCoachcom = ({image,name}) => {
    return (
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <HomeAvatarWrapper style={{display:'flex',justifyContent:"flex-start"}}>
        <AvatarWrapper  alt="Remy Sharp" src={image} />
        <BoxCom sx={{marginLeft:'10px'}}>
        <HomeAvatarName variant="body2"> 
        {name}
        </HomeAvatarName >
        <HomeAvatarOccupation variant="body1">
        Meditation Speacialist
        </HomeAvatarOccupation>
        </BoxCom>
        </HomeAvatarWrapper>
        </Grid>   
  
    );
  };
  
  export default HomeCoachcom;
  
  