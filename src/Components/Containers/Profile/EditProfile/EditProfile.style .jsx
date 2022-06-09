import { Avatar, styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Button from "../../../UI/Button/Button";


  export const Heading = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    marginBottom:"20px",
      
  }));

  
  export const SubHeading = styled(Typography)(( ) => ({
    marginTop:"40px",
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontSize:"14px",
}));



export const FieldLabel = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.dimGrey,
  fontWeight:"bold",
  fontSize:"14px",
}));

export const Details = styled(Typography)(() => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.grey,
  fontSize:"14px",
}));



export const MainContainer = styled(BoxCom)(({ theme }) => ({
  marginTop: "36px",
  width:"368px",
[theme.breakpoints.down("lg")]: {
width:"80%"
  },
  [theme.breakpoints.down("md")]: {
    width:"368px",
    marginTop:"30px",
      },
      [theme.breakpoints.down("sm")]: {
        width:"100%"
          },
}));


export const EditProfileText = styled(Typography)(( ) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontWeight:"bold",
  fontSize:"16px",   
  marginLeft:"10px",
 
}));

export const ChangePasswordText = styled(Typography)(( {theme}) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontWeight:"bold",
  fontSize:"16px",    
  marginLeft:"10px",
}));

export const ProfileSettingHeader = styled(BoxCom)(({ theme }) => ({
  marginTop: "36px",
  width:"450px",
      [theme.breakpoints.down("sm")]: {
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
          },
}));

export const AvatarWrapper = styled(Avatar)(( ) => ({
  width:'105px',height:"105px",marginTop:"50px",

}));


export const HeaderIconTextWrapper = styled(BoxCom)(({ theme }) => ({
  display:"flex",
  justifyContent:"space-between",
  marginTop:"45px",
[theme.breakpoints.down("sm")]: {
  flexDirection:"column",
  marginLeft:"55px",
  },

}));

export const AvatarContainer = styled(BoxCom)(( ) => ({
  display:"inline-block",
  position:"relative",

}));

export const IconAndTextContainer = styled(BoxCom)(({theme} ) => ({

  display:"flex",
  alignItems:"center",   
 cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
marginTop:"20px",
  
    },

}));


export const ProfileButton = styled(Button)(() => ({
width:"100%",
marginTop:"100px",
textTransform:"none",
fontSize:"16px",
marginLeft:"2px"

}));
