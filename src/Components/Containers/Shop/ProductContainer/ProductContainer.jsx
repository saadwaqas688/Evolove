import {
    Grid,
    Paper,
  } from "@mui/material";
import { Colors } from "../../../../config/palette";
import ProductCard from "../ProductCard/ProductCard";
import { Heading } from "./ProductContainer.style";
  
  const ProductContainer = ({heading}) => {
   const size={xs:"12",sm:"6",md:"6",lg:"3"}
    return (
      <Paper elevation={0} square={true} style={{background:Colors.secondary}}>
          <Heading >
              {heading}
        </Heading>
      <Grid container spacing={4} sx={{ paddingTop: "20px"}}>
      <ProductCard size={size}/>
      <ProductCard size={size}/>
      <ProductCard size={size}/>
      <ProductCard size={size}/>

  
        </Grid>
    </Paper>
  
    );
  };
  
  export default ProductContainer;
  
  
  