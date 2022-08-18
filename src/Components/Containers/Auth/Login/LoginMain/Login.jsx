import { Box, Container, Grid } from "@mui/material";
import React, {useState} from "react";
import Button from "../../../../UI/Button/Button";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import googleImage from "../../../../../assets/images/homeOnBoarding/googleImage.png";
import appleImage from "../../../../../assets/images/homeOnBoarding/appleImage.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  FormContainer,
  GridItem,
  Heading,
  ImageContainer,
  ImageContainerMain,
  LinkContainer,
  OrWithText,
  PaperContainer,
  ErrorText,
} from "./Login.style";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { signin } from "./../../../../../services/services";

function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [errorData, setErrorData] = useState("");
  const [error, setError] = useState(false);

  
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email format is incorrect")
      .required("Email required!"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      signin(email, password)
        .then((res) => {
          setError(false);
          enqueueSnackbar("Succesfully LoggedIn", {
            variant: "success",
            autoHideDuration: 4000,
          });
          localStorage.setItem("authentication", "true");
          navigate("/home");
        })
        .catch((error) => {
          setError(true);
          enqueueSnackbar(error.message, {
            variant: "error",
            autoHideDuration: 4000,
          });
          setErrorData(error.code);
        });
    },
  });

  return (
    <Box sx={{ background: "#131315" }}>
      <NavBar />
      <Container style={{ padding: "0px" }}>
        <PaperContainer elevation={0}>
          <Heading>Login</Heading>

          <FormContainer>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <GridItem item xs={12}>
                  <TextfieldComp
                    height="60px"
                    width="70%"
                    autoComplete="false"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    name="email"
                    id="email"
                    value={formik.values.email}
                  />
                </GridItem>
                <GridItem item xs={12}>
                  <TextfieldComp
                    height="60px"
                    width="70%"
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </GridItem>
                <GridItem
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: { sm: "120px", xs: "45px" },
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
                <div style={{ width: "100%" }}>
                  {error ? <ErrorText>{errorData}</ErrorText> : null}
                </div>

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
                  {/* href="/home" */}
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
                </GridItem>
              </Grid>
            </form>
          </FormContainer>
          <OrWithText>or with</OrWithText>
          <ImageContainerMain>
            <ImageContainer src={googleImage} />
            <ImageContainer style={{ marginLeft: "15px" }} src={appleImage} />
          </ImageContainerMain>
          <LinkContainer sx={{ width: "50%", textAlign: "center" }}>
            New to Evo Love ?&nbsp;
            <a
              href="/signUp"
              style={{ color: "#295BE0", textDecoration: "none" }}
            >
              Register Here
            </a>
          </LinkContainer>
        </PaperContainer>
      </Container>
    </Box>
  );
}

export default Login;
