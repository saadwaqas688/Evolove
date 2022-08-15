import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Button from "../../../../UI/Button/Button";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import googleImage from "../../../../../assets/images/homeOnBoarding/googleImage.png";
import appleImage from "../../../../../assets/images/homeOnBoarding/appleImage.png";

import {
  FormContainer,
  GridItem,
  Heading,
  ImageContainer,
  ImageContainerMain,
  LinkContainer,
  OrWithText,
  PaperContainer,
} from "./Login.style";
import { Link } from "react-router-dom";
import { postService } from "../../../../../services/services";

function Login() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleClick(){
    await postService("testWaqas",{subject:"testing for api integration"})

  }

  return (
    <Box sx={{ background: "#131315" }}>
      <NavBar />
      <Container style={{ padding: "0px" }}>
        <PaperContainer elevation={0}>
          <Heading>Login</Heading>

          <FormContainer>
            <Grid container spacing={1}>
              <GridItem item xs={12}>
                <TextfieldComp
                  height="60px"
                  width="70%"
                  autoComplete="false"
                  placeholder="Email"
                  onChange={(e) => setName(e.target.value)}
                  name="name2"
                  value={name}
                />
              </GridItem>
              <GridItem item xs={12}>
                <TextfieldComp
                  height="60px"
                  width="70%"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  value={password}
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
                <Link
                  style={{
                    color: "#295BE0",
                    fontSize: "20px",
                    fontFamily: '"Poppins", "sans-serif"',
                  }}
                  to="/forgotPassword"
                >
                  Forgot Password ?
                </Link>
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
                <Button variant="contained" href="/home">Login</Button>
              </GridItem>
            </Grid>
          </FormContainer>
          <OrWithText>or with</OrWithText>
          <ImageContainerMain>
            <ImageContainer src={googleImage} />
            <ImageContainer style={{ marginLeft: "15px" }} src={appleImage} />
          </ImageContainerMain>
          <LinkContainer sx={{width:"50%",textAlign:"center"}}>
            New to Evo Love ?&nbsp;
            <a
              href="/signUp"
              style={{ color: "#295BE0", textDecoration: "none" }}
            >
              Register Here
            </a>
          </LinkContainer>
          <button onClick={handleClick}>Test api button</button>
        </PaperContainer>
      </Container>
    </Box>
  );
}

export default Login;
