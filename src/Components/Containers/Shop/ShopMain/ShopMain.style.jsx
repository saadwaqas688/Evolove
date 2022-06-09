import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  

  export const ShopHeading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"14px",
    marginBottom:"20px",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center"
      },
  }));

  