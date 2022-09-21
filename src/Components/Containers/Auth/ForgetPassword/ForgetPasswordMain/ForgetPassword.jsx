import { Box, Container, Grid, Typography} from "@mui/material";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import React from "react";
import { useSnackbar } from "notistack";
import { sendPasswordResetEmail } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";






import {FormContainer, GridItem, Heading, PaperContainer } from "./ForgetPasswordMain.style";
import { auth } from "../../../../../config/Firebase/firebase";


function ForgetPassword() {
  const [email, setEmail] = React.useState("");
  const [loading,setLoading]=React.useState(false)
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const initialValues = {
    email:"",
  };

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
  });

  async function submitHandler(values) {


      const resetPassword = async (email) => {
          setLoading(true);
          await sendPasswordResetEmail(auth, email)
            .then(() => {
              setLoading(false);
              enqueueSnackbar('Reset Password link send to your Email.', {
                variant: "success",
                autoHideDuration: 4000,
              });
              navigate("/verifyCode");
  
            })
            .catch(e => {
              setLoading(false);
              enqueueSnackbar('Error occoured ! ', {
                variant: "error",
                autoHideDuration: 4000,
              });          });
        }
        resetPassword(values.email)
   
    }

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={FORM_VALIDATION}
    onSubmit={(values) => {
      submitHandler(values);
    }}
  >
    {(formik) => {
      const { errors, values, handleChange } = formik;
      return (
        <>
          <Form>
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            Forgot Password
         </Heading>
         <Typography variant="body2" sx={{alignText:'center',color:"#B7C6D9",fontSize:"18px"}}>
         Enter the email address associated with your account
         </Typography>
         <FormContainer>
               <Grid container spacing={1} >
                  <GridItem item xs={12} > 
                  {/* <TextfieldComp
                  height="60px"
                  width="70%"
                  autoComplete="false"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                /> */}
                              <TextfieldComp
                        height="60px"
                        width="70%"
                        autoComplete="false"
                        placeholder="Email"
                        onChange={(e)=>{handleChange(e)}}
                        name="email"
                        value={values.email}
                        justifyproperty="flex-start"
                        helperText={
                          errors.email ? errors.email : ""
                        }
                        error={errors.email ? true : null}
                      />
                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}> 
                  <Button type="submit" variant="contained" >
                    {loading?"please wait ....":"Send"}
                    </Button>
                  </GridItem>
                     </Grid>
           </FormContainer>
  </PaperContainer>

  </Container> 
  <Footer/>

  </Box>
  </Form>
          </>
        );
      }}
    </Formik>
  )
}

export default ForgetPassword;
