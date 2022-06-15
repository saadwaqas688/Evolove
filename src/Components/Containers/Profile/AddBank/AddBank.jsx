import React from "react";
import CheckCircleIcon from "../../../../assets/icons/CheckCircleIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import { Details, FieldLabel,  Heading,  MainContainer, ProfileButton, SubHeading } from "./AddBank.style";


const AddBank = ({showNewBankForm,setShowNewBankForm}) => {
  const [bankName, setBankName] = React.useState("");
  const [accountNumber, setAccountNumber] = React.useState("");
  const [branchCode, setBranchCode] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [bankDetails, setBankDetails] = React.useState("Account Number : 8379834******");
  const [check, setCheck] = React.useState(true);

  return (
  
            <MainContainer >
            <>
            { !showNewBankForm?<>
                        <SubHeading>Bank Account</SubHeading>
                 <BoxCom sx={{marginTop:"40px"}}>
       <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Added Bank</FieldLabel>
          <Details>Edit Details</Details>
          </BoxCom>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setBankDetails(e.target.value)}
                  name="bankDetails"
                  value={bankDetails}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  iconPosition="end"
                  icon={true}
                />
          </BoxCom>
          </>
          :
          <>
        <SubHeading>Add Bank</SubHeading>
         <BoxCom sx={{marginTop:"20px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Bank Name</FieldLabel>
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
          <FieldLabel>Account Number</FieldLabel>
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
          <FieldLabel>Branch Code</FieldLabel>
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
          <FieldLabel>Zip Code</FieldLabel>
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
}
          </>
          <ProfileButton variant="contained" onClick={()=>setShowNewBankForm(!showNewBankForm)}  > {showNewBankForm?"Add  Bank": "Add New Bank"}</ProfileButton>
    </MainContainer>
  );
};

export default AddBank;
