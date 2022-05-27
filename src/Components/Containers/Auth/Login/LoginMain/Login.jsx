import { Box, Container, Grid, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextFieldWrapper from "../../../../UI/TextField/TextFieldWrapper";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";

import {
  FormContainer,
  GridItem,
  Heading,
  PaperContainer,
} from "./Login.style";

function Login() {
  const [name,setName]=React.useState("")
  const [password,setPassword]=React.useState("")

  return (
    <Box sx={{ background: "#131315" }}>
      <NavBar />
      <Container style={{ padding: "0px" }}>
        <PaperContainer elevation={0}>
          <Heading>Login</Heading>

          <FormContainer>
            <Grid container spacing={1}>
              <GridItem item xs={12}>
                <TextfieldComp autoComplete="false" placeholder="Email" onChange={(e)=>setName(e.target.value)} name="name2" value={name} />
              </GridItem>
              <GridItem item xs={12}>
              <TextfieldComp type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} name="password" value={password}/>
              </GridItem>
              <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"0px"}}>
                <List>
                  <ListItem component="a" href="/forgotPassword">
                    <ListItemText
                      primary="Forgot Password ?"
                      sx={{ color: "#295BE0", fontFamily: '"Poppins", "sans-serif"',                    }}
                    />
                  </ListItem>
                </List>
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
                <Button variant="contained">Login</Button>
              </GridItem>
            </Grid>
          </FormContainer>
        </PaperContainer>
      </Container>
      <Footer />
    </Box>
  );
}

export default Login;
