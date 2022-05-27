import { Box, Container, Grid} from "@mui/material";
import React from "react";
import Button from "../../../../UI/Button/Button";
import Footer from "../../../../UI/Footer/FooterMain/Footer";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";



import {FormContainer, GridItem, Heading, PaperContainer } from "./ContactUsMain.style";


function ContactUs() {
  const [formData,setFormData]=React.useState({
    fullName:'',
    email:'',
    subject:'',
    message:''
  })

  const {fullName,email,subject,message}=formData
  const handleChange=(e)=>{ 
   setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            Contact Us      
         </Heading>
         
         <FormContainer>
               <Grid container spacing={0} >
                  <GridItem item xs={12} > 
                  <TextfieldComp height="60px" placeholder="Full Name" onChange={handleChange} name="fullName" value={fullName}
           />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextfieldComp height="60px" placeholder="Email" onChange={handleChange} name="email" value={email}
           />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextfieldComp height="60px" placeholder="Subject" onChange={handleChange} name="subject" value={subject}
           />
                  </GridItem>
                  <GridItem item xs={12} > 
                  <TextfieldComp multiLine={true} height="300px" placeholder="Message" onChange={handleChange} name="message" value={message}
           />

                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"60px",marginBottom:"60px"}}> 
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
