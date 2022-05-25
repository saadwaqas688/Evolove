import {
  Grid,
  Paper,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import Slider from "../Slider/Slider";
import { HeroSubText, HeroText } from "./SliderHomeMain.style";
const SliderHomeMain = () => {
  return (
    <Paper elevation={6} square={true} style={{background:Colors.secondary}}>
    <Grid container spacing={2} sx={{ paddingTop: "50px",paddingBottom:"50px" }}>
    <Grid item xs={12} md={6} >
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flexstart",
              marginRight: "20px",
            }}
          > */}
            <HeroText
        
            >
              Keep Your Mental Health Inplace With EvoLove
            </HeroText>
            <HeroSubText>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
         </HeroSubText>
          {/* </Box> */}
      </Grid>
    <Grid item xs={12} md={6} >
  
                  <Slider/>
 

    </Grid> 
      {/* <Grid item xs={12} md={6}>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ textAlign: "center", mt: "20px", fontWeight: "bold" }}
        >
          Keep Your Mental Health 
        
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ textAlign: "center", mt: "20px", fontWeight: "bold" }}
        >
          In Place With EvoLove
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", mt: "20px", paddingRight:'100px',paddingLeft:'100px',fontWeight: "bold" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th
          e 1500s, when an unknown printer took a
           galley of type and scrambled it to make a type 
        </Typography>
      </Grid> */}
     
    </Grid>
  </Paper>

  );
};

export default SliderHomeMain;


{/* <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */}
