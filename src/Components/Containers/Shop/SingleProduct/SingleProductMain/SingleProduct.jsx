import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import Loader from "./../../../../UI/Loader/Loader";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ExploreShopPriceText,
  ExploreCourseImage,
  PriceButton,
  ExploreShopPriceHeading,
  MainDiv,
  MainInnerDiv,
  // ShareButton,
  FavoriteButton,
  TypographyPrice,
  TypographyDescription,
  TypographyName,
  TypographyToicName,
  EbookButton,
  TypographyPublisher,
  ShopPublisherDescription,
  //   TypographyPublisherReview,
  //   ShopReviewerDescription,
  TypographyPublisherName,
} from "./SingleProduct.style";
import Publisher from "../PublisherCom/Publisher";
// import ReviewerCom from "../ReviewCom/ReviewerCom";
import { Colors } from "../../../../../config/palette";
import { useSnackbar } from "notistack";
import {
  getService,
  updateService,
  getServiceById,
} from "./../../../../../services/services.js";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id: productId } = useParams();
  const [showLoader, setShowLoader] = useState(true);
  const [productList, setProductList] = useState([]);
  const [favColor, setFavColor] = useState(false);

  const getProduct = async () => {
    let productArray = [];
    await getService("Product")
      .then((el) => {
        el.forEach((doc) => {
          productArray.push({ id: doc.id, ...doc.data() });
        });
        setShowLoader(false);
        const filterProduct = productArray.filter((el) => el.id === productId);
        setProductList(filterProduct);
      })
      .catch((error) => console.log(error));
  };
  
  const checkStatus = async () => {
    const uid = await JSON.parse(localStorage.getItem("userData"));
    let user = await getServiceById("Users", uid.uid);
    let user1 = user.data();
    let arr = [...user1.FavoriteProducts];
    let check = arr.some((el) => el.includes(productId));
    if (check) {
      setFavColor(true);
    } else {
      setFavColor(false);
    }
    return check;
  };
  const favoriteButtonHandler = async () => {
    let check = await checkStatus();
    const uid = await JSON.parse(localStorage.getItem("userData"));
    let user = await getServiceById("Users", uid.uid);
    let user1 = user.data();
    let arr = [...user1.FavoriteProducts];
    if (check) {
      let index = arr.indexOf(productId);
      arr.splice(index, 1);
      let payload = { ...user1, FavoriteProducts: arr };
      await updateService("Users", uid.uid, payload);
      setFavColor(false);
      enqueueSnackbar('Rmoved from My favorite', {
        variant: "info",
        autoHideDuration: 4000,
      });
    } else {
      arr.push(productId);
      let payload = { ...user1, FavoriteProducts: arr };
      await updateService("Users", uid.uid, payload);
      setFavColor(true);
      enqueueSnackbar('Added to My favorite', {
        variant: "success",
        autoHideDuration: 4000,
      });
    }
  };

  useEffect(() => {
    getProduct();
    setShowLoader(true);
    checkStatus();
  }, []);
  return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
      {showLoader ? (
        <Loader />
      ) : (
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
                        {/* <ShareButton aria-label="add to favorites">
                          <ShareIcon />
                        </ShareButton> */}
                        <FavoriteButton
                          favColor={favColor}
                          aria-label="share"
                          onClick={favoriteButtonHandler}
                        >
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
                    <PriceButton onClick={() => navigate("/payment")}>
                      Buy Now
                    </PriceButton>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </>
      )}
    </Paper>
  );
};
export default SingleProduct;
