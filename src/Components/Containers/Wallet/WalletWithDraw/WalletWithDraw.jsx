import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Button from "../../../UI/Button/Button";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import {
  Details,
  FieldLabel,
  Heading,
  MainContainer,
  SubHeading,
} from "./WalletWithDraw.style";

const WalletWithDraw = () => {
  const [amount, setAmount] = React.useState("");
  const [bankDetails, setBankDetails] = React.useState("Account Number : 8379834******");
  return (
    <MainContainer >
      <Heading>WithDraw</Heading>
          <SubHeading>How much you want to withdraw</SubHeading>
          <BoxCom sx={{marginTop:"20px"}}>
          <FieldLabel>Amount</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setAmount(e.target.value)}
                  name="amount"
                  value={amount}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          <BoxCom sx={{paddingTop:"35px"}}>
            <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
            <FieldLabel>Select Bank</FieldLabel>
            <Details>Edit Details</Details>
            </BoxCom>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setBankDetails(e.target.value)}
                  name="bankDetails"
                  value={bankDetails}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  iconPosition="end"
                  iconType="password"
                  icon={true}
                />
          </BoxCom>
          <Button variant="contained" href="/walletWithDrawSuccess" sx={{width:"100%",marginTop:"100px",textTransform:"none",fontSize:"16px",marginLeft:"2px"}}>Submit Request</Button>
    </MainContainer>
  );
};

export default WalletWithDraw;
