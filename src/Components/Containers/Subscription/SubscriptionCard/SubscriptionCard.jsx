import React from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import {Grid} from "@mui/material";
import {  Details, FieldLabel, SalesCategory,FieldWrapper,ProfileButton } from "./SubscriptionCard.style ";
import SubscriptionCardIcon from "../../../../assets/icons/SubscriptionCardIcon";

const SubscriptionCard = ({setShowForm}) => {

  return (
                <>
               <Grid  border={true}  height={"69px"} item xs={12}  md={8} lg={10}>
              <FieldWrapper height={"51px"} border={true}>
                <SalesCategory >
                Monthly Plan
                </SalesCategory>
                <SalesCategory >
                $99.99/Month
                </SalesCategory>
                </FieldWrapper>

              </Grid>





              <Grid   sx={{marginTop:"20px"}} height={"51px"} item xs={12}  md={8} lg={10}>
              <FieldWrapper height={"51px"} >
                <SalesCategory >
                Monthly Plan
                </SalesCategory>
                <SalesCategory >
                $99.99/Month
                </SalesCategory>
                </FieldWrapper>

              </Grid>
           



              <Grid  border={true} sx={{marginTop:"70px"}} item xs={12}  md={8} lg={10}>
              <BoxCom sx={{display:'flex',justifyContent:"space-between"}}>
            <FieldLabel>Added Card</FieldLabel>
            <Details onClick={()=>setShowForm(true)}>Change/Add New</Details>
            </BoxCom>
            <FieldWrapper height={"69px"} border={true}>
                <SalesCategory >
                Card Number: 568039*********
                </SalesCategory>
                <SubscriptionCardIcon/>
            </FieldWrapper>
              </Grid>




              <Grid   sx={{marginTop:"70px"}} item xs={12}  md={8} lg={10}>
              <FieldLabel>Subscription Plan</FieldLabel>
              <FieldWrapper height={"69px"}>
                <SalesCategory >
                Monthly Plan: $99.99
                </SalesCategory>
                </FieldWrapper>
              </Grid>

              <Grid   sx={{marginTop:"70px"}} item xs={12}  md={8} lg={10}>
              <ProfileButton variant="contained" href="/subscriptionSuccess" >Pay Now</ProfileButton>
              </Grid>
              
                </>

  );
};

export default SubscriptionCard;
