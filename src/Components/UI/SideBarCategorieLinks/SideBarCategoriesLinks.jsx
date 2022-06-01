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
  return (
    <>
        <List sx={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
              <ListItemButton  component="a" href="/categories/psychology"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/psychology'?'#E63369':Colors.grey}} primary="Psychology" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/spirituality"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/spirituality'?'#E63369':Colors.grey}} primary="Spirituality" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/education"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/education'?'#E63369':Colors.grey}} primary="Education" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/awareness"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/awareness'?'#E63369':Colors.grey}} primary="Awareness" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/music"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/music'?'#E63369':Colors.grey}} primary="Music" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/naturalmedicine"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/naturalmedicine'?'#E63369':Colors.grey}} primary="Natural Medicine" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/consciousbusiness"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/consciousbusiness'?'#E63369':Colors.grey}} primary="Conscious business" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/yoga"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/yoga'?'#E63369':Colors.grey}} primary="Yoga" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/meditation"   >
                  <ListItemTextContainer sx={{color:pathname==='/meditation'?'#E63369':Colors.grey}} primary="Meditation" disableTypography/>
              </ListItemButton>
              <ListItemButton  component="a" href="/categories/others"   >
                  <ListItemTextContainer sx={{color:pathname==='/categories/others'?'#E63369':Colors.grey}} primary="Others" disableTypography/>
              </ListItemButton>
          </List>
    </>
  );
};

export default SideBarCategoriesLinks;
