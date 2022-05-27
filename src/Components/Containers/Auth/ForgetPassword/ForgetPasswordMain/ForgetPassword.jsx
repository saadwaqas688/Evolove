import { Box, Container, Grid, Typography} from "@mui/material";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextFieldWrapper from "../../../../UI/TextField/TextFieldWrapper";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";
import React from "react";




import {FormContainer, GridItem, Heading, PaperContainer } from "./ForgetPasswordMain.style";


function ForgetPassword() {
  const [email, setEmail] = React.useState("");

  return (
    
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
                  <TextfieldComp
                  height="60px"
                  width="70%"
                  autoComplete="false"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                />
                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}> 
                  <Button variant="contained" href="/verifyCode" >
                    Send
                    </Button>
                  </GridItem>
                     </Grid>
           </FormContainer>
  </PaperContainer>

  </Container> 
  <Footer/>

  </Box>
  )
}

export default ForgetPassword;
