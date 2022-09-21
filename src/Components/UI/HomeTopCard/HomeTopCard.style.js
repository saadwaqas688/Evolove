import { styled } from "@mui/material";
import BoxCom from "../../UI/BoxCom/BoxCom.jsx";
import {  Typography } from "@mui/material";

export const CardContainer = styled(BoxCom)(({ theme }) => ({

  border: "1px transparent",
  height: "139px",
  width: "45%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: "auto",
  },
}));

export const CourseImage = styled("div")(({ src, theme }) => ({
  backgroundImage: `url(${src})`,
  backgroundRepeat: 'no-repeat',
  borderRadius: "26px",
  // backgroundSize: 'cover',
  backgroundPosition: "left center",
  
  width: "100%",
  height: "100%",
  display:"flex",
  justifyContent:'center',
  alignItems:'center',
  [theme.breakpoints.down("lg")]: {
    height: "auto",
  },
}));

export const TagLine = styled(Typography)(({ theme }) => ({
  color:'white',
  
}));
