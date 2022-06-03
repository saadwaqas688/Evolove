import { styled } from "@mui/material";
import { Colors } from "../../../../config/palette";


export const CourseVideoHeading = styled('div')(({ theme }) => ({
font:"Poppins",
width:"92px",
height:"28px",
paddingLeft: "20px" ,
color:Colors.light,
Top:"545.89px",
[theme.breakpoints.down("md")]: {
textAlign:"center"
},
}));
