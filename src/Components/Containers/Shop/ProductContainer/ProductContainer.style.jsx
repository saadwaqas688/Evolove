import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";

  export const Heading = styled(Typography)(({ theme }) => ({
      marginTop:"28px",
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontSize:"18px",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center"
      },
  }));
