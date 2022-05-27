import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Colors } from "../../../../../config/palette";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import ContactUsImage from "../../../../../assets/images/homeOnBoarding/mackbok.png"


import { AboutUsMainImage } from "./AboutUsMain.style";


function AboutUs() {
  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <Paper elevation={6} square={true} style={{background:Colors.secondary}}>
        <Typography sx={{color:Colors.light,textAlign:"center" ,paddingTop:"50px", fontSize: "36px",fontWeight:'bold',fontFamily: '"Poppins", "sans-serif"'}}>
        About Us
      </Typography>
    <Grid container spacing={1} sx={{ paddingTop: "50px",paddingBottom:"50px"}}>
      <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
             <AboutUsMainImage src={ContactUsImage}/>

      </Grid>
  
    <Grid item  xs={12} >
      <Typography sx={{color:Colors.light ,paddingTop:"50px", fontSize: "25px",fontFamily: '"Poppins", "sans-serif"' }}>
      Lorem ipsum dolor sit amet, consectetur
      </Typography>
    <Typography sx={{color:Colors.light ,paddingTop:"50px", fontSize: "18px",fontFamily: '"Poppins", "sans-serif"'}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus, tristique elementum a gravida ultricies nisi. Commodo nibh sed sodales est nulla eget nibh. Tempus viverra et, dolor odio. Cras viverra sit facilisis ornare leo, eget. Diam lobortis nisi, elit sed nunc mattis molestie.
Egestas nec cras tortor orci euismod morbi sed. Id ridiculus in non tortor cras bibendum. At proin sit nibh facilisis elementum. Aliquam nibh cras neque sed at malesuada. Amet, diam vel integer quam metus.
Eget dolor enim aliquet ac orci. Urna, nec arcu vestibulum viverra risus. Pretium at morbi ipsum adipiscing lobortis nullam nec neque. Eget vitae bibendum dictum amet nibh. Nec ipsum neque, nullam tincidunt sed lectus at. Cursus pulvinar purus risus malesuada tellus, suspendisse habitasse. Leo in rutrum sed ullamcorper amet arcu. Volutpat libero sollicitudin dictumst non.
Amet a lobortis elementum risus aenean interdum in eu condimentum. Lacus purus leo accumsan id convallis mauris. Faucibus morbi mi cursus lacus, quam nibh tincidunt ut ac. Egestas proin felis laoreet suscipit quis ullamcorper integer interdum. Sollicitudin blandit commodo, eu auctor nunc posuere. Egestas vivamus morbi sed id molestie dolor. Pretium imperdiet ut diam in eu dolor iaculis. Viverra in tincidunt quis tristique id in. Tortor, placerat amet, risus, sed proin nullam eget bibendum.
Proin maecenas malesuada elementum placerat dui rhoncus sit magna. Eu risus egestas sem ac scelerisque enim purus. Viverra mauris in dictum egestas tortor diam. Nibh at tellus in nullam praesent diam. Ut nec in vestibulum suspendisse pretium eu nisl non. Ornare pharetra eu elementum habitasse posuere enim, ac tellus vel. Tortor, eu amet non id ut. Nulla varius vulputate quam quis tincidunt. Diam ultrices condimentum porttitor penatibus et condimentum fringilla nisi, pretium. Dui nam risus quis eget elementum mauris sit. Lectus blandit tortor in gravida consequat lorem. Consectetur velit nulla risus quisque non fermentum tincidunt. Feugiat cursus curabitur nibh facilisi dignissim tristique.
Sed maecenas in et vitae mattis suspendisse et bibendum nunc. Convallis sit eget id dui vulputate suspendisse orci donec sodales. Risus orci elementum pretium sit non vestibulum, aliquam. Tincidunt venenatis elit augue rhoncus vitae. Diam diam morbi fringilla tortor libero porttitor amet, purus. Dictum mi at nunc eu. Quis tincidunt est, amet, mattis congue senectus in risus, congue. Diam consectetur ut bibendum arcu, vestibulum amet lobortis. Commodo risus volutpat quis consequat a, leo, posuere maecenas porttitor. Integer platea integer et ultricies auctor sapien eleifend viverra sed.
Tellus pellentesque blandit pretium in. Auctor nisi, eget id enim consectetur tortor ornare viverra facilisi. Non egestas facilisis sem adipiscing. Libero lobortis non sit ut. Erat sit erat justo dui massa molestie. Lorem nullam eget habitant vulputate amet sit vel. Pharetra dapibus urna, varius vulputate at. Molestie lacus quis sit placerat. Varius dui praesent egestas mattis. Condimentum sit quis ac quam eu, cras faucibus porttitor. Sed cras diam lacus, ullamcorper quam at velit semper posuere.
Lacus eu a cras vitae porttitor erat. Massa habitant fringilla viverra at diam viverra. Ultricies scelerisque dolor auctor at sed donec enim. Adipiscing sed elit purus sit egestas tortor eget. Et auctor eget suspendisse sollicitudin libero. Nunc cras nisl orci nulla vitae pulvinar.
Cras quam eget aliquam molestie at lobortis ridiculus libero hendrerit. Facilisi morbi elementum pellentesque aliquam felis, sit amet. Diam ornare felis, enim aliquet sed neque mollis neque. Augue at lorem pellentesque sit sed tincidunt sapien. Neque consectetur faucibus tortor, venenatis nisl nullam lobortis velit fringilla. Tincidunt elit sed suspendisse quis consequat consequat convallis a nibh. Mi at ipsum, dictum turpis rhoncus in suspendisse. Et nunc aenean amet nunc ac etiam in vel. Lectus leo, gravida urna adipiscing dignissim ullamcorper enim. Tempor pharetra ac quam tincidunt odio odio euismod odio. Blandit massa nisl blandit feugiat mollis arcu nibh amet, molestie. Cursus vel hendrerit etiam ac.
A id elit tincidunt magna donec. Eget dui quam feugiat purus sit. Enim, tincidunt volutpat nulla vitae elit condimentum. Magna id accumsan, nisi, feugiat elementum. Mauris condimentum et vestibulum tellus ultrices magna consequat tristique. Eget ut lacus at amet. Imperdiet orci nullam fringilla at aliquet proin ipsum. Vestibulum erat ac ut fermentum in amet fusce egestas. Iaculis integer habitasse morbi consectetur eget urna suspendisse massa ac. Ultrices quisque urna non eu. Pellentesque sit nisl interdum faucibus non massa montes, pretium pellentesque.
      </Typography>
  
    </Grid> 


    </Grid>
  </Paper>

  </Container> 
  <Footer/>

  </Box>
  )
}

export default AboutUs;
