import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  

  export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    marginBottom:"10px",
    [theme.breakpoints.down("lg")]: {
      textAlign:"center"
      },
  }));

  