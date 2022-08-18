import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useLocation } from "react-router";
import { Colors } from "../../../../config/palette";
import { useNavigate } from "react-router-dom";
const NavBarLinks = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemIcon
            sx={{
              color: pathname === "/" ? "#E63369" : Colors.grey,
              fontSize: "36px",
            }}
          >
            <ListItemText
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: '"Poppins", "sans-serif"',
              }}
              primary="Home"
              disableTypography
            />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/aboutUs")}>
          <ListItemIcon
            sx={{
              color: pathname === "/aboutUs" ? "#E63369" : Colors.grey,
              fontSize: "36px",
            }}
          >
            <ListItemText
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: '"Poppins", "sans-serif"',
              }}
              primary="ABout Us"
              disableTypography
            />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          component="a"
          href="/contactUs"
          onClick={() => navigate("/contactUs")}
        >
          <ListItemIcon
            sx={{
              color: pathname === "/contactUs" ? "#E63369" : Colors.grey,
              fontSize: "36px",
            }}
          >
            <ListItemText
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: '"Poppins", "sans-serif"',
              }}
              primary="Contact Us"
              disableTypography
            />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/login")}>
          <ListItemIcon
            sx={{
              color: pathname === "/login" ? "#E63369" : Colors.grey,
              fontSize: "36px",
            }}
          >
            <ListItemText
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: '"Poppins", "sans-serif"',
              }}
              primary="LogIn"
              disableTypography
            />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/signUp")}>
          <ListItemIcon
            sx={{
              color: pathname === "/signUp" ? "#E63369" : Colors.grey,
              fontSize: "36px",
            }}
          >
            <ListItemText
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: '"Poppins", "sans-serif"',
              }}
              primary="SignUp"
              disableTypography
            />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </React.Fragment>
  );
};

export default NavBarLinks;
