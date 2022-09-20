import React from "react";
import ProductCard from "./../../Containers/Shop/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import BoxCom from "./../../UI/BoxCom/BoxCom";
import {
  LinkContainer,
  MainContainer,
  PopularCourseHeading,
} from "./FilteredCrads.style.js";
import HomeTopCard from "./../../Containers/Home/HomeTopCard/HomeTopCard";
import PropTypes from "prop-types";
import Loader from './../../UI/Loader/Loader'

const FilteredCards = ({categoryName, specificCategory, productType, loading}) => {

  const size = { xs: "12", sm: "6", md: "6", lg: "3" };
  return (
    <div>
      <BoxCom sx={{ marginTop: "60px" }}>
        <HomeTopCard />
        <MainContainer>
          <BoxCom sx={{ marginTop: "33px" }}>
            <PopularCourseHeading>
              { `${categoryName} ${productType}` }
            </PopularCourseHeading>
          </BoxCom>
          <LinkContainer>{`${specificCategory.length}  ${productType}`}</LinkContainer>
        </MainContainer>
      </BoxCom>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {specificCategory?.map((course) => {
            return (
              <ProductCard
                size={size}
                title={course.Title}
                name={course.CoachName}
                price={course.Price}
                image={course.Image}
                id={course.id}
              />
            );
          })}
        </Grid>
       )} 
      
    </div>
  );
};

FilteredCards.propTypes = {
    categoryName: PropTypes.string,
    specificCategory: PropTypes.array,
    productType: PropTypes.string,
    
};

FilteredCards.defaultProps = {
    categoryName: 'product name',
    specificCategory: [],
    productType: 'Product'
};

export default FilteredCards;
