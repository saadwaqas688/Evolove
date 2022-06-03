import { styled} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";
  export const CourseCard = styled(BoxCom)(({ theme,src }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.darkGrey,
    borderRadius:"16px",
    border:"1px solid",
    height:"218px",
    width:"100%",
    [theme.breakpoints.down("lg")]: {
        width:"100%",
        height:"200px",
      },

  }));
  