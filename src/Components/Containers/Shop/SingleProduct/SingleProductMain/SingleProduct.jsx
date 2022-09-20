import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShopImage from "../../../../../assets/images/homeOnBoarding/productImage1.png";
import Loader from './../../../../UI/Loader/Loader'
import { useParams } from "react-router-dom";
import {
  ExploreShopPriceText,
  ExploreCourseImage,
  PriceButton,
  ExploreShopPriceHeading,
  MainDiv,
  MainInnerDiv,
  ShareButton,
  FavoriteButton,
  TypographyPrice,
  TypographyDescription,
  TypographyName,
  TypographyToicName,
  EbookButton,
  TypographyPublisher,
  ShopPublisherDescription,
  TypographyPublisherReview,
  ShopReviewerDescription,
  TypographyPublisherName,
} from "./SingleProduct.style";
import Publisher from "../PublisherCom/Publisher";
import ReviewerCom from "../ReviewCom/ReviewerCom";
import { Colors } from "../../../../../config/palette";
import { getService } from "./../../../../../services/services.js";
const SingleProduct = () => {
  const { id: productId } = useParams();
  const [showLoader, setShowLoader] = useState(true);
  const [productList, setProductList] = useState([]);

  const getProduct = async () => {
    let productArray = [];
    await getService("Product")
      .then((el) => {
        el.forEach((doc) => {
          productArray.push({ id: doc.id, ...doc.data() });
        });
        setShowLoader(false);
        // const limitedProduct = productArray.slice(0, 4);
        const filterProduct = productArray.filter((el) => el.id === productId);
        console.log("filterProduct", filterProduct);
        setProductList(filterProduct);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProduct();
    setShowLoader(true)
  }, []);
  return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
        {
            showLoader ? <Loader/> : 
            
            <>
            {productList.map((product) => {
        return (
          <>
            <Typography
              sx={{
                color: Colors.white,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: '"Poppins", "sans-serif"',
                paddingLeft: "20px",
              }}
            >
              {product.Type}
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={6}>
                <ExploreCourseImage src={product.Image} />

                <MainDiv>
                  <MainInnerDiv>
                    <TypographyName>
                      <TypographyPublisherName>
                        Publisher :
                      </TypographyPublisherName>{" "}
                      {product.CoachName}
                    </TypographyName>

                    <TypographyToicName>{product.Title}</TypographyToicName>
                  </MainInnerDiv>

                  <div>
                    <ShareButton aria-label="add to favorites">
                      <ShareIcon />
                    </ShareButton>
                    <FavoriteButton aria-label="share" style={{}}>
                      <FavoriteIcon />
                    </FavoriteButton>
                  </div>
                </MainDiv>
                <EbookButton>Ebook</EbookButton>
             
                      <TypographyPublisher>About Publisher</TypographyPublisher>
                      <Publisher
                        image={product.Details[1].publisherImage}
                        name={product.Details[1].publisherName}
                        title={product.Details[1].title}
                      />
                      <ShopPublisherDescription>
                        {product.Details[1].content}
                      </ShopPublisherDescription>
                      {/* <TypographyPublisherReview>
                        Reviews
                      </TypographyPublisherReview>
                      <ReviewerCom />
                      <ShopReviewerDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis neque molestie elementum,
                      </ShopReviewerDescription>
                      <br />
                      <ReviewerCom />
                      <ShopReviewerDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis neque molestie elementum,
                      </ShopReviewerDescription> */}
                   
              </Grid>
              <Grid item xs={12} lg={6}>
                <ExploreShopPriceText>
                  <TypographyPrice>Price</TypographyPrice>
                  <TypographyPrice>zł {product.Price}</TypographyPrice>
                </ExploreShopPriceText>

                <TypographyDescription>Description</TypographyDescription>
                <ExploreShopPriceHeading>
                  {product.Details[0].content}
                </ExploreShopPriceHeading>
                <PriceButton>Buy Now</PriceButton>
              </Grid>
            </Grid>
          </>
        );
      })}
            </>
        }
      
    </Paper>
  );
};
export default SingleProduct;
