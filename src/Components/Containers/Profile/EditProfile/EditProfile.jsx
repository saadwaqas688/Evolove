import React from "react";
import ChangePasswordIcon from "../../../../assets/icons/ChangePasswordIcon";
import EditProfileIcon from "../../../../assets/icons/EditProfileIcon";
import BankAcountIcon from "../../../../assets/icons/BankAcountIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import defaultImage from"../../../../assets/images/homeOnBoarding/defaultProfileImage.jpg"
import {
  AvatarContainer,
  AvatarWrapper,
  ChangePasswordText,
  EditProfileText,
  FieldLabel,
  HeaderIconTextWrapper,
  Heading,
  IconAndTextContainer,
  MainContainer,
  ProfileButton,
  ProfileSettingHeader,
  SubHeading,
} from "./EditProfile.style ";
import CameraIcon from "../../../../assets/icons/CameraIcon";
import { Colors } from "../../../../config/palette";
import { useLocation } from "react-router";
import { getBasePath } from "../../../../Utils/utils";
import AddBank from "../AddBank/AddBank";
import ImageUploadField from "../../../UI/ImageUpload/ImageUploadField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { auth } from "../../../../config/Firebase/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { imagePostService, updateService } from "../../../../services/services";


const EditProfile = () => {
  const userData = useSelector((state) => state.auth.userData);

  const [name, setName] = React.useState(userData.FullName);
  const [email, setEmail] = React.useState("");
  const [selected, setSelected] = React.useState("editProfile");
  const [showNewBankForm, setShowNewBankForm] = React.useState(true);
  const [previewImage, setPreviewImage] = React.useState(userData.ProfileImage);
  const [loading, setLoading] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  console.log("userData",userData)

  let FORM_VALIDATION = "";
  let initialValues = "";


  if (selected === "editProfile") {
    FORM_VALIDATION = Yup.object().shape({
      name: Yup.string().required("name is required"),
      image: Yup.string(),
    });

    initialValues = {
      image:userData.ProfileImage,
      name:name,
    };
  } else {
    FORM_VALIDATION = Yup.object().shape({
      email: Yup.string().email().required("email is required"),
    });

    initialValues = {
      email:"",
    };
  }

  let { pathname } = useLocation();
  pathname = getBasePath(pathname);

  function handleEditProfile() {
    setSelected("editProfile");
    setShowNewBankForm(false);
  }

  function handleChangePassword() {
    setSelected("changePassword");
    setShowNewBankForm(false);
  }

  
 

  async function submitHandler(values) {

    if(selected==="changePassword"){

      const resetPassword = async () => {
          setLoading(true);
          await sendPasswordResetEmail(auth, email)
            .then(() => {
              setLoading(false);
              enqueueSnackbar('Reset Password link send to your Email.', {
                variant: "success",
                autoHideDuration: 4000,
              });
              navigate("/verifyCode");
  
            })
            .catch(e => {
              setLoading(false);
              enqueueSnackbar('Error occoured ! ', {
                variant: "error",
                autoHideDuration: 4000,
              });          });
        }
        resetPassword(values.email)
    }else if(selected==="editProfile"){
      try{
        setLoading(true);
        let image=userData.ProfileImage
        let name=userData.FullName
        if(previewImage){
          image = await imagePostService(values.image);
        }
        if(values.name){
          name=values.name
        }

        let payload={...userData,FullName:name,ProfileImage:image}
        
       await updateService("Users",userData.id,payload)
       enqueueSnackbar('profile updated successfully', {
         variant: "success",
         autoHideDuration: 4000,
       }); 
       setLoading(false);

      }catch(error){
        setLoading(false);
        enqueueSnackbar('Error occoured ! ', {
          variant: "error",
          autoHideDuration: 4000,
        }); 
      }

    }else{
      console.log("values of BankAcount",values)
    }

    }

  useEffect(()=>{
    setName(userData.FullName)

    setEmail(userData.Email)

  },[userData])

 
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      {(formik) => {
        const { errors, touched, values, handleChange } = formik;
        console.log("values in formil",values)
        return (
          <>
            <Form>
              <ProfileSettingHeader
                width={pathname === "coachProfile" ? "80%" : "450px"}
              >
                <Heading>Profile Settings</Heading>
                <SubHeading>Account Setting</SubHeading>
                <HeaderIconTextWrapper>
                  <IconAndTextContainer onClick={handleEditProfile}>
                    <EditProfileIcon
                      color={
                        selected === "editProfile" ? Colors.info : Colors.light
                      }
                    />
                    <EditProfileText
                      sx={{
                        color:
                          selected === "editProfile"
                            ? Colors.info
                            : Colors.light,
                      }}
                    >
                      Edit Profile
                    </EditProfileText>
                  </IconAndTextContainer>
                  <IconAndTextContainer onClick={handleChangePassword}>
                    <ChangePasswordIcon
                      color={
                        selected === "changePassword"
                          ? Colors.info
                          : Colors.light
                      }
                    />
                    <ChangePasswordText
                      sx={{
                        color:
                          selected === "changePassword"
                            ? Colors.info
                            : Colors.light,
                      }}
                    >
                      Change Password
                    </ChangePasswordText>
                  </IconAndTextContainer>
                  {pathname === "coachProfile" && (
                    <IconAndTextContainer
                      onClick={() => setSelected("bankAccount")}
                    >
                      <BankAcountIcon
                        color={
                          selected === "bankAccount"
                            ? Colors.info
                            : Colors.light
                        }
                      />
                      <ChangePasswordText
                        sx={{
                          color:
                            selected === "bankAccount"
                              ? Colors.info
                              : Colors.light,
                        }}
                      >
                        Bank Account
                      </ChangePasswordText>
                    </IconAndTextContainer>
                  )}
                </HeaderIconTextWrapper>
                {selected === "editProfile" && (
                  <AvatarContainer>
                    <ImageUploadField
                      name="image"
                      setPreviewImage={(previewImage) =>
                        setPreviewImage(previewImage)
                      }
                    >
                      <label htmlFor="file">
                        <AvatarWrapper alt="Remy Sharp" src={previewImage?previewImage:userData.ProfileImage?userData.ProfileImage:defaultImage} />
                      </label>
                    </ImageUploadField>

                    <BoxCom
                      sx={{
                        marginTop: "-35px",
                        zindex: "-5",
                        position: "absolute",
                        left: "72px",
                      }}
                    >
                      <CameraIcon />
                    </BoxCom>
                  </AvatarContainer>
                )}
              </ProfileSettingHeader>
              <MainContainer>
                <SubHeading>
                  {selected === "editProfile"
                    ? "Personal Information"
                    : selected === "changePassword"
                    ? "Change Password"
                    : ""}
                </SubHeading>
                {selected === "editProfile" && (
                  <>
                    <BoxCom sx={{ marginTop: "20px" }}>
                      <FieldLabel>Name waqas</FieldLabel>
                      <TextfieldComp
                        height="50px"
                        width="100%"
                        autoComplete="false"
                        onChange={(e)=>{handleChange(e);setName("")}}
                        name="name"
                        value={values.name?values.name:name}
                        justifyproperty="flex-start"
                        alignproperty="null"
                        helperText={
                          (touched.name && errors.name) ? errors.name : ""
                        }
                        error={(errors.name && touched.name) ? true : null}
                      />
                    </BoxCom>
                    <BoxCom sx={{ paddingTop: "35px" }}>
                      <FieldLabel>Email</FieldLabel>
                      <TextfieldComp
                        height="50px"
                        width="100%"
                        autoComplete="false"
                        name="email"
                        value={values.email?values.email:email}
                        justifyproperty="flex-start"
                        alignproperty="null"
                        disabled={true}

                      />
                    </BoxCom>
                  </>
                )}
                {
                  selected === "changePassword" && (
                    <BoxCom sx={{ paddingTop: "35px" }}>
                      <FieldLabel>Email</FieldLabel>
                      <TextfieldComp
                        height="50px"
                        width="100%"
                        autoComplete="false"
                        onChange={(e)=>{handleChange(e)}}
                        name="email"
                        value={values.email}
                        justifyproperty="flex-start"
                        alignproperty="null"
                        helperText={
                          errors.email ? errors.email : ""
                        }
                        error={errors.email ? true : null}
                      />
                    </BoxCom>
                  )
                }

                {selected === "bankAccount" && (
                  <>
                    <AddBank
                      showNewBankForm={showNewBankForm}
                      setShowNewBankForm={setShowNewBankForm}
                    />
                  </>
                )}
                {selected !== "bankAccount" && (
                  <ProfileButton type="submit" variant="contained">
                   {loading?"please wait ....":selected==="changePassword" ? "SEND" :"Save Changes"}
                  </ProfileButton>
                )}
              </MainContainer>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default EditProfile;
