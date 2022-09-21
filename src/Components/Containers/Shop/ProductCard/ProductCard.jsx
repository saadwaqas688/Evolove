import BoxCom from "../../../UI/BoxCom/BoxCom";
import { Grid, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";
import {
  CardFooter,
  FooterText,
  NameContainer,
  ProductImage,
} from "./ProductCard.style";
import { Link } from "react-router-dom";
import defultImage from "./../../../../assets/images/homeOnBoarding/defaultProduct.jpg";

const ProductCard = ({ heading, size, image, title, name, price, id }) => {
  return (
    <Grid item xs={12} sm={size?.sm} md={size?.md} lg={size?.lg}>
      {heading === "Tickets" ? (
        <BoxCom
          sx={{
            background: Colors.dark,
            borderRadius: "16px",
            height: { lg: "218px", md: "auto" },
          }}
        >
          <ProductImage
            src={!image ? defultImage : image}
            alt="Product image"
          />
          <BoxCom>
            <NameContainer variant="body1">{title}</NameContainer>

            <CardFooter>
              <FooterText variant="body1">{name}</FooterText>
              <Typography
                variant="body1"
                sx={{ color: "#0AB27D", marginLeft: "12px" }}
              >
                zł{price}
              </Typography>
            </CardFooter>
          </BoxCom>
        </BoxCom>
      ) : (
        <Link to={`/shop/${id}`} style={{ textDecoration: "none" }}>
          <BoxCom
            sx={{
              background: Colors.dark,
              borderRadius: "16px",
              height: { lg: "218px", md: "auto" },
            }}
          >
            <ProductImage
              src={!image ? defultImage : image}
              alt="Product image"
            />
            <BoxCom>
              <NameContainer variant="body1">{title}</NameContainer>

              <CardFooter>
                <FooterText variant="body1">{name}</FooterText>
                <Typography
                  variant="body1"
                  sx={{ color: "#0AB27D", marginLeft: "12px" }}
                >
                  zł{price}
                </Typography>
              </CardFooter>
            </BoxCom>
          </BoxCom>
        </Link>
      )}
    </Grid>
  );
};

export default ProductCard;
