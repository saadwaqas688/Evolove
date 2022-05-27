import { Box, Container, Grid} from "@mui/material";
import React from "react";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextFieldWrapper from "../../../../UI/TextField/TextFieldWrapper";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";



import {FormContainer, GridItem, Heading, PaperContainer } from "./ContactUsMain.style";


function ContactUs() {
  const [name,setName]=React.useState("")

  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            Contact Us      
         </Heading>
         
         <FormContainer>
               <Grid container spacing={1} >
                  <GridItem item xs={12} > 
                  <TextFieldWrapper name="name" label="Name" />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextFieldWrapper name="name" label="Email Id" />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextFieldWrapper name="subject" label="Subject"  />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextfieldComp  placeholder="Email" onChange={(e)=>setName(e.target.value)} name="name2" value={name}
           />

                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}> 
       <Button variant="contained">Send Message</Button>
                  </GridItem>
                     </Grid>
    




           </FormContainer>
  </PaperContainer>

  </Container> 
  <Footer/>

  </Box>
  )
}

export default ContactUs;
