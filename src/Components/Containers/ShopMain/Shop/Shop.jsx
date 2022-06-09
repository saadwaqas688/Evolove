import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Colors } from "../../../../config/palette";
import ShopImage from '../../../../assets/images/homeOnBoarding/courseCard.png';
import { ExploreShopPriceText, ExploreCourseImage, PriceButton, ExploreShopPriceHeading, AvatarWrapper, MainDiv, MainInnerDiv, ShareButton, FavoriteButton, TypographyPrice, TypographyDescription, TypographyName, TypographyToicName, EbookButton, TypographyPublisher, ShopPublisherDescription, TypographyPublisherReview, ShopReviewerDescription } from "./Shop.style";
import ShopPublisher from "../ShopPublisher/ShopPublisher";
import ShopReviewerCom from "../ShopCom/ShopReviewerCom";
const ShopCourse = () => {
    return (
        <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
            <Typography sx={{ color: Colors.white, paddingTop: "40px", fontSize: "20px", fontFamily: '"Poppins", "sans-serif"', paddingLeft: "20px" }}>
                Product
            </Typography>
            <Grid container spacing={6}>
                <Grid item xs={12} lg={6} >
                    <ExploreCourseImage src={ShopImage}
                    />

                    <MainDiv >

                        <MainInnerDiv >
                            <TypographyName >
                            <Typography style={{color:'#ffff', paddingRight:"5px"}}>Publisher :</Typography>  Esther Howard 
                            </TypographyName>

                            <TypographyToicName >
                                Mastery of Spirituality
                            </TypographyToicName>
                        </MainInnerDiv>
                       
                        <div>
                            <ShareButton aria-label="add to favorites" >
                                <ShareIcon />
                            </ShareButton>
                            <FavoriteButton aria-label="share" style={{}}>
                                <FavoriteIcon />
                            </FavoriteButton>

                        </div>
                    </MainDiv>
                    <EbookButton >Ebook</EbookButton>
                    <TypographyPublisher>
                    About Publisher
                    </TypographyPublisher>
                 <ShopPublisher/>
                 <ShopPublisherDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                        elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc,
                        aliquam nunc cras Lorem ipsum dolor sit amet, 
                    </ShopPublisherDescription>
                    <TypographyPublisherReview>
                    Reviews
                    </TypographyPublisherReview>
                    <ShopReviewerCom/>
                    <ShopReviewerDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum,
                    </ShopReviewerDescription>
                    <br/>
                    <ShopReviewerCom/>
                    <ShopReviewerDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum,
                    </ShopReviewerDescription>
                    
                </Grid>
                <Grid item xs={12} lg={6} >
                    <ExploreShopPriceText  >
                        <TypographyPrice >
                            Price
                        </TypographyPrice>
                        <TypographyPrice >
                            $59.99
                        </TypographyPrice>
                    </ExploreShopPriceText>

                    <TypographyDescription >
                        Description
                    </TypographyDescription>
                    <ExploreShopPriceHeading>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                        elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc,
                        aliquam nunc cras Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras
                    </ExploreShopPriceHeading>
                    <PriceButton >Buy Now</PriceButton>

                </Grid>
            </Grid>
        </Paper>
    );
};
export default ShopCourse;

