import { Grid } from '@mui/material';
import React from 'react'
import BoxCom from '../../../UI/BoxCom/BoxCom';
import ProductCard from '../ProductCard/ProductCard';
import { Heading} from './AllTickets.style';
import cardImage from "../../../../assets/images/homeOnBoarding/productImage2.png";

const AllTickets = () => { 
  const size = { xs: "12", sm: "6", md: "6", lg: "3" };
  return (
    < BoxCom sx={{marginTop:"36px",paddingRight:{lg:"20px",md:"0px"}}}>
    <Heading>
      Tickets
    </Heading>
    <Grid container spacing={4} sx={{ paddingTop: "20px" }}>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
        <ProductCard size={size} image={cardImage}/>
      </Grid>

     </BoxCom>
  )
}

export default AllTickets
