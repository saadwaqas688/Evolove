import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { Colors } from "../../../../config/palette";
import ProductCard from "../ProductCard/ProductCard";
import {
  Heading,
  MainContainer,
} from "./ProductContainer.style";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ProductContainer = ({
  heading,
  link,
  tickestList,
  productList,
  limitedProductList,
  limitedTicketList,
}) => {
  const size = { xs: "12", sm: "6", md: "6", lg: "3" };
  const [showALL, setShowAll] = useState(false);
  const seeAllHandler = () => {
    setShowAll(!showALL);
  };

  return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
      <MainContainer>
        {heading && <Heading>{heading}</Heading>}
        {
          limitedProductList?.length  > 3 ? 
         <Button
         variant="text"
         color={showALL ? "success" : "info"}
         endIcon={
           showALL ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
         }
         onClick={seeAllHandler}
       >
         {showALL ? "see less" : "see all"}
       </Button> : limitedTicketList?.length  > 3 ? 
         <Button
         variant="text"
         color={showALL ? "success" : "info"}
         endIcon={
           showALL ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
         }
         onClick={seeAllHandler}
       >
         {showALL ? "see less" : "see all"}
       </Button> :''
        }
       
      </MainContainer>
      <Grid container spacing={4} sx={{ paddingTop: "20px" }}>
        {showALL ? (
          <>
            {tickestList?.map((ticket) => {
              return (
                <ProductCard
                heading ={heading}
                  size={size}
                  title={ticket.descriptionName}
                  name={ticket.eventName}
                  price={ticket.evetPrice}
                  image={ticket.image}
                />
              );
            })}
            {productList?.map((product) => {
              return (
                <ProductCard
                heading ={heading}
                  size={size}
                  title={product.Title}
                  name={product.CoachName}
                  price={product.Price}
                  image={product.Image}
                />
              );
            })}
          </>
        ) : (
          <>
            {limitedTicketList?.map((ticket) => {
              return (
                <ProductCard
                heading = {heading}
                  size={size}
                  title={ticket.descriptionName}
                  name={ticket.eventName}
                  price={ticket.evetPrice}
                  image={ticket.image}
                  
                />
              );
            })}
            {limitedProductList?.map((product) => {
              return (
                <ProductCard
                heading ={heading}
                  size={size}
                  title={product.Title}
                  name={product.CoachName}
                  price={product.Price}
                  image={product.Image}
                  id={product.id}
                />
              );
            })}
          </>
        )}

        {/* <ProductCard size={size} image={productImage}  }/> */}
        {/* <ProductCard size={size} image={productImage} />
        <ProductCard size={size} image={productImage} />
        <ProductCard size={size} image={productImage} /> */}
      </Grid>
    </Paper>
  );
};

export default ProductContainer;
