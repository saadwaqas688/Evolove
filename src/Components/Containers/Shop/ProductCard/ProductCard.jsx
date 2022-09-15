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

const ProductCard = ({ size, image, title,name,price }) => {
  return (
    <Grid item xs={12} sm={size?.sm} md={size?.md} lg={size?.lg}>
      <Link to="/shop/singleProduct" style={{ textDecoration: "none" }}>
        <BoxCom
          sx={{
            background: Colors.dark,
            borderRadius: "16px",
            height: { lg: "218px", md: "auto" },
          }}
        >
          <ProductImage src={image} alt="Paris" />
          <BoxCom>
            <NameContainer variant="body1">{title}</NameContainer>

            <CardFooter>
              <FooterText variant="body1">{name}</FooterText>
              <Typography
              variant="body1"
              sx={{ color: "#0AB27D", marginLeft: "12px" }}
            >
              ${price}
            </Typography>
            </CardFooter>
          </BoxCom>
        </BoxCom>
      </Link>
    </Grid>
  );
};

export default ProductCard;
