import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Colors } from "../../../../../../config/palette";
import { HomeAboutUs, HomeAboutUsHeading, ProductAddToCart, ProductAddToCartSecond, ProductImage } from "./AboutUsHomeMain.style";
import AboutUsImage from"../../../../../../assets/images/homeOnBoarding/mackbok.png"

const AboutUsHome = () => {
  return (
    <Paper elevation={6} square={true} style={{background:Colors.secondary}}>
        <Typography sx={{color:Colors.light,textAlign:"center" ,paddingTop:"50px", fontSize: "36px",fontWeight:'bold'}}>
        About Us
      </Typography>
    <Grid container spacing={1} sx={{ paddingTop: "50px",paddingBottom:"50px"}}>
      <Grid item xs={12}  md={6} style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
             {/* <ImageWrapper> */}
              <ProductImage src={AboutUsImage}/>
              {/* </ImageWrapper> */}

      </Grid>
  
    <Grid item sm={12}  md={6} >
  
    <HomeAboutUsHeading >
    Lorem ipsum dolor sit amet, consectetur
      </HomeAboutUsHeading> 
      <HomeAboutUs variant="body2" sx={{paddingRight:"100px",paddingTop:"20px",paddingBottom:"20px",fontSize:'20px'}} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus varius amet, 
      donec sit pellentesque sit. Imperdiet porttitor eget in dolor senectus placerat. 
      Fermentum id tellus purus varius arcu varius. Sed vitae pulvinar ornare ac ligula 
      ante sed viverra neque. Nisl amet id phasellus sollicitudin velit diam nec semper.
      Pretium aenean quis sit volutpat consectetur leo habitant sed. Nibh massa porttitor
      sed dolor ut waqas khan. 
      </HomeAboutUs> 
      <div style={{display:'flex',justifyContent:"space-even"}}>
<ProductAddToCart  >
  Read More
</ProductAddToCart>
<ProductAddToCart sx={{marginLeft:"20px"}}>
  Download App
</ProductAddToCart>
</div>
    </Grid> 
      <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',padding:"20px"}}>

    <ProductAddToCartSecond>
    Read More
    </ProductAddToCartSecond>

     </Grid>
     <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',padding:"20px"}}>

<ProductAddToCartSecond>
Download App
</ProductAddToCartSecond>

 </Grid>
    </Grid>
  </Paper>

  );
};

export default AboutUsHome;

