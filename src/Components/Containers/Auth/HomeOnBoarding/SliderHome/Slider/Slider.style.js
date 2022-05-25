import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { Colors } from "../../../../../../config/palette";

export const SlideImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    // width: "150px",
    // height:'150px',
    width: "100%", 
    height:"auto",
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      height:"auto",
  
      // padding: '24px',
    },
  }));

  export const PromotionsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      // padding: "40px 0px 40px 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    // background: Colors.secondary,
  }));
  