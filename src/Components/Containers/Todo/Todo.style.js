import { Button, styled, Avatar, Typography } from "@mui/material";
import { Colors } from "../../../config/palette";
import IconButton from '@mui/material/IconButton';
import BoxCom from '../../UI/BoxCom/BoxCom';



//New Submission
export const NewSubmissionTypography = styled(Typography)(() => ({
  color: Colors.white,
  marginTop: "10px",
  fontSize: "14.8px",
  fontFamily: "Poppins"
}))


//TodoDiv1
export const TodoDiv1 = styled('div')(() => ({
  display: "flex",
   marginTop: "30px"
}))
//TodoDiv2
export const TodoDiv2 = styled('div')(() => ({
  display: "flex",
   marginTop: "10px"
}))
//TodoDiv3
export const TodoDiv3 = styled('div')(() => ({
  display: "flex", 
  marginTop: "10px"
}))
// Add Todo Button
export const AddTodoButton = styled(Typography)(({ theme }) => ({
  width: "95%",
  background: Colors.info,
  marginTop: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: Colors.light,
  height: "59px",
  border: "none",
  borderRadius: "36.5227px",
  [theme.breakpoints.down("lg")]: {
    height: "40px",
    marginLeft: "5px",
    marginBottom: "10px"
  }

}))


//New Submission
export const AddTodoBox = styled(Typography)(({theme}) => ({
  marginTop:"15px",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'column',
    background: "#1A1A1C",
    height: "19rem",
    width: "23rem",
    borderRadius: "8px",
    border: "0.25px solid #676F85",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      height: "18rem"
    },
  }))