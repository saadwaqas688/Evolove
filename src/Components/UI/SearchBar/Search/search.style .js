import { Avatar, styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../BoxCom/BoxCom";
import Button from "../../Button/Button";

  export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    marginBottom:"10px",
    [theme.breakpoints.down("sm")]: {
      textAlign:"center"
      },
  }));

  export const FilterWrapper = styled(BoxCom)(( ) => ({
    background:Colors.dark,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    height:"57px",
    borderRadius:"10px",
    marginBottom:"20px",
    marginTop:"20px",
  }));

  export const Filter = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    cursor: "pointer",
  }));


export const AvatarWrapper = styled(Avatar)(( {theme}) => ({
  width:'126px',height:"126px",
    [theme.breakpoints.down("xs")]: {
      textAlign:"center"
      },
}));


export const AvatarName = styled(Typography)(( ) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.info,
  fontSize:"21px",
  fontWeight:"bold",
}));

export const MainWrapper = styled(BoxCom)(( {theme}) => ({
    display:"flex",
    flexDirection:"column",  
    marginTop:"30px",
      [theme.breakpoints.down("sm")]: {
           alignItems:"center",
    justifyContent:'center',
      },


  }));


  export const SettingText = styled(Typography)(( ) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontSize:"17px",
    marginLeft:"5px",
  }));


  export const Count = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontSize:"16px",
    marginTop:"36px",
    fontWeight:"bold",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center"
      },
  }));


  export const NameAndIconWrapper = styled(BoxCom)(( {theme}) => ({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"16px",
      [theme.breakpoints.down("sm")]: {
        flexDirection:"column"
      },


  }));


  export const ProfileButton = styled(Button)(() => ({
    textTransform:"none",
    fontSize:"16px",
    marginLeft:"2px",
    height:"35px",
    fontWeight:"normal"
    }));


    export const ButtonForSmallScreen = styled(BoxCom)(({theme}) => ({
      display:"none",
      flexDirection:"column",
      [theme.breakpoints.down("sm")]: {
      display:"flex"
      },
      }));

      export const ButtonForDesktop = styled(BoxCom)(({theme}) => ({
        display:"flex",
        flexDirection:"column",
        [theme.breakpoints.down("sm")]: {
          display:"none",
        },
        }));