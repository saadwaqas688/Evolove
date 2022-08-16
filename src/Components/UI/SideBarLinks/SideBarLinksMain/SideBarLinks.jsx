import React from "react";
import {
  List,
  ListItemButton,
} from "@mui/material";
import {useLocation} from 'react-router';
import { Colors } from "../../../../config/palette";
import { EvoloveIcon } from "../../../../assets/icons/EvoloveIcon";
import BoxCom from "../../BoxCom/BoxCom";
import { HomeIcon } from "../../../../assets/icons/HomeIcon";
import BlogIcon from "../../../../assets/icons/BlogIcon";
import FavoriteIcon from "../../../../assets/icons/FavoriteIcon";
import { TodoIcon } from "../../../../assets/icons/TodoIcon";
import ShopIcon from "../../../../assets/icons/ShopIcon";
import WalletIcon from "../../../../assets/icons/WalletIcon";
import {LogOutIcon} from "../../../../assets/icons/LogOutIcon";
import { MoonCalanderIcon } from "../../../../assets/icons/MoonCalanderIcon";
import {ListItemTextContainer,ListItemIconContainer} from "./SideBarLinks.style";
import { getBasePath } from "../../../../Utils/utils";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";
import {signout} from './../../../../services/services.js'


const SideBarLinks = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();
  let { pathname } = useLocation();
  pathname=getBasePath(pathname)


  const logoutHandler = async() => {
    await signout()
    .then((res) => {
      enqueueSnackbar("Logout Succesfully", {
        variant: "success",
        autoHideDuration: 4000,
      });
      navigate("/");
    })
    .catch((error) => {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 4000,
      });
      
    });
  }
  return (
    <BoxCom sx={{background:Colors.dark}}>
        <BoxCom sx={{textAlign:"center",marginTop:"20px"}}>
        <EvoloveIcon/>
        </BoxCom>

        <List sx={{display:"flex",alignItems:"left",flexDirection:"column",marginTop:"20px",marginLeft:"40px"}}>
              <ListItemButton  component="a" href="/home"   >
                <ListItemIconContainer  sx={{color:pathname==='home'?'#E63369':Colors.grey}}>
                    <HomeIcon color={pathname==='home'?'#E63369':Colors.grey}/>
                  <ListItemTextContainer  primary="Home" disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              <ListItemButton  component="a" href="/blogs"   >
                <ListItemIconContainer sx={{color:pathname==='blogs'?'#E63369':Colors.grey}}>
                  <BlogIcon color={pathname==='blogs'?'#E63369':Colors.grey}/>
                  <ListItemTextContainer primary="Blogs" disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              <ListItemButton  component="a" href="/shop"   >
                <ListItemIconContainer  sx={{color:pathname==='shop'?'#E63369':Colors.grey}}>
                  <ShopIcon color={pathname==='shop'?'#E63369':Colors.grey}/>
                  <ListItemTextContainer  primary="Shop" disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              <ListItemButton  component="a" href="/todo"   >
                <ListItemIconContainer sx={{color:pathname==='todo'?'#E63369':Colors.grey}} >
                 <TodoIcon color={pathname==='todo'?'#E63369':Colors.grey}/>
                  <ListItemTextContainer primary="TO-DO" disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              <ListItemButton  component="a" href="/favorite"   >
                <ListItemIconContainer>
                  <FavoriteIcon color={pathname==='favorite'?'#E63369':Colors.grey}/>
                  <ListItemTextContainer   disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              <ListItemButton  component="a" href="/wallet"   >
                <ListItemIconContainer >
                  <WalletIcon color={pathname==='wallet'?'#E63369':Colors.grey}/>
                  <ListItemTextContainer   disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              <ListItemButton  component="a" href="/moonCalender"   >
                <ListItemIconContainer>
                  <MoonCalanderIcon color={pathname==='moonCalender'?'#E63369':Colors.grey}/>
                  <ListItemTextContainer   disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              <ListItemButton  onClick={logoutHandler}   >
                <ListItemIconContainer sx={{ color:Colors.grey,marginTop:"80px"}}>
                  <LogOutIcon/>
                  <ListItemTextContainer  primary="LogOut" disableTypography/>
                </ListItemIconContainer>
              </ListItemButton>
              
          </List>
    </BoxCom>
  );
};

export default SideBarLinks;
