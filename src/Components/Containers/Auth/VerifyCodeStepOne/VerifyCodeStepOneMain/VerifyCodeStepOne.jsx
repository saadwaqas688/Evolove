import { Box, Container, Grid} from "@mui/material";
import Button from "../../../../UI/Button/Button";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextFieldWrapper from "../../../../UI/TextField/TextFieldWrapper";




import {FormContainer, GridItem, Heading, PaperContainer, SubHeading, VerificationCodeField } from "./VerifyCodeStepOne.style";


function VerifyCodeStepOne() {
  return (
    
    <Box sx={{background:"#131315"}}>
  <NavBar />
  <Container style={{padding:'0px'}}>
  <PaperContainer elevation={0} >
        <Heading >
            Verification Code
         </Heading>
         <SubHeading variant="body2">
         Enter the verification code we just send you to your email address         
         </SubHeading> 
         <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}>
         <VerificationCodeField  name="first" />
         <VerificationCodeField  name="second"   sx={{marginLeft:{md:"30px",xs:"10px"}}}/>
         <VerificationCodeField  name="third"  sx={{marginLeft:{md:"30px",xs:"10px"}}}/>
         <VerificationCodeField  name="fourth"  sx={{marginLeft:{md:"30px",xs:"10px"}}}/>
         <VerificationCodeField  name="fifth" sx={{marginLeft:{md:"30px",xs:"10px"}}}/>
         </Box>
         <FormContainer>  
            <Grid container spacing={0} >
                  <GridItem item xs={12} > 
                   <Heading >
                     Logo Left
                    </Heading>
                  </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}> 
                  <Button variant="contained" >
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

export default VerifyCodeStepOne;
