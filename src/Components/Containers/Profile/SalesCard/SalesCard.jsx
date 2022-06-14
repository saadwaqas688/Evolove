import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { MainContainer, SalesCategory, SalesCount, TextContainer } from "./SalesCard.style ";


const SalesCard = ({category,count,amount}) => {
  return (
          <MainContainer>
            <BoxCom sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
          <TextContainer >
          <SalesCategory>{category}</SalesCategory>
          </TextContainer>
          <SalesCount>{count}</SalesCount>
            </BoxCom>
            <BoxCom sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
          <TextContainer >
          <SalesCategory>Earning</SalesCategory>
          </TextContainer>
          <SalesCount>{amount}</SalesCount>
            </BoxCom>
          </MainContainer>
  );
};

export default SalesCard;
