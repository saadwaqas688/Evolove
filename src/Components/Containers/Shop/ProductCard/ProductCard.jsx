 import cardImage from "../../../../assets/images/homeOnBoarding/productImage1.png";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { Grid, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";
import { CardFooter,FooterText, NameContainer, ProductImage } from "./ProductCard.style";
  
  const ProductCard = ({size}) => {
    return (
      <Grid item xs={12} sm={size?.sm} md={size?.md} lg={size?.lg}>

  <BoxCom sx={{background:Colors.dark,borderRadius:"16px" ,height:{lg:"218px",md:"auto"}}}>
    <ProductImage src={cardImage} alt="Paris" />
    <BoxCom >
    <NameContainer variant="body1" >
     Master Meditation
    </NameContainer>

    <CardFooter >
    <FooterText variant="body1">
     Tickets
    </FooterText>
    <Typography variant="body1" sx={{color:"#0AB27D",marginLeft:"12px"}}>
     $59.99
    </Typography>
    </CardFooter>
    </BoxCom>

  </BoxCom>
  </Grid>


  );
  };
  
  export default ProductCard;
  
  