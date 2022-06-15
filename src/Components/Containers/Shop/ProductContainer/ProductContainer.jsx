import { Grid, Paper } from "@mui/material";
import { Colors } from "../../../../config/palette";
import ProductCard from "../ProductCard/ProductCard";
import { Heading, LinkContainer, MainContainer } from "./ProductContainer.style";
import productImage from "../../../../assets/images/homeOnBoarding/productImage1.png";


const ProductContainer = ({ heading,link }) => {
  const size = { xs: "12", sm: "6", md: "6", lg: "3" };
  return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
          <MainContainer >
      {heading && <Heading>{heading}</Heading>}
{  link &&    <LinkContainer >
            <a
              href="/shop/tickets"
              style={{ color: "#9E8B91", textDecoration: "none" }}
            >
              See All
            </a>
          </LinkContainer>}
          </MainContainer>
      <Grid container spacing={4} sx={{ paddingTop: "20px" }}>
        <ProductCard size={size} image={productImage}/>
        <ProductCard size={size} image={productImage}/>
        <ProductCard size={size} image={productImage}/>
        <ProductCard size={size} image={productImage}/>
      </Grid>
    </Paper>
  );
};

export default ProductContainer;
