import { Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextFieldWrapper from "../../../../UI/TextField/TextFieldWrapper";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import { ImageContainer, ImageContainerMain, LinkContainer, OrWithText } from "../../Login/LoginMain/Login.style";
import googleImage from "../../../../../assets/images/homeOnBoarding/googleImage.png";
import appleImage from "../../../../../assets/images/homeOnBoarding/appleImage.png";




import {FormContainer, GridItem, Heading, PaperContainer } from "./SignUp.style";


function SignUp() {
  const [formData,setFormData]=React.useState({
    fullName:'',
    email:'',
    phoneNumber:'',
    password:''
  })

  const {fullName,email,phoneNumber,password}=formData
  const handleChange=(e)=>{ 
   setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            SignUp      
         </Heading>
         
         <FormContainer >
               <Grid container spacing={1} >
                  <Grid item xs={12} > 
                  <TextfieldComp placeholder="Full Name" onChange={handleChange} name="fullName" value={fullName}/>
                  </Grid>
                  <Grid item xs={12} > 
                  <TextfieldComp placeholder="Email" onChange={handleChange} name="email" value={email}/>
                  </Grid>
                  <Grid item xs={12} > 
                  <TextfieldComp placeholder="PhoneNumber" onChange={handleChange} name="phoneNumber" value={phoneNumber}/>

                  </Grid>
                  <Grid item xs={12} > 
                  <TextfieldComp placeholder="Password" onChange={handleChange} name="password" value={password}/>

                  </Grid>
                  <Grid item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}> 
       <Button variant="contained" >Sign up</Button>
                  </Grid>
                     </Grid>
           </FormContainer>
           <OrWithText>or with</OrWithText>
          <ImageContainerMain>
            <ImageContainer src={googleImage} />
            <ImageContainer style={{ marginLeft: "15px" }} src={appleImage} />
          </ImageContainerMain>
          <LinkContainer sx={{textAlign:"center"}}>
          <p>
          By clicking Register or Continue with

            </p>
           you agree to Evo Love <span></span>
            <a
              href="/signUp"
              style={{ color: "#295BE0" }}
            >
              Terms of User and Privacy Policy
            </a>
          </LinkContainer>
  </PaperContainer>

  </Container> 
  <Footer/>

  </Box>
  )
}

export default SignUp;
