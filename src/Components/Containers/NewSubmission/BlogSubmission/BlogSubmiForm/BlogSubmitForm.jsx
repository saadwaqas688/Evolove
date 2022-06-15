import { Grid } from '@mui/material'
import React from 'react'
import BoxCom from '../../../../UI/BoxCom/BoxCom'
import TextfieldComp from '../../../../UI/TextFieldCom/Textfield'
import { CardText, FieldLabel, FieldWrapper, LeftSideGrid, ProfileButton, RightSideGrid, SubHeading } from './BlogSubmitForm.style'

export const BlogSubmitForm = () => {
  const [price,setPrice]=React.useState("$59.99")
  return (

         <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={4.5}>
            <SubHeading>Choose your pricing type</SubHeading>

            <FieldWrapper height={"56px"}  border={true}>
                <CardText >
                Fixed Price
                </CardText>
                </FieldWrapper>

                <FieldWrapper height={"56px"} border={false}>
                <CardText >
                 Evolove Subscription
                </CardText>
                </FieldWrapper>
      
            </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="15%">
            <SubHeading>How much your course cost you</SubHeading>
            <BoxCom sx={{marginTop:"40px"}}>
          <FieldLabel>Course Price</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setPrice(e.target.value)}
                  name="price"
                  value={price}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>

          <ProfileButton variant="contained" href="/subscriptionSuccess" sx={{marginTop:"200px"}}  >Submit</ProfileButton>
          </RightSideGrid>
            </Grid>
  )
}
