import React from "react";
import ChangePasswordIcon from "../../../../assets/icons/ChangePasswordIcon";
import EditProfileIcon from "../../../../assets/icons/EditProfileIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import ProfileImage from"../../../../assets/images/homeOnBoarding/profileImg.png"
import { AvatarContainer, AvatarWrapper, ChangePasswordText, EditProfileText, FieldLabel, HeaderIconTextWrapper, Heading, IconAndTextContainer, MainContainer, ProfileButton, ProfileSettingHeader, SubHeading } from "./EditProfile.style ";
import CameraIcon from "../../../../assets/icons/CameraIcon";
import { Colors } from "../../../../config/palette";

const EditProfile = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [selected, setSelected] = React.useState("editProfile");
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");





  return (
  <><ProfileSettingHeader>
      <Heading>Profile Settings</Heading>
          <SubHeading>Account Setting</SubHeading>
          <HeaderIconTextWrapper >
          <IconAndTextContainer onClick={()=>setSelected("editProfile")}> 
          <EditProfileIcon color={selected==="editProfile"?Colors.info:Colors.light}/>
          <EditProfileText sx={{color:selected==="editProfile"?Colors.info:Colors.light}}>Edit Profile</EditProfileText>
          </IconAndTextContainer>
          <IconAndTextContainer  onClick={()=>setSelected("changePassword")}> 
          <ChangePasswordIcon color={selected==="changePassword"?Colors.info:Colors.light}/>
          <ChangePasswordText sx={{color:selected==="changePassword"?Colors.info:Colors.light}}>Change Password</ChangePasswordText>
          </IconAndTextContainer>
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
            <SubHeading>{selected==="editProfile"?"Personal Information": "Change Password"}</SubHeading>
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
          <ProfileButton variant="contained"  >Save Changes</ProfileButton>
    </MainContainer>
    </>
  );
};

export default EditProfile;
