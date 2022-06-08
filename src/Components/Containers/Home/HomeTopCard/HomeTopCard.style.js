import { styled} from "@mui/material";
import BoxCom from "../../../UI/BoxCom/BoxCom";

  export const CardContainer = styled(BoxCom)(({ theme }) => ({
    borderRadius:"26px",
    border:"1px transparent",
    height:"139px",
    width:"45%",
    [theme.breakpoints.down("lg")]: {
        width:"100%",
        height:"auto",
      },

  }));
  

  export const CourseImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%", 
    height:"100%",
    [theme.breakpoints.down("lg")]: {
      height:'auto',
    },
  }));