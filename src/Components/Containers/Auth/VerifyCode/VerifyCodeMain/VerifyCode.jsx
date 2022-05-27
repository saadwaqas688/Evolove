import { Box, Container, Grid} from "@mui/material";
import Button from "../../../../UI/Button/Button";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";




import {FormContainer, GridItem, Heading, PaperContainer, SubHeading } from "./VerifyCode.style";


function VerifyCode() {
  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            Check Your Email
         </Heading>
         <SubHeading variant="body2">
         Please Check your Mail. we have sent you an   email that contains a verification code          
         </SubHeading> 
         <FormContainer>              
            <Grid container spacing={1} >
                  <GridItem item xs={12} > 
                  <Heading >
            Logo Left
         </Heading>
                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}> 
                  <Button variant="contained" href="/verifyCodeStepOne" >
                    Sign up
                    </Button>
                  </GridItem>
                     </Grid>
           </FormContainer>
  </PaperContainer>
  </Container> 
  </Box>
  )
}

export default VerifyCode;
