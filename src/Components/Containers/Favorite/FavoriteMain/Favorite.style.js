import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";

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

  export const FilterWrapper = styled(BoxCom)(({ theme }) => ({
    background:Colors.dark,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    height:"57px",
    borderRadius:"10px",
    marginBottom:"20px",
    marginTop:"20px",
  }));

  export const Filter = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color:Colors.light,
    fontWeight:"bold",
    fontSize:"16px",
    cursor: "pointer",
  }));

  