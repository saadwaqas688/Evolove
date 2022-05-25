import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import { AvatarWrapper, HomeAvatarName, HomeAvatarOccupation, HomeAvatarWrapper } from "./TopCoachesHome.style";
import TopCoachesImage from"../../../../../../assets/images/homeOnBoarding/homeAvatarImg.png"

const TopCoachesHome = () => {
  return (
    <Paper elevation={6} square={true} style={{background:Colors.secondary}}>
        <Typography sx={{color:Colors.light,textAlign:"center" ,paddingTop:"50px", fontSize: "36px",fontWeight:'bold'}}>
        Top Coaches
      </Typography>
    <Grid container spacing={1} sx={{ paddingTop: "50px",paddingBottom:"50px"}}>
      <HomeAvatarWrapper item xs={12} sm={6} md={3} style={{display:'flex',alignItems:"center"}}>
      <AvatarWrapper sx={{ width:'120px',height:"120px" }} alt="Remy Sharp" src={TopCoachesImage} />
      <Box sx={{marginLeft:'10px'}}>
      <HomeAvatarName variant="body2"> 
      Esther Howard
      </HomeAvatarName >
      <HomeAvatarOccupation variant="body1">
      Meditation Speacialist
      </HomeAvatarOccupation>
      </Box>
      </HomeAvatarWrapper>   
      <HomeAvatarWrapper item xs={12} sm={6} md={3} style={{display:'flex',alignItems:"center"}}>
      <AvatarWrapper  alt="Remy Sharp" src={TopCoachesImage} />
      <Box sx={{marginLeft:'10px'}}>
      <HomeAvatarName variant="body2"> 
      Esther Howard
      </HomeAvatarName >
      <HomeAvatarOccupation variant="body1">
      Meditation Speacialist
      </HomeAvatarOccupation>
      </Box>
      </HomeAvatarWrapper>   
      <HomeAvatarWrapper item xs={12} sm={6} md={3} style={{display:'flex',alignItems:"center"}}>
      <AvatarWrapper  alt="Remy Sharp" src={TopCoachesImage} />
      <Box sx={{marginLeft:'10px'}}>
      <HomeAvatarName variant="body2"> 
      Esther Howard
      </HomeAvatarName >
      <HomeAvatarOccupation variant="body1">
      Meditation Speacialist
      </HomeAvatarOccupation>
      </Box>
      </HomeAvatarWrapper>   
      <HomeAvatarWrapper item xs={12} sm={6} md={3} style={{display:'flex',alignItems:"center"}}>
      <AvatarWrapper  alt="Remy Sharp" src={TopCoachesImage} />
      <Box sx={{marginLeft:'10px'}}>
      <HomeAvatarName variant="body2"> 
      Esther Howard
      </HomeAvatarName >
      <HomeAvatarOccupation variant="body1">
      Meditation Speacialist
      </HomeAvatarOccupation>
      </Box>
      </HomeAvatarWrapper>   
   
    </Grid>
  </Paper>

  );
};

export default TopCoachesHome;

