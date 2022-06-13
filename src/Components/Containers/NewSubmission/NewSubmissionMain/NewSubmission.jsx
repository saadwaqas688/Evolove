import { Grid } from "@mui/material";
import React from "react";
import CheckCircleIcon from "../../../../assets/icons/CheckCircleIcon";
import { UploadHereIcon } from "../../../../assets/icons/UploadHereIcon";
import { UploadVideoIcon } from "../../../../assets/icons/UploadVideoIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import { CardText, FieldLabel,  FieldWrapper,  Heading,  LeftSideGrid,  MainContainer, ProfileButton, RightSideGrid, SubHeading } from "./NewSubmission.style";


const NewSubmission = ({setShowForm}) => {
  const [bankName, setBankName] = React.useState("");
  const [accountNumber, setAccountNumber] = React.useState("");
  const [branchCode, setBranchCode] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [check, setCheck] = React.useState(true);

 


  return (
  
    //         <MainContainer >
    //         <>
    //      <Heading>
    //      New Submission
    //      </Heading>
    //      <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >
    //         <LeftSideGrid item xs={12} sm={6} md={12} lg={4.5}>
    //         <SubHeading>Select what type you want to submit</SubHeading>

    //         <FieldWrapper height={"56px"}  border={false}>
    //             <CardText >
    //             Course
    //             </CardText>
    //             </FieldWrapper>

    //             <FieldWrapper height={"56px"} border={true}>
    //             <CardText >
    //              Product
    //             </CardText>
    //             </FieldWrapper>

    //             <FieldWrapper height={"56px"} border={false}>
    //             <CardText >
    //             Blog
    //             </CardText>
    //             </FieldWrapper>
      
    //         </LeftSideGrid>

    //         <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="15%">
    //         <SubHeading>Fill the information for course information</SubHeading>
    //         <BoxCom sx={{marginTop:"10px"}}>
    //       <FieldLabel>CVV</FieldLabel>
    //       <TextfieldComp
    //               height="50px"
    //               width="100%"
    //               autoComplete="false"
    //               onChange={(e) => setZipCode(e.target.value)}
    //               name="zipCode"
    //               value={zipCode}
    //               justifyproperty="flex-start"
    //               alignproperty="null"
    //             />
    //       </BoxCom>

    //       <BoxCom sx={{marginTop:"40px"}}>
    //      <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
    //       <FieldLabel>CVV</FieldLabel>
    //       </BoxCom>
    //       <TextfieldComp
    //               height="50px"
    //               width="100%"
    //               autoComplete="false"
    //               onChange={(e) => setZipCode(e.target.value)}
    //               name="zipCode"
    //               value={zipCode}
    //               justifyproperty="flex-start"
    //               alignproperty="null"
    //             />
    //       </BoxCom>

    //       <BoxCom sx={{marginTop:"40px"}}>
    //      <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
    //       <FieldLabel>CVV</FieldLabel>
    //       </BoxCom>
    //       <TextfieldComp
    //               width="100%"
    //               autoComplete="false"
    //               onChange={(e) => setZipCode(e.target.value)}
    //               name="zipCode"
    //               value={zipCode}
    //               justifyproperty="flex-start"
    //               alignproperty="null"
    //               multiLine={true} 
    //               height="150px"
    //             />
    //       </BoxCom>
    //       <ProfileButton variant="contained" onClick={()=>setShowForm(false)}  >Add  Bank</ProfileButton>
    //       </RightSideGrid>
    //         </Grid>

       
    //       </>

    
    // </MainContainer>
    <MainContainer >
    <>
 <Heading>
 New Submission
 </Heading>
 <Grid container  spacing={8} sx={{width:{md:"80%",lg:"100%"}}} >
    <LeftSideGrid item xs={12} sm={6} md={12} lg={6}>
    <SubHeading>Upload cover image and Introduction Video</SubHeading>
    <FieldLabel sx={{marginTop:"50px"}}>Cover Image</FieldLabel>
    <FieldWrapper height={"177px"} sx={{borderRadius:"8px"}}>
        <UploadHereIcon/>
        </FieldWrapper>
        <FieldLabel sx={{marginTop:"20px", borderRadius:"8px"}}>Introduction Video</FieldLabel>
        <FieldWrapper  height={"177px"} >
        <UploadVideoIcon/>
        </FieldWrapper>


        <ProfileButton variant="contained" onClick={()=>setShowForm(false)}  >Add  Bank</ProfileButton>

    </LeftSideGrid>

    
    </Grid>


  </>


</MainContainer>
  );
};

export default NewSubmission;
