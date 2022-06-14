import { Box, Container, Grid, Typography} from "@mui/material";
import Button from "../../../UI/Button/Button";
import NavBar from "../../../UI/NavBar/NavBarMain/NavBar";
import React from "react";
import {FormContainer, GridItem, Heading, PaperContainer, SubHeading } from "./CheckEmail.style";
import CheckEmailIcon from "../../../../assets/icons/CheckEmailIcon";


function CheckEmail() {

  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            Check Your Email
         </Heading>
<SubHeading>

         <Typography variant="body2" sx={{alignText:'center',color:"#B7C6D9",fontSize:"18px"}}>
         Please Check your Mail. we have sent you an email that contains a verification code         </Typography>
</SubHeading>
         <FormContainer>
               <Grid container spacing={1} >
               <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}> 
                  <CheckEmailIcon/>
                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}> 
                  <Button variant="contained" href="/verifyCodeStepOne" sx={{textTransform:"none",fontSize:"16px"}} >
                    Verify Code
                    </Button>
                  </GridItem>
                     </Grid>
           </FormContainer>
  </PaperContainer>

  </Container> 
  </Box>
  )
}

export default CheckEmail;
