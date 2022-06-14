import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../../UI/Button/Button";
import NavBar from "../../../UI/NavBar/NavBarMain/NavBar";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";

import {
  FormContainer,
  GridItem,
  Heading,
  PaperContainer,
  SubHeading,
} from "./NewPassword.style";
function NewPassword() {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <Box sx={{ background: "#131315" }}>
      <NavBar />
      <Container style={{ padding: "0px" }}>
        <PaperContainer elevation={0}>
          <Heading>New Password</Heading>
          <SubHeading>
          <Typography variant="body2" sx={{alignText:'center',color:"#B7C6D9",fontSize:"18px"}}>
          Set up your new password to login in evolove
        </Typography>
          </SubHeading>

          <FormContainer>
            <Grid container spacing={1}>
              <GridItem item xs={12}>
                <TextfieldComp
                  height="60px"
                  width="60%"
                  autoComplete="false"
                  placeholder="New Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  name="newPassword"
                  value={newPassword}
                />
              </GridItem>
              <GridItem item xs={12}>
                <TextfieldComp
                  height="60px"
                  width="60%"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
                  value={confirmPassword}
                />
              </GridItem>
              <GridItem
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight:{sm:"120px",xs:"45px" },               
                }}
              >
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
                <Button sx={{marginTop:"50px",textTransform:"none",fontSize:"18px"}} variant="contained" href="/passwordResetSuccess">Update</Button>
              </GridItem>
            </Grid>
          </FormContainer>
        </PaperContainer>
      </Container>
    </Box>
  );
}

export default NewPassword;
