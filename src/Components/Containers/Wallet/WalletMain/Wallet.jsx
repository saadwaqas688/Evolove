import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Button from "../../../UI/Button/Button";
import WalletActivity from "../WalletActivity/WalletActivity";
import {
  Amount,
  AmountContainer,
  AmountStatement,
  Heading,
  LeftContainer,
  MainContainer,
  RightContainer,
  SubHeading,
} from "./Wallet.style";

const Wallet = () => {
  return (
    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "20px", md: "0px" } }}>
      <Heading>Wallet</Heading>
      <MainContainer>
        <LeftContainer>
          <SubHeading>Recent Activity</SubHeading>
          <WalletActivity />
          <WalletActivity />
          <WalletActivity />
          <WalletActivity />
        </LeftContainer>
        <RightContainer>
          <AmountContainer>
            <Amount>$200.00</Amount>
          </AmountContainer>
          <AmountStatement>
            This is the amount you earn from sales
          </AmountStatement>
          <Button
            variant="contained"
            sx={{
              marginTop: "40px",
              height: "50px",
              width: "95%",
              textTransform: "none",
            }}
            href="/walletWithDraw"
          >
            Withdraw
          </Button>
        </RightContainer>
      </MainContainer>
    </BoxCom>
  );
};

export default Wallet;
