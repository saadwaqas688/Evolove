import { Box, Container, Grid} from "@mui/material";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextFieldWrapper from "../../../../UI/TextField/TextFieldWrapper";




import {FormContainer, GridItem, Heading, PaperContainer } from "./SignUp.style";


function SignUp() {
  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            SignUp      
         </Heading>
         
         <FormContainer>
               <Grid container spacing={1} >
                  <GridItem item xs={12} > 
                  <TextFieldWrapper name="fullName" label="Full Name" />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextFieldWrapper name="email" label="Email" />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextFieldWrapper name="phoneNumber" label="Phone Number"  />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextFieldWrapper name="password" label="Password" />
                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}> 
       <Button variant="contained" >Sign up</Button>
                  </GridItem>
                     </Grid>
           </FormContainer>
  </PaperContainer>

  </Container> 
  <Footer/>

  </Box>
  )
}

export default SignUp;
