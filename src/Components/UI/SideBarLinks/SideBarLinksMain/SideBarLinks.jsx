import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
import { MoonCalanderIcon } from "../../../../assets/icons/MoonCalanderIcon";
const SideBarLinks = () => {

  const { pathname } = useLocation();
  return (
    <React.Fragment>
        <BoxCom sx={{textAlign:"center",marginTop:"20px"}}>
        <EvoloveIcon/>
        </BoxCom>

        <List sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"20px"}}>
              <ListItemButton  component="a" href="/"   >
                <ListItemIcon sx={{ color:pathname==='/'?'#E63369':Colors.grey,fontSize:"36px"}}>
                    <HomeIcon/>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }} primary="Home" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/blogs"   >
                <ListItemIcon sx={{ color:pathname==='/blogs'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <BlogIcon/>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }} primary="Blogs" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/shop"   >
                <ListItemIcon sx={{ color:pathname==='/shop'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <ShopIcon/>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }} primary="Shop" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/todo"   >
                <ListItemIcon sx={{ color:pathname==='/todo'?'#E63369':Colors.grey,fontSize:"36px"}}>
                 <TodoIcon/>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold" , fontFamily: '"Poppins", "sans-serif"'}} primary="TO-DO" disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/favorite"   >
                <ListItemIcon sx={{ color:pathname==='/favorite'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <FavoriteIcon/>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }}  disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/wallet"   >
                <ListItemIcon sx={{ color:'#E63369',fontSize:"36px"}}>
                  <WalletIcon style={{ color:'#E63369',fontSize:"36px"}}/>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }}  disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton  component="a" href="/moonCalender"   >
                <ListItemIcon sx={{ color:pathname==='/moonCalender'?'#E63369':Colors.grey,fontSize:"36px"}}>
                  <MoonCalanderIcon/>
                  <ListItemText sx={{ fontSize: "20px",fontWeight:"bold", fontFamily: '"Poppins", "sans-serif"' }}  disableTypography/>
                </ListItemIcon>
              </ListItemButton>
              
          </List>
    </React.Fragment>
  );
};

export default SideBarLinks;
