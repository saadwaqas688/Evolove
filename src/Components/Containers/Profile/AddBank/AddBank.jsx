import React from "react";
import CheckCircleIcon from "../../../../assets/icons/CheckCircleIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import { Details, FieldLabel,  Heading,  MainContainer, ProfileButton, SubHeading } from "./AddBank.style";
import { Formik, Form } from "formik";
import * as Yup from "yup";


const AddBank = ({showNewBankForm,setShowNewBankForm}) => {
  const [bankName, setBankName] = React.useState("");
  const [accountNumber, setAccountNumber] = React.useState("");
  const [branchCode, setBranchCode] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [bankDetails, setBankDetails] = React.useState("Account Number : 8379834******");
  const [check, setCheck] = React.useState(true);



  let FORM_VALIDATION = "";
  let initialValues = "";

  if (!showNewBankForm) {
    FORM_VALIDATION = Yup.object().shape({
      bankDetails: Yup.string().required("bank details is required"),
    });

    initialValues = {
      bankDetails:"",

    };
  } else {
    FORM_VALIDATION = Yup.object().shape({
      bankName: Yup.string().required("bank name is required"),

      accountNumber: Yup.string().required("account name is required"),

      branchCode: Yup.string().required("branch code is required"),

      zipCode: Yup.string().required("zip code is required"),

    });

    initialValues = {
      bankName:"",

      accountNumber:"",

      branchCode:"",

      zipCode:"",
    };
  }

  async function submitHandler(values) {

  console.log("values",values)
  }

  return (
  
            <MainContainer >
            <>
            <Formik
      initialValues={initialValues}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        submitHandler(values);
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched,values, handleChange } = formik;
        console.log("errors",errors)
        console.log("values",values)
        console.log("touched",touched)

        
        return (
          <>
            <Form>
          
          {/* { !showNewBankForm?<>
   <SubHeading>Bank Account</SubHeading> */}
                 {/* <BoxCom sx={{marginTop:"40px"}}>
       <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Added Bank</FieldLabel>
          <Details>Edit Details</Details>
          </BoxCom>
          
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={handleChange}
                  name="bankDetails"
                  value={values.bankDetails}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  iconPosition="end"
                  iconType="password"
                  icon={true}
                  helperText={
               errors.bankDetails ? errors.bankDetails : ""
                  }
                  error={errors.bankDetails  ? true : null}
                />
          </BoxCom> */}
          {/* </>
          :
          <> */}
        <SubHeading>Add Bank</SubHeading>
         <BoxCom sx={{marginTop:"20px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Bank Name</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={handleChange}
                  name="bankName"
                  value={values.bankName}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  helperText={
                    errors.bankName ? errors.bankName : ""
                  }
                  error={errors.bankName ? true : null}
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
                  onChange={handleChange}
                  name="accountNumber"
                  value={values.accountNumber}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  helperText={
                    errors.accountNumber ? errors.accountNumber : ""
                  }
                  error={errors.accountNumber ? true : null}
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
                  onChange={handleChange}
                  name="branchCode"
                  value={values.branchCode}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  helperText={
                    errors.branchCode ? errors.branchCode : ""
                  }
                  error={errors.branchCode  ? true : null}
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
                  onChange={handleChange}
                  name="zipCode"
                  value={values.zipCode}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  helperText={
                    errors.zipCode ? errors.zipCode : ""
                  }
                  error={errors.zipCode? true : null}
                />
          </BoxCom>
          <BoxCom sx={{display:"flex",justifyContent:"flex-start",marginTop:"40px"}}>
          <BoxCom onClick={()=>setCheck(!check)} >
          <CheckCircleIcon check={check} />
          </BoxCom>
          <Heading sx={{marginLeft:"10px"}}>Save for Later Payouts</Heading>

          </BoxCom>

          {/* </> */}
          
      </Form>
          </>
        );
      }}
    </Formik>
          </>
          <ProfileButton type="submit" variant="contained" onClick={()=>setShowNewBankForm(!showNewBankForm)}  > {showNewBankForm?"Add  Bank": "Add New Bank"}</ProfileButton>
    </MainContainer>
  );
};

export default AddBank;
