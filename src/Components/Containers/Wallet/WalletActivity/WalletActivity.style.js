import { styled, Typography} from "@mui/material";
import { Colors } from "../../../../config/palette";  
import BoxCom from "../../../UI/BoxCom/BoxCom";

export const ActivityContainer = styled(BoxCom)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  background:Colors.dark,
  minHeight:"55px",
  width:"100%",
  marginTop:"15px",
  borderRadius:"6px",
// [theme.breakpoints.down("lg")]: {
//   textAlign:"center"
//   },
}));

export const Activity = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  paddingTop:"8px",
  paddingRight:"8px",
  paddingLeft:"8px",
  fontSize:"12px",
  color:Colors.light,
// [theme.breakpoints.down("lg")]: {
//   textAlign:"center"
//   },
}));
export const ActivityDate = styled(Typography)(({ theme }) => ({
  display:'flex',
  justifyContent:"flex-end",
  paddingBottom:"8px",
  paddingRight:"8px",
  fontSize:"12px",
  color:Colors.light,
// [theme.breakpoints.down("lg")]: {
//   textAlign:"center"
//   },
}));