import { styled} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";

  export const HomeContainer = styled(BoxCom)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.darkGrey,
    borderRadius:"16px",
    border:"1px solid",
    height:"139px",
    width:"203px",
    [theme.breakpoints.down("lg")]: {
        width:"100%",
        background:"green",
      },

  }));
  