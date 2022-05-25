import { styled } from "@mui/material/styles";

export const AboutUsMainImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    // width: "150px",
    // height:'150px',
    width: "750px", 
    height:"500px",
    padding: '10px',
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      height:"auto",
  
      // padding: '24px',
    },
  }));