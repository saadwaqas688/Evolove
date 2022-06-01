import { Box,Typography,TextField } from "@mui/material";
import { styled } from "@mui/material/styles";



 export const TextFieldContainer = styled( TextField
  )(() => ({
     background:"white",
     color:"orange",
//      display:"flex",
//   alignItems:"center",
//   justifyContent:"center",
//   flexDirection:"column",
"& input": {
  color: "red",
},

"& label.Mui-focused": {
  color: "red",
},
"& .MuiInput-underline:after": {
  borderBottomColor: "white",
},
"& .MuiOutlinedInput-root": {
  "& fieldset": {
    borderColor: "pink",
    borderRadius:"16px",
  },
  "&:hover fieldset": {
    borderColor: "black",
  },
  "&.Mui-focused fieldset": {
    borderColor: "black",
    color: "red",

  },
},


 }));