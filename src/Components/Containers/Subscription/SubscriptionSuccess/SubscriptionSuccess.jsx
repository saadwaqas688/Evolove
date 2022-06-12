import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import {
  Heading,
  Heading2,
  MainContainer,
  RequestsubmitedText,
  SuccessIconWrapper,
} from "./SubscriptionSuccess.style";

const SubscriptionSuccess = () => {
  return (
    <>
      <Heading>Subscription</Heading>
      <MainContainer>
        <BoxCom sx={{ width: "17%", display: "inline-block" }}>
          <SuccessIconWrapper />
        </BoxCom>
        <RequestsubmitedText>Payment Done</RequestsubmitedText>
        <BoxCom sx={{textAlign:"center"}}>
        <Heading2 >Redirecting you to your profile</Heading2>
        </BoxCom>
      </MainContainer>
    </>
  );
};

export default SubscriptionSuccess;
