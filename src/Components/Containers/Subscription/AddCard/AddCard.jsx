import React from "react";
import CheckCircleIcon from "../../../../assets/icons/CheckCircleIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import { FieldLabel,  Heading,  MainContainer, ProfileButton, SubHeading } from "./AddCard.style";


const AddCard = ({setShowForm}) => {
  const [bankName, setBankName] = React.useState("");
  const [accountNumber, setAccountNumber] = React.useState("");
  const [branchCode, setBranchCode] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [check, setCheck] = React.useState(true);

  return (
  
            <MainContainer >
            <>
        <SubHeading>Add Card</SubHeading>
         <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Name On Card</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setBankName(e.target.value)}
                  name="bankName"
                  value={bankName}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Card Number</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setAccountNumber(e.target.value)}
                  name="accountNumber"
                  value={accountNumber}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Valid Thru</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setBranchCode(e.target.value)}
                  name="branchCode"
                  value={branchCode}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>CVV</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setZipCode(e.target.value)}
                  name="zipCode"
                  value={zipCode}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          <BoxCom sx={{display:"flex",justifyContent:"flex-start",marginTop:"40px"}}>
          <BoxCom onClick={()=>setCheck(!check)} >
          <CheckCircleIcon check={check} />
          </BoxCom>
          <Heading sx={{marginLeft:"10px"}}>Save for Later Payouts</Heading>

          </BoxCom>
          </>

    
          <ProfileButton variant="contained" onClick={()=>setShowForm(false)}  >Add  Bank</ProfileButton>
    </MainContainer>
  );
};

export default AddCard;
