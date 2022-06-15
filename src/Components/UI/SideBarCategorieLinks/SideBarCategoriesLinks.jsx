import React from "react";
import {
  List,
  ListItemButton,
} from "@mui/material";
import {useLocation} from 'react-router';
import {ListItemTextContainer} from "./SideBarCategoriesLinks.style";
import { Colors } from "../../../config/palette";

const SideBarCategoriesLinks = () => {

  const { pathname } = useLocation();
  console.log(pathname)
   

  return (
    <>
        <List sx={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
              <ListItemButton  component="a" href="/home/categories/Psychology"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Psychology'?'#E63369':Colors.grey}} primary="Psychology" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Spirituality"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Spirituality'?'#E63369':Colors.grey}} primary="Spirituality" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Education"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Education'?'#E63369':Colors.grey}} primary="Education" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Awareness"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Awareness'?'#E63369':Colors.grey}} primary="Awareness" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Music"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Music'?'#E63369':Colors.grey}} primary="Music" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Natural Medicine"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Natural%20Medicine'?'#E63369':Colors.grey}} primary="Natural Medicine" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Conscious Business"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Conscious%20Business'?'#E63369':Colors.grey}} primary="Conscious business" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Yoga"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Yoga'?'#E63369':Colors.grey}} primary="Yoga" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Meditation"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Meditation'?'#E63369':Colors.grey}} primary="Meditation" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/home/categories/Others"   >
                  <ListItemTextContainer sx={{color:pathname==='/home/categories/Others'?'#E63369':Colors.grey}} primary="Others" disableTypography/>
              </ListItemButton>
          </List>
    </>
  );
};

export default SideBarCategoriesLinks;
