import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import {
  Heading,
  MainContainer,
  SubHeading,
  SubHeadingParagraph,
  SubHeadingParagraphContainer,
} from "./Subscription.style ";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import AddCard from "../AddCard/AddCard";


const Subscription = () => {
  const [showForm, setShowForm] = React.useState(false);

  const small = useMediaQuery("(max-width:390px)");
  return (
    <>
   {showForm ? <AddCard setShowForm={setShowForm}/> :
       <>
      <Heading small={small}>Subscription</Heading>
      <SubHeading small={small}>Subscribe for get access to all courses</SubHeading>
      <SubHeadingParagraphContainer small={small}>
      <SubHeadingParagraph small={small}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         In turpis in quam orci tellus at ultricies. 
         Tristique nibh vel non interdum integer
          nulla elementum neque non.</SubHeadingParagraph>
      </SubHeadingParagraphContainer>
      <MainContainer small={small}>
            <Grid container>
        <SubscriptionCard setShowForm={setShowForm} />
            </Grid>
            </MainContainer>
        </>
  }
  </>
  );
};

export default Subscription;
