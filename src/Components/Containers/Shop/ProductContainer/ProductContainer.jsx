import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { Colors } from "../../../../config/palette";
import ProductCard from "../ProductCard/ProductCard";
import {
  Heading,
  LinkContainer,
  MainContainer,
} from "./ProductContainer.style";
import productImage from "../../../../assets/images/homeOnBoarding/productImage1.png";

const ProductContainer = ({ heading, link, tickestList, productList }) => {
  const size = { xs: "12", sm: "6", md: "6", lg: "3" };
  const [showALL, setShowAll] = useState(false);


  const seeAllHandler = () => {
    setShowAll(!showALL);
  };

  return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
      <MainContainer>
        {heading && <Heading>{heading}</Heading>}
        <button onClick={seeAllHandler}>See All</button>
        {/* {link && (
          <LinkContainer>
            <a
              href="/shop/tickets"
              style={{ color: "#9E8B91", textDecoration: "none" }}
            >
              See All
            </a>
          </LinkContainer>
        )} */}
      </MainContainer>
      <Grid container spacing={4} sx={{ paddingTop: "20px" }}>
        {
          showALL ? 
            <h1 style={{color:"white"}}>full data</h1>
           : <>
            {
            tickestList?.map((ticket) => {
              return (
                <ProductCard
                  size={size}
                  title={ticket.descriptionName}
                  name={ticket.eventName}
                  price={ticket.evetPrice}
                  image={ticket.image}
                />
              );
            })}
            {
               productList?.map((product) => {
                return (
                  <ProductCard
                    size={size}
                    title={product.Title}
                    name={product.CoachName}
                    price ={product.Price}
                    image={product.Image}
                  />
                );
              })
            }
          </>
         
        }

        {/* <ProductCard size={size} image={productImage}  }/> */}
        {/* <ProductCard size={size} image={productImage} />
        <ProductCard size={size} image={productImage} />
        <ProductCard size={size} image={productImage} /> */}
      </Grid>
    </Paper>
  );
};

export default ProductContainer;
