import {
  Grid,
  Paper,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import Slider from "../Slider/Slider";
import { HeroSubText, HeroText } from "./SliderHomeMain.style";
const SliderHomeMain = () => {
  return (
    <Paper elevation={0} square={true} style={{background:Colors.secondary}}>
    <Grid container spacing={2} sx={{ paddingTop: "50px",paddingBottom:"50px" }}>
    <Grid item xs={12} md={6} >
            <HeroText
        
            >
              Keep Your Mental Health Inplace With EvoLove
            </HeroText>
            <HeroSubText>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
         </HeroSubText>
      </Grid>
    <Grid item xs={12} md={6} >
  
                  <Slider/>
 

    </Grid> 
     
    </Grid>
  </Paper>

  );
};

export default SliderHomeMain;

