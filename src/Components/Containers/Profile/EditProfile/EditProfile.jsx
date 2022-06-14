import React from "react";
import ChangePasswordIcon from "../../../../assets/icons/ChangePasswordIcon";
import EditProfileIcon from "../../../../assets/icons/EditProfileIcon";
import BankAcountIcon from "../../../../assets/icons/BankAcountIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import ProfileImage from"../../../../assets/images/homeOnBoarding/profileImg.png"
import { AvatarContainer, AvatarWrapper, ChangePasswordText, EditProfileText, FieldLabel, HeaderIconTextWrapper, Heading, IconAndTextContainer, MainContainer, ProfileButton, ProfileSettingHeader, SubHeading } from "./EditProfile.style ";
import CameraIcon from "../../../../assets/icons/CameraIcon";
import { Colors } from "../../../../config/palette";
import { useLocation } from "react-router";
import {getBasePath} from  "../../../../Utils/utils"
import AddBank from "../AddBank/AddBank";

const EditProfile = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [selected, setSelected] = React.useState("editProfile");
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showNewBankForm, setShowNewBankForm] = React.useState(false);

  let { pathname } = useLocation();
     pathname=getBasePath(pathname)  

     function handleEditProfile(){
     setSelected("editProfile")
     setShowNewBankForm(false)

     }

     function handleChangePassword(){
      setSelected("changePassword")
      setShowNewBankForm(false)
 
      }

  return (
  <><ProfileSettingHeader width={pathname==="coachProfile"?"80%":"450px"}>
      <Heading>Profile Settings</Heading>
          <SubHeading>Account Setting</SubHeading>
          <HeaderIconTextWrapper >
          <IconAndTextContainer onClick={handleEditProfile}> 
          <EditProfileIcon color={selected==="editProfile"?Colors.info:Colors.light}/>
          <EditProfileText sx={{color:selected==="editProfile"?Colors.info:Colors.light}}>Edit Profile</EditProfileText>
          </IconAndTextContainer>
          <IconAndTextContainer  onClick={handleChangePassword}> 
          <ChangePasswordIcon color={selected==="changePassword"?Colors.info:Colors.light}/>
          <ChangePasswordText sx={{color:selected==="changePassword"?Colors.info:Colors.light}}>Change Password</ChangePasswordText>
          </IconAndTextContainer>
          {pathname==="coachProfile" &&
           <IconAndTextContainer  onClick={()=>setSelected("bankAccount")}> 
          <BankAcountIcon color={selected==="bankAccount"?Colors.info:Colors.light}/>
          <ChangePasswordText sx={{color:selected==="bankAccount"?Colors.info:Colors.light}}>Bank Account</ChangePasswordText>
          </IconAndTextContainer> 
          }
          </HeaderIconTextWrapper>
          {selected==="editProfile" &&
            <AvatarContainer >
          <AvatarWrapper  alt="Remy Sharp" src={ProfileImage} />
          <BoxCom sx={{marginTop:"-35px",zindex:"-5",position:"absolute",  left: "72px"}}>
          <CameraIcon/>
          </BoxCom>
          </AvatarContainer>
          }
  </ProfileSettingHeader>
            <MainContainer >
            <SubHeading>{selected==="editProfile"?"Personal Information":selected==="changePassword"?"Change Password":""}</SubHeading>
        { selected==="editProfile" &&
            <>
         <BoxCom sx={{marginTop:"20px"}}>
          <FieldLabel>Name</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  value={name}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          <BoxCom sx={{paddingTop:"35px"}}>
            <FieldLabel>Email</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          </>
        }
              { selected==="changePassword" &&
            <>
               <BoxCom sx={{marginTop:"20px"}}>
          <FieldLabel>Old Password</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setOldPassword(e.target.value)}
                  name="oldPassword"
                  value={oldPassword}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
         <BoxCom sx={{marginTop:"20px"}}>
          <FieldLabel>New Password</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setNewPassword(e.target.value)}
                  name="newPassword"
                  value={newPassword}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          <BoxCom sx={{paddingTop:"35px"}}>
            <FieldLabel>Confirm Password</FieldLabel>
          <TextfieldComp
                  height="50px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
                  value={confirmPassword}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>
          </>
        }
                { selected==="bankAccount" &&
            <>
            <AddBank showNewBankForm={showNewBankForm} setShowNewBankForm={setShowNewBankForm}/>
          </>
        }{
          selected!=="bankAccount" &&                                 
           <ProfileButton variant="contained"  >Save Changes</ProfileButton>
        }
    </MainContainer>
    </>
  );
};

export default EditProfile;
