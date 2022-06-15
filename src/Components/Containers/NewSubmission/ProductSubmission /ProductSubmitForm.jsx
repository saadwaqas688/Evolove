import { Grid } from "@mui/material";
import React from "react";
import { UploadHereIcon } from "../../../../assets/icons/UploadHereIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import {
  FieldLabel,
  FieldWrapper,
  LeftSideGrid,
  ProfileButton,
  RightSideGrid,
  SubHeading,
} from "./ProductSubmitForm.style";

const ProductSubmitForm = ( ) => {
  const [productPrice, setProductPrice] = React.useState("$ 980");

  return (
    <>
      <Grid container spacing={2} sx={{ width: { md: "80%", lg: "100%" } }}>
        <LeftSideGrid item xs={12} sm={6} md={12} lg={5}>
          <SubHeading>Choose your pricing type</SubHeading>

          <FieldLabel sx={{ marginTop: "50px" }}>Product Image</FieldLabel>
          <FieldWrapper height={"190px"} sx={{ borderRadius: "8px" }}>
            <UploadHereIcon />
          </FieldWrapper>
        </LeftSideGrid>

        <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="10%">
          <SubHeading>How much your course cost you</SubHeading>
          <BoxCom sx={{ marginTop: "40px" }}>
            <FieldLabel>Course Price</FieldLabel>
            <TextfieldComp
              height="50px"
              width="100%"
              autoComplete="false"
              onChange={(e) => setProductPrice(e.target.value)}
              name="productPrice"
              value={productPrice}
              justifyproperty="flex-start"
              alignproperty="null"
            />
          </BoxCom>

          <ProfileButton
            variant="contained"
            href="/subscriptionSuccess"
            sx={{ marginTop: "200px" }}
          >
            Submit
          </ProfileButton>
        </RightSideGrid>
      </Grid>
    </>
  );
};

export default ProductSubmitForm;
