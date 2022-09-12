import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import {
  ImageContainer,
  ImageContainerMain,
  LinkContainer,
  OrWithText,
} from "../../Login/LoginMain/Login.style";
import googleImage from "../../../../../assets/images/homeOnBoarding/googleImage.png";
import appleImage from "../../../../../assets/images/homeOnBoarding/appleImage.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import {
  FormContainer,
  Heading,
  PaperContainer,
  ErrorText,
} from "./SignUp.style";
import { postServiceByCoustomId, signup } from "./../../../../../services/services";
import { useNavigate } from "react-router-dom";
// import useAuth from './../../../../../Utils/useAuth';

function SignUp() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [errorData, setErrorData] = useState("");
  const [error, setError] = useState(false);

  const userModel={
  About:"",
  ArticlesEarnings:0,
  BankDetails:[],
  Coach:false,
  Contact:"",
  CourseEarnings:0,
  EbooksEarnings:0,
  Email:"",
  FavoriteProducts:[],
  FavoriteTickets:[],
  Favorites:[],
  FullName:"",
  ProfileImage:"",
  PurchasedBlogs:[],
  PurchasedCourse:[],
  PurchasedProducts:[],
  SoldArticles:0,
  SoldCourses:0,
  SoldEbooks:0,
  SubscribeCoach:[],
  TotalEarnings:0,
  WalletRecentActivity:[],
  id:""












  }
  // const [formData, setFormData] = React.useState({
  //   fullName: "",
  //   email: "",
  //   phoneNumber: "",
  //   password: "",
  // });
  // console.log("formdata", formData);
  // const currentUser = useAuth()
  // console.log('i am current user',currentUser)
  // const { fullName, email, phoneNumber, password } = formData;
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleSignup = async () => {
  //   try {
  //     await signup(email, password)

  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  


    const saveUserData = async (path,data,id) => {
    try {
      await postServiceByCoustomId(path,data,id)
      enqueueSnackbar("Succesfully LoggedIn", {
        variant: "success",
        autoHideDuration: 4000,
      });
      navigate("/home");
      setError(false);

    } catch (error) {
      setError(true);
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 4000,
      });
    }
  }


  const validationSchema = yup.object({
    name: yup.string().required("Username Required"),
    email: yup
      .string()
      .email("Email format is incorrect")
      .required("Email required!"),
    phoneNumber: yup
      .string()
      .required("Phone number required!")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),

    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password, phoneNumber, name } = values;
      signup(email, password)
        .then((res) => {
          userModel.FullName=name
          userModel.Contact=phoneNumber
          userModel.Email=email
          userModel.id=res.user.uid
          saveUserData("Users",userModel,res.user.uid)
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
          <Heading>SignUp</Heading>

          <FormContainer>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextfieldComp
                    height="60px"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    name="name"
                    id="name"
                    value={formik.values.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextfieldComp
                    height="60px"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    name="email"
                    id="email"
                    value={formik.values.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextfieldComp
                    height="60px"
                    placeholder="PhoneNumber"
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                    id="phoneNumber"
                    value={formik.values.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextfieldComp
                    height="60px"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
                <div style={{ width: "100%" }}>
                  {error ? <ErrorText>{errorData}</ErrorText> : null}
                </div>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "30px",
                  }}
                >
                  <Button variant="contained" type="submit">
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </form>
          </FormContainer>
          <OrWithText>or with</OrWithText>
          <ImageContainerMain>
            <ImageContainer src={googleImage} />
            <ImageContainer style={{ marginLeft: "15px" }} src={appleImage} />
          </ImageContainerMain>
          <LinkContainer sx={{ textAlign: "center" }}>
            <p>By clicking Register or Continue with</p>
            you agree to Evo Love <span></span>
            <a href="/signUp" style={{ color: "#295BE0" }}>
              Terms of User and Privacy Policy
            </a>
          </LinkContainer>
        </PaperContainer>
      </Container>
      <Footer />
    </Box>
  );
}

export default SignUp;
