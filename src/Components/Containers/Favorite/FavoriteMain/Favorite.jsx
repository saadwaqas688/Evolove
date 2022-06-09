import { Grid } from "@mui/material";
import React, { useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import cardImage from "../../../../assets/images/homeOnBoarding/productImage2.png";
import ticketImage from "../../../../assets/images/homeOnBoarding/productImage1.png";
import { Filter, FilterWrapper, Heading } from "./Favorite.style";
import ProductCard from "../../Shop/ProductCard/ProductCard";
import { Colors } from "../../../../config/palette";
import HomeCourseCard from "../../Home/HomeCourseCard/HomeCourseCard";

const Favorite = () => {
  const [filter, setFilter] = useState("courses");
  const size = { sm: "6", md: "6", lg: "3" };
  function selectFilter(selectedTab) {
    setFilter(selectedTab);
  }

  function checkSpacing() {
    if (filter === "courses") {
      return 2;
    } else {
      return 4;
    }
  }
  return (
    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "20px", md: "0px" } }}>
      <Heading>Favorite</Heading>
      <FilterWrapper>
        <Filter
          onClick={() => {
            selectFilter("courses");
          }}
          component="span"
          sx={{ color: filter === "courses" && Colors.info }}
        >
          Courses
        </Filter>
        <Filter
          onClick={() => {
            selectFilter("products");
          }}
          component="span"
          sx={{ color: filter === "products" && Colors.info }}
        >
          Products
        </Filter>
        <Filter
          onClick={() => {
            selectFilter("tickets");
          }}
          component="span"
          sx={{ color: filter === "tickets" && Colors.info }}
        >
          Tickets
        </Filter>
      </FilterWrapper>
      <Grid container spacing={checkSpacing()} sx={{ paddingTop: "20px" }}>
        {filter === "products" && (
          <>
            <ProductCard size={size} image={cardImage} />
            <ProductCard size={size} image={cardImage} />
            <ProductCard size={size} image={cardImage} />
            <ProductCard size={size} image={cardImage} />
          </>
        )}
        {filter === "courses" && (
          <>
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
            <HomeCourseCard size={size} />
          </>
        )}
        {filter === "tickets" && (
          <>
            <ProductCard size={size} image={ticketImage} />
            <ProductCard size={size} image={ticketImage} />
            <ProductCard size={size} image={ticketImage} />
            <ProductCard size={size} image={ticketImage} />
          </>
        )}
      </Grid>
    </BoxCom>
  );
};

export default Favorite;
