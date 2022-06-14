import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { CharacterIcon } from "../../../../assets/icons/CharacterIcon";
import Button from "../../../UI/Button/Button";
import NavBar from "../../../UI/NavBar/NavBarMain/NavBar";

import {
  FormContainer,
  GridItem,
  Heading,
  PaperContainer,
  SubHeading,
} from "./PasswordResetSuccess.style";

function PasswordResetSuccess() {

  return (
    <Box sx={{ background: "#131315" }}>
      <NavBar />
      <Container style={{ padding: "0px" }}>
        <PaperContainer elevation={0}>
          <FormContainer>
            <Grid container spacing={1}>
            <GridItem
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
            <CharacterIcon/>
              </GridItem>
            <GridItem
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection:"column",
                  marginTop: "30px",
                }}
              >
                      <Heading>Password Reset</Heading>
          <SubHeading>
          <Typography variant="body2" sx={{alignText:'center',color:"#B7C6D9",fontSize:"18px"}}>
          Your Password has been reset sucessfully
        </Typography>
          </SubHeading>
              </GridItem>
         
              <GridItem
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <Button sx={{textTransform:"none",fontSize:"18px"}} variant="contained" href="/login"> Back To Login Page</Button>
              </GridItem>
            </Grid>
          </FormContainer>
    
        </PaperContainer>
      </Container>
    </Box>
  );
}

export default PasswordResetSuccess;
