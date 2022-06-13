import { Box, Container, Grid} from "@mui/material";
import React from "react";
import { Colors } from "../../../../../config/palette";
import Button from "../../../../UI/Button/Button";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";



import {FormContainer, GridItem, Heading, LinkContainer, PaperContainer, SubHeading, VerificationCodeField } from "./VerifyCodeStepOne.style";


function VerifyCodeStepOne() {
  const [formData,setFormData]=React.useState({
    first:'',
    second:'',
    third:'',
    fourth:'',
    fifth:'',
  })

  const {first,second,third,fourth,fifth}=formData
  const handleChange=(e)=>{ 
   setFormData({...formData,[e.target.name]:e.target.value})
  }
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
         <FormContainer>  
            <Grid container spacing={0} >
            <GridItem item  xs={4} sm={2.4} > 
            <VerificationCodeField name="first" value={first} onChange={handleChange}/>

                  </GridItem>
                  <GridItem item xs={4} sm={2.4} > 
                  <VerificationCodeField name="second" value={second} onChange={handleChange}/>

            </GridItem>
            <GridItem item xs={4} sm={2.4} > 
            <VerificationCodeField name="third" value={third} onChange={handleChange}/>

            </GridItem>
            <GridItem item xs={4} sm={2.4} > 
            <VerificationCodeField name="fourth" value={fourth} onChange={handleChange}/>

            </GridItem>

            <GridItem item xs={4} sm={2.4} > 
            <VerificationCodeField name="fifth" value={fifth} onChange={handleChange}/>
            </GridItem>
                  <GridItem item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}> 
                  <Button variant="contained" href="/newPassword" sx={{textTransform:"none",fontSize:"16px"}} >
                    Verify
                    </Button>
                  </GridItem>
                     </Grid>
           </FormContainer>
           <LinkContainer >
           Didn’t get any code ?&nbsp;
            <a
              href="/forgotPassword"
              style={{ color: Colors.info, textDecoration: "none" }}
            >
              Resend
            </a>
          </LinkContainer>
  </PaperContainer>
  </Container> 
  </Box>
  )
}

export default VerifyCodeStepOne;
