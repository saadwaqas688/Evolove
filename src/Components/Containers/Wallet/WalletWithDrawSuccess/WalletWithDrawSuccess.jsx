import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import {
  Heading,
  Heading2,
  Heading3,
  MainContainer,
  RequestsubmitedText,
  SuccessIconWrapper,
} from "./WalletWithDrawSuccess.style";

const WalletWithDrawSuccess = () => {
  return (
    <>
      <Heading>WithDraw</Heading>
      <MainContainer>
        <BoxCom sx={{ width: "17%", display: "inline-block" }}>
          <SuccessIconWrapper />
        </BoxCom>
        <RequestsubmitedText>Request Submited</RequestsubmitedText>
        <BoxCom sx={{width:{sm:"320px",xs:"100%"},textAlign:"center"}}>
        <Heading2 >You have successfully submit your withdraw request</Heading2>
        </BoxCom>
        <BoxCom sx={{width:{sm:"400px",xs:"100%"},textAlign:"center"}}>
        <Heading3>
          It will take 24 hours to receive your amount in you bank
        </Heading3>
        </BoxCom>
      </MainContainer>
    </>
  );
};

export default WalletWithDrawSuccess;
