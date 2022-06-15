import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import {
  Heading,
  Heading2,
  MainContainer,
  RequestsubmitedText,
  SuccessIconWrapper,
} from "./NewSubmissionSuccess.style";

const NewSubmissionSuccess = () => {
  return (
    <>
      <Heading>New Submission</Heading>
      <MainContainer>
        <BoxCom sx={{ width: "17%", display: "inline-block" }}>
          <SuccessIconWrapper />
        </BoxCom>
        <RequestsubmitedText>Submission Done</RequestsubmitedText>
        <BoxCom sx={{width:{sm:"320px",xs:"100%"},textAlign:"center"}}>
        <Heading2 >You have successfully submit your publishing request</Heading2>
        </BoxCom>
      </MainContainer>
    </>
  );
};

export default NewSubmissionSuccess;
