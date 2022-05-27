import { Box, Container, Grid} from "@mui/material";
import Button from "../../../../UI/Button/Button";
import NavBar from "../../../../UI/NavBar/NavBarMain/NavBar";
import TextFieldWrapper from "../../../../UI/TextField/TextFieldWrapper";
import TextfieldComp from "../../../../UI/TextFieldCom/Textfield";




import {FormContainer, GridItem, Heading, PaperContainer, SubHeading, VerificationCodeField } from "./VerifyCodeStepOne.style";


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
         <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px",width:{md:"40%",sm:"100%"}}}>
         <VerificationCodeField  name="first" onChange={handleChange}/>
         <VerificationCodeField  name="second"  onChange={handleChange} />
         <VerificationCodeField  name="third"  onChange={handleChange}/>
         <VerificationCodeField  name="fourth" onChange={handleChange} />
         <VerificationCodeField  name="fifth" onChange={handleChange}/>
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
