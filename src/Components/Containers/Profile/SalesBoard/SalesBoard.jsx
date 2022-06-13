import React from "react";
import SalesCard from "../SalesCard/SalesCard";
import {
  Heading,
  MainContainer,
  SalesCardContainer,
  SubHeading,
} from "./SalesBoard.style ";

const SalesBoard = () => {
  return (
    <MainContainer>
      <Heading>Sales Board</Heading>
      <SubHeading>Your Total Sales</SubHeading>
      <SalesCardContainer>
        <SalesCard category="Courses" count="25" amount="$1100"/>
        <SalesCard category="Ebooks" count="09" amount="$150" />
        <SalesCard category="Articles" count="06" amount="$110" />
      </SalesCardContainer>
    </MainContainer>
  );
};

export default SalesBoard;
